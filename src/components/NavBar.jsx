import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerVisible ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [drawerVisible]);

  return (
    <header className="sticky top-0 z-40">

      {/* Hairline Glow */}
      <div className="h-[1px] w-full bg-[linear-gradient(90deg,transparent,rgba(253,197,31,.75),rgba(238,144,13,.55),rgba(20,48,69,.55),transparent)]" />

      <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-paper)]/75 backdrop-blur-xl">
        <nav className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img src="/logo.jpeg" className="h-12 w-12 rounded-xl" />
              <div>
                <p className="text-sm font-semibold text-[color:var(--color-brand)]">PURBI International</p>
                <p className="text-xs text-gray-500">Purvanchal & Bihar Network</p>
              </div>
            </a>

            {/* Desktop Menu */}
                        <ul className="hidden md:flex gap-2">
                          {["Home","About","Programs","Initiatives","Contact"].map(i => (
                            <li key={i}>
                              {i === "Contact" ? (
                                <Link to="/contact" className="px-4 py-2 rounded-full hover:text-yellow-600">
                                  {i}
                                </Link>
                              ) : (
                                <a href={`#${i.toLowerCase()}`} className="px-4 py-2 rounded-full hover:text-yellow-600">
                                  {i}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a href="#cta" className="hidden sm:inline-flex rounded-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                Get Involved
              </a>

              <button onClick={() => setDrawerVisible(true)} className="md:hidden text-2xl">
                ☰
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {drawerVisible && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-[80%] bg-white p-6">

            <button onClick={() => setDrawerVisible(false)} className="mb-4 text-xl">✕</button>

            {["Home","About","Programs","Initiatives","Contact"].map(i => (
                            i === "Contact" ? (
                              <Link
                                key={i}
                                to="/contact"
                                className="block py-3 text-lg"
                                onClick={() => setDrawerVisible(false)}
                              >
                                {i}
                              </Link>
                            ) : (
                              <a
                                key={i}
                                href={`#${i.toLowerCase()}`}
                                className="block py-3 text-lg"
                                onClick={() => setDrawerVisible(false)}
                              >
                                {i}
                              </a>
                            )
            ))}

            <a href="#cta" className="mt-4 block rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 p-3 text-center font-semibold">
              Get Involved
            </a>

            <p className="mt-4 text-xs text-gray-500">
              Building community, opportunities & impact across regions.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
