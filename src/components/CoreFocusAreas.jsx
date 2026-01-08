import Section from "./Section";

const areas = [
  {
    icon: "₹",
    title: "Economic Empowerment",
    description:
      "Enabling entrepreneurship, MSMEs, and professionals through structured economic engagement.",
  },
  {
    icon: "✶",
    title: "Cultural Preservation",
    description:
      "Positioning regional heritage as global cultural and economic capital to drive tourism and pride.",
  },
  {
    icon: "🌐",
    title: "Global Collaboration",
    description:
      "Building cross-border partnerships, diaspora engagement, and international dialogue.",
  },
  {
    icon: "⟡",
    title: "Inclusivity & Sustainability",
    description:
      "Ensuring equitable, responsible, and long-term development outcomes for all communities.",
  },
];

function CoreFocusAreas() {
  return (
    <Section id="focus-areas" className="relative overflow-hidden py-20 sm:py-28">
      {/* Background Ambience - Subtle and Professional */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.4] [background:radial-gradient(1200px_circle_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Minimalist */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            OUR CORE FOCUS
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-5 text-3xl font-bold text-[color:var(--color-brand)]">
            Four pillars of prosperity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--color-ink)]/65">
            Designed to work together strengthening people, institutions, and outcomes.
          </p>
        </div>

        {/* The "Pillars" Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          
          {/* Decorative Horizontal Line for Desktop (Top) */}
          <div className="hidden lg:block absolute top-0 left-4 right-4 h-px bg-[color:var(--color-border)]/40" />

          {areas.map((area, index) => (
            <div
              key={index}
              className={`
                group relative p-8 lg:p-10 flex flex-col items-start transition-all duration-500
                /* Border Logic */
                border-b border-[color:var(--color-border)]/40 lg:border-b-0
                ${index % 2 === 0 ? "md:border-r" : ""} /* Add right border to every 2nd item on tablet */
                lg:border-r lg:border-[color:var(--color-border)]/40
                /* Remove right border from last item on desktop */
                ${index === areas.length - 1 ? "lg:border-r-0" : ""}
                
                /* Hover Effect: Subtle background shift */
                hover:bg-white/40
              `}
            >
              {/* Vertical Line Highlight on Hover (Left side) */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[color:var(--color-gold)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Icon / Number */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-peacock)]/5 text-[color:var(--color-peacock)] group-hover:bg-[color:var(--color-peacock)] group-hover:text-white transition-colors duration-300">
                <span className="text-xl font-serif font-medium">{area.icon}</span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-[color:var(--color-brand)] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {area.title}
              </h4>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[color:var(--color-ink)]/65 mb-6">
                {area.description}
              </p>

              {/* "Learn More" Link - appears on hover or stays subtle */}
              <div className="mt-auto pt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-[color:var(--color-gold)] opacity-80 group-hover:opacity-100">
                <span className="border-b border-[color:var(--color-gold)] pb-0.5">
                    Explore
                </span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative Bottom Line for Desktop */}
        <div className="hidden lg:block absolute bottom-0 left-4 right-4 h-px bg-[color:var(--color-border)]/40" />

      </div>
    </Section>
  );
}

export default CoreFocusAreas;