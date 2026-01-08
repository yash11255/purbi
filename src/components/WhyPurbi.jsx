import Section from "./Section";

function WhyPurbi() {
  return (
    <Section id="why-purbi" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_12%_0%,rgba(253,197,31,.22),transparent_55%),radial-gradient(900px_circle_at_88%_30%,rgba(20,48,69,.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            WHY PURBI
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-5 text-3xl font-bold text-[color:var(--color-brand)]">
            From underrepresentation to global participation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--color-ink)]/65">
            Turning regional strengths into institutional pathways for impact — responsibly and sustainably.
          </p>
        </div>

        {/* 2x2 Grid Container */}
        <div className="border border-[color:var(--color-border)]/60 rounded-3xl bg-white/40 overflow-hidden shadow-sm">
          
          {/* ROW 1: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[color:var(--color-border)]/60">
            {/* Top Left */}
            <div className="p-10 md:border-r border-[color:var(--color-border)]/60">
              <div className="text-xs font-bold tracking-widest text-red-600 mb-4 uppercase">Problem</div>
              <h3 className="text-xl font-bold text-[color:var(--color-brand)] mb-3">
                Talent exists. <br /> Representation doesn’t.
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                Despite vast talent and cultural wealth, Purvanchal and Bihar remain underrepresented in global economic and policy ecosystems.
              </p>
              <div className="mt-6 text-[10px] font-bold text-[color:var(--color-ink)]/40 uppercase tracking-tight">
                Limited pathways • fragmented networks • low institutional lift
              </div>
            </div>

            {/* Top Right */}
            <div className="p-10 bg-[color:var(--color-gold)]/5">
              <div className="text-xs font-bold tracking-widest text-[color:var(--color-peacock)] mb-4 uppercase">Solution</div>
              <h3 className="text-xl font-bold text-[color:var(--color-brand)] mb-3">
                Platforms that convert potential into participation.
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/75 mb-6">
                PURBI creates institutional platforms that translate local potential into global participation — inclusively and sustainably.
              </p>
              <ul className="space-y-2 mb-8">
                {["Institutional credibility", "Global networks", "Responsible growth"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-[color:var(--color-ink)]/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-[#2a1606] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))] hover:brightness-105 transition shadow-sm">
                Join the movement →
              </a>
            </div>
          </div>

          {/* ROW 2: Vision & Mission (Relative container for anchoring the Plus) */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            
            {/* THE PLUS ICON - ANCHORED HERE 
                top-0 aligns it to the top of this row (which is the bottom of the previous row).
                -translate-y-1/2 pulls it up halfway so it sits perfectly ON the line.
            */}
            <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10">
               <div className="h-8 w-8 rounded-full bg-[#FFFCF2] border border-[color:var(--color-border)]/60 flex items-center justify-center">
                  <div className="text-[color:var(--color-gold)] text-lg leading-none pt-0.5">
                    +
                  </div>
               </div>
            </div>

            {/* Bottom Left */}
            <div className="p-10 md:border-r border-t md:border-t-0 border-[color:var(--color-border)]/60">
              <div className="text-xs font-bold tracking-widest text-[color:var(--color-peacock)] mb-4 uppercase">Vision</div>
              <h3 className="text-xl font-bold text-[color:var(--color-brand)] mb-3">
                A globally connected and confident region.
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                To build a globally connected, economically empowered, and culturally confident region that actively contributes to the world’s development.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="p-10 border-t md:border-t-0 border-[color:var(--color-border)]/60">
              <div className="text-xs font-bold tracking-widest text-[color:var(--color-brand)] mb-4 uppercase">Mission</div>
              <ul className="space-y-3">
                {[
                  "Enable sustainable economic empowerment",
                  "Preserve and promote cultural heritage",
                  "Foster international collaboration",
                  "Ensure inclusive growth aligned with sustainability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)] shrink-0" />
                    <span className="text-sm leading-relaxed text-[color:var(--color-ink)]/75 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

export default WhyPurbi;