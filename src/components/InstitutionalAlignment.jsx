import React from "react";
import Section from "./Section";

// Icons
const CompassIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

const ArrowIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function InstitutionalAlignment() {
  const objectives = [
    {
      title: "Economic Empowerment",
      subtitle: "The Engine of Dignity",
      intro:
        "PURBI defines this not simply as 'poverty alleviation,' but as the creation of wealth, dignity, and independence.",
      details: [
        {
          head: "Moving Beyond Subsistence",
          text: "Structurally shift the regional economy towards higher value-creation. Foster an environment where young people aspire to be job creators, not job seekers.",
        },
        {
          head: "Capacity Building over Aid",
          text: "Aid is temporary; capacity is permanent. Creating financial and intellectual infrastructure (angel networks, mentorship pipelines) to allow local enterprise to flourish.",
        },
        {
          head: "Retaining Value",
          text: "Stopping 'economic leakage.' Capturing value within the region to create a local economy robust enough to retain its best minds.",
        },
        {
          head: "The Metric of Success",
          text: "Measured not by people fed, but by businesses started, capital invested, and the rise in per capita income.",
        },
      ],
    },
    {
      title: "Cultural Preservation & Promotion",
      subtitle: "The Soul of Development",
      intro:
        "True development must nourish the identity of a people, not just build roads and factories.",
      details: [
        {
          head: "Countering Cultural Erasure",
          text: "Acting as a guardian of heritage by documenting, archiving, and keeping alive traditions, art forms, and wisdom traditions at risk of fading.",
        },
        {
          head: "Culture as Soft Power",
          text: "Promoting Madhubani art, Bhojpuri literature, and regional festivals globally to 'rebrand' the region—replacing the narrative of backwardness with richness.",
        },
        {
          head: "Psychological Impact",
          text: "Bridging the 'confidence gap.' When a community sees its culture celebrated globally, it instills the pride necessary to innovate and invest in the future.",
        },
      ],
    },
    {
      title: "Global Collaboration",
      subtitle: "The Multiplier Effect",
      intro:
        "Isolation is stagnation. To grow, Purvanchal and Bihar must connect with the world.",
      details: [
        {
          head: "Bridging the Diaspora Divide",
          text: "Connecting millions of NRIs across 30+ countries. Transforming the diaspora from a source of remittances to a reservoir of intellectual capital.",
        },
        {
          head: "Knowledge Transfer",
          text: "Facilitating the flow of global best practices in medicine, technology, and management from world-leading hubs to the villages of Bihar.",
        },
        {
          head: "Trade & Markets",
          text: "Integrating the region into global supply chains to ensure local producers (artisans, farmers) get global value for their labor.",
        },
      ],
    },
    {
      title: "Inclusivity & Sustainability",
      subtitle: "The Guardian of Growth",
      intro:
        "Growth that leaves people behind or destroys the environment is not progress—it is predation.",
      details: [
        {
          head: "The 'Last Mile' Focus",
          text: "Ensuring programs are not elitist but reach the rural artisan, the female entrepreneur, and students from disadvantaged backgrounds.",
        },
        {
          head: "Gender Parity",
          text: "Recognizing that no region prospers with half its population held back. Driving initiatives for women's financial independence and leadership.",
        },
        {
          head: "Environmental Stewardship",
          text: "Promoting resilience through green energy, sustainable farming, and water conservation. Ensuring today's gains don't compromise the next generation.",
        },
      ],
    },
  ];

  return (
    <Section
      id="institutional-alignment"
      className="relative overflow-hidden py-24"
    >
      {/* --- Advanced Ambient Background --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-multiply"></div>
        <div className="absolute top-0 left-1/4 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_70%)] opacity-[0.12] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] translate-y-1/3 rounded-full bg-[radial-gradient(circle,var(--color-peacock)_0%,transparent_70%)] opacity-[0.1] blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,48,69,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="mb-16">
          {/* --- Header --- */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
              INSTITUTIONAL ALIGNMENT{" "}
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
              Our Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[color:var(--color-ink)]/80 leading-relaxed">
            <div>
              <p className="mb-6 text-lg font-medium text-[color:var(--color-brand)]">
                In the landscape of development organizations, the difference
                between a fleeting initiative and a transformative movement
                often lies in the clarity of its objectives.
              </p>
              <p>
                Objectives are not merely a checklist of aspirations; they serve
                as the "strategic compass," guiding every decision, partnership,
                and resource allocation. For PURBI, these objectives are the
                foundational bedrock upon which the entire "New Blueprint for
                Growth" is constructed.
              </p>
            </div>
            <div className="border-l-2 border-[color:var(--color-gold)] pl-6">
              <p className="mb-4">
                While the "Core Focus Areas" describe <em>what</em> PURBI does
                (the tactics), "Our Objectives" describe <em>why</em> it exists
                and what end state it seeks to achieve (the strategy).
              </p>
              <p>
                Designed to dismantle the historical paradox of a resource-rich
                yet economically stagnant region, PURBI’s objectives move beyond
                the traditional charity model of "relief" to a robust model of{" "}
                <strong>"capacity building."</strong> They aim to create a
                system where the region does not just survive, but thrives on
                its own terms.
              </p>
            </div>
          </div>
        </div>

        {/* --- Objectives Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/40 border border-white/50 backdrop-blur-md p-8 lg:p-10 transition-all duration-500 hover:bg-white/90 hover:shadow-[0_20px_40px_-15px_rgba(20,48,69,0.1)]"
            >
              {/* Decorative Gradient Border on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none border-2 border-[color:var(--color-gold)]/20 rounded-3xl" />

              {/* Watermark Number */}
              <div className="absolute -right-4 -top-10 text-[10rem] leading-none font-bold text-[color:var(--color-brand)] opacity-[0.03] select-none font-serif group-hover:opacity-[0.06] transition-opacity duration-500">
                {index + 1}
              </div>

              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[color:var(--color-brand)]/5 text-[color:var(--color-brand)] text-xs font-bold uppercase tracking-wider mb-4">
                  {obj.subtitle}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-[color:var(--color-brand)] mb-3">
                  {obj.title}
                </h3>
                <p className="text-[color:var(--color-ink)]/70 italic mb-6 border-b border-[color:var(--color-gold)]/30 pb-6">
                  {obj.intro}
                </p>

                <ul className="space-y-6">
                  {obj.details.map((detail, idx) => (
                    <li key={idx}>
                      <h4 className="font-bold text-[color:var(--color-brand)] text-sm mb-1 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-peacock)]" />
                        {detail.head}
                      </h4>
                      <p className="text-sm text-[color:var(--color-ink)]/80 pl-3.5 border-l border-[color:var(--color-peacock)]/20">
                        {detail.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* --- Institutional Alignment Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-5 bg-[color:var(--color-brand)] rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--color-peacock)] opacity-20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">
              Institutional Alignment: <br />
              The "How" Behind the "What"
            </h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10">
              The PURBI website notes: "PURBI's approach is informed by best
              practices observed in national trade and development bodies, while
              remaining rooted in social development." This reveals our
              governance philosophy.
            </p>
          </div>

          <div className="lg:col-span-7 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur border border-white/50 rounded-3xl p-10 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[color:var(--color-gold)] font-bold uppercase tracking-wide text-sm mb-2">
                  Professionalism
                </h4>
                <p className="text-sm text-[color:var(--color-ink)]/80">
                  Running not like a disorganized charity, but like a
                  professional chamber of commerce. Objectives are designed to
                  be measurable, transparent, and scalable.
                </p>
              </div>
              <div>
                <h4 className="text-[color:var(--color-gold)] font-bold uppercase tracking-wide text-sm mb-2">
                  Credibility
                </h4>
                <p className="text-sm text-[color:var(--color-ink)]/80">
                  Building "institutional credibility." Trust is currency. Clear
                  objectives signal to investors and governments that PURBI is a
                  serious, long-term player committed to structural change.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Conclusion / Footer --- */}
        <div className="relative rounded-3xl overflow-hidden bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper))] p-1">
          <div className="bg-white/95 rounded-[22px] p-10 lg:p-14 text-center">
            <h4 className="text-3xl font-serif font-bold text-[color:var(--color-brand)] mb-6">
              A Vision of Integrated Progress
            </h4>

            <p className="max-w-4xl mx-auto text-[color:var(--color-ink)]/80 leading-relaxed mb-8 text-lg">
              Ultimately, these four objectives are not separate missions. They
              are the walls of a single house. You cannot have Economic
              Empowerment without Global Collaboration. You cannot have
              Sustainability without Cultural Confidence. And none of it matters
              without Inclusivity.
            </p>

            <p className="max-w-3xl mx-auto text-sm text-[color:var(--color-ink)]/60 italic mb-10">
              "Our Objectives" serve as a promise—that PURBI is working for a
              future where the region is globally connected, economically
              sovereign, and culturally vibrant.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-white
                bg-[color:var(--color-brand)] hover:brightness-110 active:scale-95 transition shadow-xl"
              >
                Explore Programs
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold
                border border-[color:var(--color-border)] bg-transparent text-[color:var(--color-brand)]
                hover:bg-[color:var(--color-brand)]/5 transition"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default InstitutionalAlignment;
