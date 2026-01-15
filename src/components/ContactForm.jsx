import { useState } from "react";
import Section from "./Section";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    country: "",
    city: "",
    state: "",
    phoneNo: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});



  const mandatoryFields = ["name", "email", "profession", "country", "city", "state", "phoneNo"];

  const validateForm = () => {
    const newErrors = {};

    // Check mandatory fields
    mandatoryFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    if (formData.phoneNo && !/^[0-9]{10}$/.test(formData.phoneNo.replace(/[-\s]/g, ""))) {
      newErrors.phoneNo = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitMessage("");

    // Compose WhatsApp message
    const message =
      `New PURBI Contact Form Submission:%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Profession: ${formData.profession}%0A` +
      `Country: ${formData.country}%0A` +
      `City: ${formData.city}%0A` +
      `State: ${formData.state}%0A` +
      `Phone: ${formData.phoneNo}`;

    // Replace with your WhatsApp number (with country code, no + or spaces)
    const waNumber = "919999999999";
    const waUrl = `https://wa.me/${waNumber}?text=${message}`;

    window.open(waUrl, "_blank");
    setLoading(false);
    setSubmitMessage("Redirecting to WhatsApp...");
    setFormData({
      name: "",
      email: "",
      profession: "",
      country: "",
      city: "",
      state: "",
      phoneNo: "",
    });
  };

  return (
    <Section id="contact" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            GET IN TOUCH
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[color:var(--color-brand)]">
            Join the PURBI Movement
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-[color:var(--color-ink)]/65">
            Share your interest in becoming part of our global network. Fill out the form below and we'll connect with you soon.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-[28px] border border-[color:var(--color-border)] bg-white/70 backdrop-blur shadow-lg p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Profession Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Profession <span className="text-red-500">*</span>
              </label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.profession
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              >
                <option value="">Select your profession</option>
                <option value="Student">Student</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Professional">Professional</option>
                <option value="Educator">Educator</option>
                <option value="Artist">Artist</option>
                <option value="Sports Professional">Sports Professional</option>
                <option value="Government Official">Government Official</option>
                <option value="Policy Maker">Policy Maker</option>
                <option value="Non-Profit/NGO">Non-Profit/NGO</option>
                <option value="Researcher">Researcher</option>
                <option value="Other">Other</option>
              </select>
              {errors.profession && <p className="mt-1 text-xs text-red-500">{errors.profession}</p>}
            </div>

            {/* Country Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.country
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              >
<option value="">Select your country</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>

<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>

<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>

<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>

<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>

<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>

<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guyana">Guyana</option>

<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>

<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>

<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>

<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>

<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>

<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>

<option value="Namibia">Namibia</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="North Korea">North Korea</option>
<option value="North Macedonia">North Macedonia</option>
<option value="Norway">Norway</option>

<option value="Oman">Oman</option>

<option value="Pakistan">Pakistan</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>

<option value="Qatar">Qatar</option>

<option value="Romania">Romania</option>
<option value="Russia">Russia</option>
<option value="Rwanda">Rwanda</option>

<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="South Africa">South Africa</option>
<option value="South Korea">South Korea</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>

<option value="Thailand">Thailand</option>
<option value="Turkey">Turkey</option>

<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="Uruguay">Uruguay</option>

<option value="Vietnam">Vietnam</option>

<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>

<option value="Other">Other</option>
              </select>
              {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
            </div>

            {/* City Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.city
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
            </div>

            {/* State Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Your state"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.state
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phoneNo
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.phoneNo && <p className="mt-1 text-xs text-red-500">{errors.phoneNo}</p>}
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`p-4 rounded-lg text-sm font-medium ${
                submitMessage.includes("successfully")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {submitMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full px-6 py-3 text-base font-semibold text-[#2a1606] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))] hover:brightness-105 active:brightness-95 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? "Submitting..." : "Submit Form"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-[color:var(--color-ink)]/50">
            <span className="text-red-500">*</span> Indicates required fields
          </p>
        </div>
      </div>
    </Section>
  );
}

export default ContactForm;
