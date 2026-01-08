import Section from "./Section";

function Blueprint() {
  return (
    <Section id="blueprint" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(20,48,69,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER: Restored to match 'WhyPurbi' and other sections */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            THE PURBI BLUEPRINT
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[color:var(--color-brand)]">
            A long-term plan for people, progress & place
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-[color:var(--color-ink)]/65">
            Economic advancement, social empowerment, and environmental stewardship 
            designed to work together.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Visual Pillars List */}
          <div className="lg:col-span-5 relative">
            {/* Vertical connector line (Desktop only) */}
            <div className="absolute left-[11px] top-3 bottom-8 w-px bg-[color:var(--color-border)] opacity-60 hidden md:block" />

            <div className="text-[11px] font-bold tracking-[0.2em] text-[color:var(--color-peacock)] uppercase mb-6 opacity-80">
              Three Linked Pillars
            </div>

            <ul className="space-y-8">
              {[
                ["Economic Advancement", "Jobs • Enterprise • Skills"],
                ["Social Empowerment", "Education • Health • Inclusion"],
                ["Environmental Stewardship", "Sustainability • Resilience"],
              ].map(([title, sub]) => (
                <li key={title} className="relative flex items-start gap-5 group">
                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 flex-none">
                     <div className="h-6 w-6 rounded-full bg-white border border-[color:var(--color-gold)] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <div className="h-2 w-2 rounded-full bg-[color:var(--color-gold)]" />
                     </div>
                  </div>
                  
                  {/* Text */}
                  <div>
                    <div className="text-lg font-bold text-[color:var(--color-brand)] group-hover:text-[color:var(--color-peacock)] transition-colors">
                      {title}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-[color:var(--color-ink)]/50">
                      {sub}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Narrative & Action */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/80 space-y-4">
              <p>
                The future of Purvanchal and Bihar requires a new blueprint for growth.
                Conventional socioeconomic models often prioritize short-term gains
                over long-term community well-being, resulting in uneven development
                and missed opportunities.
              </p>
              <p>
                PURBI is grounded in the belief that true prosperity emerges when
                <strong className="text-[color:var(--color-brand)] font-semibold"> economic advancement</strong>, 
                <strong className="text-[color:var(--color-brand)] font-semibold"> social empowerment</strong>, and 
                <strong className="text-[color:var(--color-brand)] font-semibold"> environmental stewardship </strong>
                are interwoven into a single, durable framework.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[color:var(--color-border)]/50 my-2" />

            {/* Footer / CTA - Vertical on Mobile to prevent text wrapping issues */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="text-sm font-bold text-[color:var(--color-brand)] flex items-center gap-2">
                <span className="text-[color:var(--color-gold)] text-lg">✶</span>
                Focused on durable outcomes.
              </div>

              <a
                href="#programs"
                className="inline-flex justify-center items-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold text-[#2a1606]
                bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                shadow-sm hover:shadow-md hover:brightness-105 transition-all duration-300"
              >
                Explore Programs →
              </a>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

export default Blueprint;