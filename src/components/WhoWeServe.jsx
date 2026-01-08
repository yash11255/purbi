import Section from "./Section";
import six_communities from "../assets/six_communities.png";

const items = [
  { title: "Youth and students", tag: "Skill • Guidance", icon: "✓" },
  { title: "Entrepreneurs and MSMEs", tag: "Enterprise • Network", icon: "₹" },
  {
    title: "Sports professionals and aspirants",
    tag: "Talent • Opportunity",
    icon: "⟲",
  },
  { title: "Cultural practitioners", tag: "Heritage • Promotion", icon: "✶" },
  {
    title: "Policymakers and institutions",
    tag: "Forums • Dialogue",
    icon: "⟡",
  },
  {
    title: "Global diaspora connected to Purvanchal and Bihar",
    tag: "Global • Collaboration",
    icon: "◉",
  },
];

// 6 fixed positions around center for desktop
const pos = [
  "left-1/2 top-0 -translate-x-1/2", // top
  "right-0 top-1/4 -translate-y-1/2", // top-right
  "right-0 bottom-1/4 translate-y-1/2", // bottom-right
  "left-1/2 bottom-0 -translate-x-1/2", // bottom
  "left-0 bottom-1/4 translate-y-1/2", // bottom-left
  "left-0 top-1/4 -translate-y-1/2", // top-left
];

function MiniItem({ icon, title, tag }) {
  return (
    <div className="w-[200px] rounded-2xl border border-[color:var(--color-border)] bg-white px-4 py-4 shadow-sm">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-paper)]">
        <span className="text-sm font-semibold text-[color:var(--color-peacock)]">
          {icon}
        </span>
      </div>
      <div className="mt-2 text-center">
        <div className="text-sm font-semibold text-[color:var(--color-brand)] leading-snug">
          {title}
        </div>
        <div className="mt-1 text-xs text-[color:var(--color-ink)]/65">
          {tag}
        </div>
      </div>
    </div>
  );
}

export default function WhoWeServe() {
  return (
    <Section id="who-we-serve">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            WHO WE SERVE
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            Six communities we support
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            Programs and platforms that create pathways to opportunity,
            visibility, and collaboration.
          </p>
        </div>

        <div className="mx-auto max-w-2xl w-full aspect-[3698/4028] rounded-2xl overflow-hidden">
            <img src={six_communities} alt="Six Communities" className="w-full h-full object-cover" />
        </div>

        {/* MOBILE / TABLET: list */}
        {/* <div className="lg:hidden">
          <ul className="space-y-5">
            {items.map((it, i) => (
              <li key={it.title} className="flex items-start gap-4">
                <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-paper)]">
                  <span className="text-sm font-semibold text-[color:var(--color-peacock)]">
                    {it.icon}
                  </span>
                </div>

                <div className="flex-1 border-b border-[color:var(--color-border)] pb-4">
                  <div className="font-semibold text-[color:var(--color-brand)] leading-snug">
                    {it.title}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--color-ink)]/65">
                    {it.tag}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div> */}

        {/* DESKTOP: radial (simple, clean) */}
        {/* <div className="hidden lg:block">
          <div className="relative mx-auto w-[min(760px,92vw)] aspect-square">
            <div className="pointer-events-none absolute inset-[10%] rounded-full border border-[color:var(--color-border)] opacity-70" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="grid place-items-center text-center rounded-full bg-[color:var(--color-peacock)] text-white shadow-sm w-[220px] h-[220px] px-6">
                <div>
                  <div className="text-[10px] font-semibold tracking-wide text-white/80">
                    PURBI
                  </div>
                  <div className="mt-1 text-lg font-semibold">Who We Serve</div>
                  <div className="mt-2 text-sm text-white/70 leading-snug">
                    Programs & platforms connecting communities to opportunity.
                  </div>
                </div>
              </div>
            </div>

            {items.map((it, i) => (
              <div key={it.title} className={`absolute ${pos[i]}`}>
                <MiniItem icon={it.icon} title={it.title} tag={it.tag} />
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[color:var(--color-ink)]/55">
            One core mission supporting six communities.
          </p>
        </div> */}
      </div>
    </Section>
  );
}
