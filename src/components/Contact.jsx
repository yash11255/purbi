import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-[color:var(--color-paper)] min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 border border-[color:var(--color-border)]">
        <h2 className="text-2xl font-bold text-[color:var(--color-brand)] mb-2">Contact Us</h2>
        <p className="mb-6 text-[color:var(--color-ink)]/70">We'd love to hear from you! Fill out the form below and our team will get in touch.</p>
        {submitted ? (
          <div className="text-green-600 font-semibold text-center py-8">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-[color:var(--color-ink)]" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[color:var(--color-border)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[color:var(--color-ink)]" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[color:var(--color-border)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[color:var(--color-ink)]" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl border border-[color:var(--color-border)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))] text-white font-semibold py-2 mt-2 hover:brightness-105 active:brightness-95 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
