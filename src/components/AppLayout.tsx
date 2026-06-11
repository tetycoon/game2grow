import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { siteImages } from "../lib/siteImages";

const primaryNavItems = [
  ["/", "Home"],
  ["/about", "About"]
] as const;

const programNavItems = [
  ["/corporate-training", "Corporate Training"],
  ["/student-programs", "Student Programs"],
  ["/faculty-development", "Faculty Development"],
  ["/career-mentoring", "Career Mentoring"]
] as const;

const otherNavItems = [
  ["/testimonial", "Testimonial"],
  ["/prestige-testimonial", "Prestige Testimonial"],
  ["/contact", "Contact"]
] as const;

const footerQuickLinks = [
  ["/", "Home"],
  ["/about", "About"],
  ["/testimonial", "Testimonial"],
  ["/contact", "Contact"]
] as const;

function FooterIcon({ children }: { children: ReactNode }) {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-brandGold/35 text-brandGold">
      {children}
    </span>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
      <path d="M7.5 4.5 10 8l-2 2c1.2 2.4 3.6 4.8 6 6l2-2 3.5 2.5c.4.3.5.8.3 1.2-.7 1.5-1.9 2.3-3.4 2.3C10.1 20 4 13.9 4 7.6c0-1.5.8-2.7 2.3-3.4.4-.2.9-.1 1.2.3Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
      <path d="M12 21s7-5.2 7-12A7 7 0 0 0 5 9c0 6.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
      <path d="M6.94 8.86H3.72V20h3.22V8.86ZM5.33 4a1.87 1.87 0 1 0 0 3.74A1.87 1.87 0 0 0 5.33 4Zm14.95 9.9c0-3.2-1.7-4.7-3.98-4.7-1.84 0-2.66 1.01-3.12 1.72V8.86H10.1V20h3.22v-5.51c0-1.48.28-2.91 2.11-2.91 1.8 0 1.83 1.68 1.83 3V20h3.22l-.2-6.1Z" />
    </svg>
  );
}

export function AppLayout() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isProgramActive = ["/corporate-training", "/student-programs", "/faculty-development", "/career-mentoring"].includes(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setMobileMenuOpen(false);
    setMobileProgramsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".section-fade"));
    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => {
      observer.observe(node);
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        node.classList.add("visible");
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#131313] text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-brandGold/20 bg-[#131313]/88 backdrop-blur-xl">
        <div className="mx-auto max-w-[1240px] px-3 sm:px-4">
          <div className="flex items-center justify-between gap-3 py-3">
            <Link to="/" className="flex min-w-0 items-center gap-2 text-base font-bold tracking-tight sm:text-lg">
              <img
                src={siteImages.brandLogo}
                alt="Game2Grow logo"
                className="h-10 w-10 rounded-full border border-brandGold/35 object-cover sm:h-12 sm:w-12"
              />
              <span className="truncate">
                <span className="text-2xl leading-none text-white sm:text-3xl">G</span>
                <span className="text-white sm:text-lg">AME</span>
                <span className="text-brandGold sm:text-lg">2GROW</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden rounded border border-brandGold px-3 py-2 text-[11px] font-semibold tracking-[0.12em] text-brandGold sm:inline-flex"
              >
                BOOK A SESSION
              </Link>
              <button
                type="button"
                className="inline-flex rounded border border-brandGold/50 p-2 text-brandGold lg:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span className="material-symbols-outlined">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          <nav className="hidden gap-5 pb-3 text-base lg:flex items-center">
            {primaryNavItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? "font-bold text-brandGold" : "font-bold text-zinc-300 hover:text-white")}
              >
                {label}
              </NavLink>
            ))}

            {/* Programs Dropdown */}
            <div className="group relative flex items-center h-full py-1">
              <button
                type="button"
                className={`flex items-center gap-1 font-bold ${
                  isProgramActive ? "text-brandGold" : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>Programs</span>
                <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-180">
                  keyboard_arrow_down
                </span>
              </button>
              <div className="absolute top-[92%] left-0 z-30 mt-1 w-64 origin-top-left scale-95 rounded-lg border border-brandGold/25 bg-[#131313] p-2 opacity-0 shadow-2xl transition-all duration-200 pointer-events-none group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100">
                {programNavItems.map(([to, label]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `block rounded px-3 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-brandGold/15 text-brandGold"
                          : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            {otherNavItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? "font-bold text-brandGold" : "font-bold text-zinc-300 hover:text-white")}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div
            id="mobile-nav-menu"
            className={`mobile-menu-shell lg:hidden ${
              mobileMenuOpen ? "mobile-menu-shell-open" : "mobile-menu-shell-closed"
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            {primaryNavItems.map(([to, label], index) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `mobile-menu-item rounded border px-3 py-2 text-base font-bold ${
                    isActive
                      ? "border-brandGold/50 bg-brandGold/10 text-brandGold"
                      : "border-brandGold/20 bg-black/35 text-zinc-200"
                  }`
                }
                style={{ animationDelay: `${index * 55}ms` }}
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Programs Accordion */}
            <button
              type="button"
              className={`mobile-menu-item flex w-full items-center justify-between rounded border px-3 py-2 text-base font-bold ${
                isProgramActive
                  ? "border-brandGold/50 bg-brandGold/10 text-brandGold"
                  : "border-brandGold/20 bg-black/35 text-zinc-200"
              }`}
              style={{ animationDelay: `${primaryNavItems.length * 55}ms` }}
              onClick={() => setMobileProgramsOpen((prev) => !prev)}
            >
              <span>Programs</span>
              <span className={`material-symbols-outlined transition-transform duration-300 ${mobileProgramsOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            <div
              className={`grid gap-2 pl-4 transition-all duration-300 overflow-hidden ${
                mobileProgramsOpen ? "max-h-[300px] opacity-100 mt-1 mb-1" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              {programNavItems.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `rounded border px-3 py-2 text-sm font-bold block ${
                      isActive
                        ? "border-brandGold/45 bg-brandGold/10 text-brandGold"
                        : "border-brandGold/10 bg-black/20 text-zinc-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {otherNavItems.map(([to, label], index) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `mobile-menu-item rounded border px-3 py-2 text-base font-bold ${
                    isActive
                      ? "border-brandGold/50 bg-brandGold/10 text-brandGold"
                      : "border-brandGold/20 bg-black/35 text-zinc-200"
                  }`
                }
                style={{ animationDelay: `${(primaryNavItems.length + 1 + index) * 55}ms` }}
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mobile-menu-item mt-1 rounded bg-brandGold px-3 py-2 text-center text-xs font-semibold tracking-[0.12em] text-black"
              style={{ animationDelay: `${(primaryNavItems.length + 1 + otherNavItems.length) * 55}ms` }}
            >
              BOOK A SESSION
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-3 py-8 sm:px-4 sm:py-10 md:py-14">
        <Outlet />
      </main>

      {!isHomePage && (
        <section className="mx-auto max-w-[1240px] px-3 sm:px-4">
          <div className="section-fade rounded-2xl border border-brandGold/30 bg-black/70 p-6 sm:p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.32em]">
                  INITIATION
                </p>
                <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl">Command Your Growth Journey</h2>
                <p className="mt-4 text-zinc-300">
                  Ready to level up? Reach out today and build your Game2Grow experience.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <Link
                  to="/contact"
                  className="block w-full rounded bg-brandGold px-6 py-3 text-center font-semibold text-black"
                >
                  Reserve Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="relative mt-10 overflow-hidden border-t border-brandGold/20 bg-black/80 px-3 pt-0 text-sm text-zinc-300 sm:px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(201,168,76,0.18),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(201,168,76,0.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1240px]">
          <div className="grid gap-8 py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-4">
            <article>
              <div className="flex items-center gap-3">
                <img
                  src={siteImages.brandLogo}
                  alt="Game2Grow logo"
                  className="h-14 w-14 rounded-full border border-brandGold/35 object-cover sm:h-16 sm:w-16"
                />
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  <span className="text-2xl leading-none text-white sm:text-3xl">G</span>
                  <span className="text-white">AME</span>
                  <span className="text-brandGold">2GROW</span>
                </p>
              </div>
              <p className="mt-3 max-w-sm text-zinc-300">
                Experience. Learn. Grow. Practical learning journeys designed to improve confidence, employability,
                and team execution.
              </p>
            </article>

            <article>
              <p className="text-[11px] uppercase tracking-[0.14em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2">
                {footerQuickLinks.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-zinc-300 transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <p className="text-[11px] uppercase tracking-[0.14em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
                Program Tracks
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/corporate-training" className="text-zinc-300 transition hover:text-white">
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link to="/student-programs" className="text-zinc-300 transition hover:text-white">
                    Student Programs
                  </Link>
                </li>
                <li>
                  <Link to="/faculty-development" className="text-zinc-300 transition hover:text-white">
                    Faculty Development
                  </Link>
                </li>
                <li>
                  <Link to="/career-mentoring" className="text-zinc-300 transition hover:text-white">
                    Career Mentoring
                  </Link>
                </li>
              </ul>
            </article>

            <article>
              <p className="text-[11px] uppercase tracking-[0.14em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
                Contact
              </p>
              <div className="mt-4 space-y-3 break-words">
                <a href="mailto:game2grow.g2g@gmail.com" className="flex items-start gap-2 text-zinc-300 transition hover:text-white">
                  <FooterIcon>
                    <MailIcon />
                  </FooterIcon>
                  <span>game2grow.g2g@gmail.com</span>
                </a>
                <a href="tel:+919790555270" className="flex items-start gap-2 text-zinc-300 transition hover:text-white">
                  <FooterIcon>
                    <PhoneIcon />
                  </FooterIcon>
                  <span>+91 97905 55270</span>
                </a>
                <p className="flex items-start gap-2 text-zinc-300">
                  <FooterIcon>
                    <LocationIcon />
                  </FooterIcon>
                  <span>Coimbatore, Tamil Nadu, India</span>
                </p>
                <a
                  href="https://www.linkedin.com/in/anjen-fernando"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 text-zinc-300 underline decoration-brandGold/70 underline-offset-4 transition hover:text-white"
                >
                  <FooterIcon>
                    <LinkedinIcon />
                  </FooterIcon>
                  <span>LinkedIn</span>
                </a>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-2 border-t border-brandGold/20 py-4 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p>(c) {year} Game2Grow. All rights reserved.</p>
            <p>Gamified Learning Company | Pan India Delivery</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
