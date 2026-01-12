import { useEffect, useState } from "react";

function NavBar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Lock scroll when drawer is visible
  useEffect(() => {
    document.body.style.overflow = drawerVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerVisible]);

  const openDrawer = () => {
    setIsClosing(false);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsClosing(true);
    setTimeout(() => setDrawerVisible(false), 350);
  };

  return (
    <header className="sticky top-0 z-40">
      {/* top hairline glow */}
      <div className="h-[1px] w-full bg-[linear-gradient(90deg,transparent,rgba(253,197,31,.75),rgba(238,144,13,.55),rgba(20,48,69,.55),transparent)]" />

      <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-paper)]/75 backdrop-blur-xl">
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Left: logo + title */}
            <a
              href="#home"
              className="group flex items-center gap-3 rounded-2xl px-2 py-1 transition hover:bg-black/5"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white shadow-sm">
                <img className="h-full w-full object-cover" src="/logo.jpeg" alt="PURBI logo" />
                {/* corner glow */}
                <div className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 rounded-full bg-[color:var(--color-gold)]/30 blur-xl" />
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-[color:var(--color-brand)]">
                  PURBI International
                </div>
                <div className="text-[11px] text-[color:var(--color-ink)]/60">
                  Connect East to the World
                </div>
              </div>
            </a>

            {/* Center: links (desktop) */}
            <ul className="hidden md:flex items-center gap-1 rounded-full border border-[color:var(--color-border)] bg-white/70 px-2 py-1 shadow-sm">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Programs", "#programs"],
                ["Initiatives", "#initiatives"],
                ["Global Advisors", "#advisors"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-[color:var(--color-ink)]/80 transition hover:text-[color:var(--color-peacock)]"
                  >
                    {label}
                    {/* subtle underline on hover */}
                    <span className="pointer-events-none absolute inset-x-4 -bottom-[2px] h-[2px] origin-left scale-x-0 rounded-full bg-[color:var(--color-gold)] transition-transform duration-200 hover:scale-x-100 md:group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#2a1606]
                shadow-[0_10px_30px_rgba(68,29,11,.18),0_2px_10px_rgba(20,48,69,.08)]
                bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                hover:brightness-105 active:brightness-95 transition"
              >
                Get Involved
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-peacock)]/70" />
              </a>

              {/* Mobile button */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={drawerVisible}
                onClick={openDrawer}
                className="md:hidden inline-flex items-center justify-center rounded-2xl border border-[color:var(--color-border)] bg-white/70 p-2 shadow-sm hover:bg-white"
              >
                <div className="flex flex-col gap-1">
                  <span className="h-[2px] w-5 rounded bg-[color:var(--color-brand)]" />
                  <span className="h-[2px] w-5 rounded bg-[color:var(--color-brand)]/80" />
                  <span className="h-[2px] w-5 rounded bg-[color:var(--color-brand)]/60" />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile overlay + drawer */}
      {drawerVisible && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={closeDrawer}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] fade-in"
          />

          {/* Drawer */}
          <div className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[color:var(--color-paper)] shadow-2xl ${isClosing ? "slide-out" : "slide-in"}`}>
            <div className="h-[2px] w-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-copper),var(--color-peacock))]" />

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white shadow-sm">
                  <img className="h-full w-full object-cover" src="/logo.jpeg" alt="PURBI logo" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-brand)]">
                    PURBI International
                  </div>
                  <div className="text-[11px] text-[color:var(--color-ink)]/60">
                    Community • Programs • Impact
                  </div>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeDrawer}
                className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-2 hover:bg-white"
              >
                <span className="block text-lg leading-none text-[color:var(--color-brand)]">
                  ×
                </span>
              </button>
            </div>

            <div className="px-4 pb-4">
              <div className="rounded-3xl border border-[color:var(--color-border)] bg-white/70 p-2">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Programs", "#programs"],
                  ["Initiatives", "#initiatives"],
                  ["Global Advisors", "#advisors"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={closeDrawer}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--color-ink)]/85 hover:bg-black/5"
                  >
                    <span>{label}</span>
                    <span className="h-2 w-2 rounded-full bg-[color:var(--color-gold)]/70" />
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={closeDrawer}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-[#2a1606]
                shadow-[0_12px_40px_rgba(68,29,11,.18)]
                bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                hover:brightness-105 active:brightness-95 transition"
              >
                Get Involved
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-peacock)]/70" />
              </a>

              <p className="mt-4 text-xs text-[color:var(--color-ink)]/55">
                Building community, opportunities & impact across regions.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
