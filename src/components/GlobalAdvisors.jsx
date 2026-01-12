import Section from "./Section";
import CardBox from "./ui/CardBox";

function AdvisorSkeleton() {
  return (
    <CardBox
      className="
        group relative overflow-hidden
        rounded-[var(--radius-card)]
        border border-[color:var(--color-border)]
        bg-white/80 backdrop-blur
        shadow-[0_12px_40px_rgba(68,29,11,.08),0_2px_10px_rgba(20,48,69,.05)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_22px_70px_rgba(68,29,11,.12),0_10px_30px_rgba(20,48,69,.10)]
      "
    >
      {/* top accent rail */}
      <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-copper),var(--color-peacock))]" />

      {/* spotlight hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(420px_circle_at_50%_30%,rgba(253,197,31,.18),transparent_60%)]" />

      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,rgba(20,48,69,.45)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative flex flex-col gap-4 p-4">
        {/* skeleton image */}
        <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>

        {/* skeleton text lines */}
        <div className="space-y-3">
          {/* name line */}
          <div className="h-4 rounded bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse w-3/4">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          {/* description line 1 */}
          <div className="h-3 rounded bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse w-full">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          {/* description line 2 */}
          <div className="h-3 rounded bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse w-5/6">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </CardBox>
  );
}

function GlobalAdvisors() {
  const advisorCount = 20;

  return (
    <Section id="advisors" className="relative overflow-hidden">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_15%_0%,rgba(253,197,31,.18),transparent_55%),radial-gradient(900px_circle_at_85%_40%,rgba(20,48,69,.10),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            GLOBAL NETWORK
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            Our Global Advisors
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            Leading experts from around the world guiding our vision and strategic
            direction across multiple sectors and geographies.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: advisorCount }).map((_, index) => (
            <AdvisorSkeleton key={index} />
          ))}
        </div>

        {/* footer accent */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-[color:var(--color-ink)]/55">
          <span className="h-px w-12 bg-[color:var(--color-border)]" />
          Global • Diverse • Experienced
          <span className="h-px w-12 bg-[color:var(--color-border)]" />
        </div>
      </div>
    </Section>
  );
}

export default GlobalAdvisors;
