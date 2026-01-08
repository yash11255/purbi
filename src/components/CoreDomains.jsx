import Section from "./Section";
import geomap from "../assets/map2.jpg";

function DomainItem({ num, title, description, tags = [] }) {
  return (
    <div className="group relative p-5 sm:p-6">
      <div className="flex items-start gap-4">
        {/* number medallion */}
        <div className="relative shrink-0">
          <div className="grid h-11 w-11 place-items-center rounded-[18px] border border-[color:var(--color-border)] bg-white/70 shadow-sm">
            <div className="grid h-9 w-9 place-items-center rounded-[16px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))] text-[#2a1606] font-extrabold">
              {num}
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* title */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-brand)]">
              {title}
            </h3>

            {/* tiny status dot (hoverable) */}
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-peacock)]/50 shadow-[0_0_0_5px_rgba(20,48,69,.08)]" />
          </div>

          <p className="text-sm leading-relaxed text-[color:var(--color-ink)]/70">
            {description}
          </p>

          {/* tags */}
          {tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-paper)]/70 px-3 py-1 text-xs font-semibold text-[color:var(--color-ink)]/70"
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {/* micro link */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-peacock)]/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            View initiatives
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoreDomains() {
  return (
    <Section id="core-domains" className="relative overflow-hidden">
      {/* section background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(20,48,69,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            OUR CORE DOMAINS
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            Four domains that convert potential into outcomes
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            Each domain is designed as a practical pathwaysupported by programs,
            partnerships, and institutional dialogue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* left: list */}
          <div className="">
            <DomainItem
              num="01"
              title="Economic Development"
              description="Facilitating business dialogues, supporting MSMEs, and enabling access to institutional knowledge."
              tags={["MSMEs", "Enterprise", "Institutions"]}
            />
            <DomainItem
              num="02"
              title="Skill Development"
              description="Industry-aligned skill readiness, youth employability, and entrepreneurship capacity building."
              tags={["Youth", "Employability", "Entrepreneurship"]}
            />
            <DomainItem
              num="03"
              title="Sports Development"
              description="Identifying grassroots talent, promoting sports awareness, and connecting athletes with opportunities."
              tags={["Grassroots", "Talent", "Opportunities"]}
            />
            <DomainItem
              num="04"
              title="Economic & Policy Forums"
              description="Organizing dialogues bringing together policymakers, industry leaders, and experts."
              tags={["Policy", "Forums", "Leadership"]}
            />
          </div>

          {/* right: “Map panel” placeholder */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-white/75 backdrop-blur shadow-[0_18px_60px_rgba(68,29,11,.12),0_2px_10px_rgba(20,48,69,.06)]">
              {/* header hairline */}
              <div className="h-[2px] w-full bg-[linear-gradient(90deg,rgba(253,197,31,0),rgba(253,197,31,.9),rgba(238,144,13,.8),rgba(20,48,69,.7),rgba(253,197,31,0))]" />

              <div className="relative p-3">
                  <div className="relative wire-box h-64 sm:h-80 lg:h-[360px] rounded-[22px] overflow-hidden flex items-center justify-center bg-[color:var(--color-paper)]/70">
                    <img
                      src={geomap}
                      alt="map"
                      className="h-full w-full object-cover"
                    />

                    {/* subtle overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(20,48,69,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.25)_1px,transparent_1px)] [background-size:44px_44px]" />

                  {/* soft vignette */}
                  <div className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_circle_at_50%_20%,rgba(253,197,31,.22),transparent_55%)]" />
                </div>

                {/* floating legend chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Programs", "Partnerships", "Institutions", "Impact"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--color-brand)]"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
                        {chip}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* corner glow */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-[color:var(--color-peacock)]/12 blur-3xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CoreDomains;
