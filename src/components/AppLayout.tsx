import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { siteImages } from "../lib/siteImages";

const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/corporate-training", "Corporate Training"],
  ["/student-programs", "Student Programs"],
  ["/faculty-development", "Faculty Development"],
  ["/career-mentoring", "Career Mentoring"],
  ["/testimonial", "Testimonial"],
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setMobileMenuOpen(false);
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

          <nav className="hidden gap-5 pb-3 text-base lg:flex">
            {navItems.map(([to, label]) => (
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
            {navItems.map(([to, label], index) => (
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
            <Link
              to="/contact"
              className="mobile-menu-item mt-1 rounded bg-brandGold px-3 py-2 text-center text-xs font-semibold tracking-[0.12em] text-black"
              style={{ animationDelay: `${navItems.length * 55}ms` }}
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
                <a href="mailto:admin@game2growsolutions.com" className="flex items-start gap-2 text-zinc-300 transition hover:text-white">
                  <FooterIcon>
                    <MailIcon />
                  </FooterIcon>
                  <span>admin@game2growsolutions.com</span>
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919790555270"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 hover:bg-emerald-600 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7 fill-current">
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.5 0 .14 5.34.14 11.91c0 2.1.55 4.15 1.59 5.95L0 24l6.32-1.65a11.87 11.87 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.35 11.92-11.91a11.84 11.84 0 0 0-3.48-8.43Zm-8.44 18.33h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.91 9.91 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.98-.27-.1-.47-.15-.67.16-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.47-2.41-1.5a9.07 9.07 0 0 1-1.67-2.08c-.18-.3-.02-.47.13-.62.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.03 1-.03 2.44 1 1.44 2.28 2.82 3.9 3.86 1.62 1.03 3.16 1.36 4.3 1.43 1.14.07 2.03-.49 2.32-.97.29-.48.29-.89.2-.98-.09-.09-.28-.15-.58-.3Z" />
        </svg>
      </a>
    </div>
  );
}
