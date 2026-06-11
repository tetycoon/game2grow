import { EnquiryForm } from "../components/EnquiryForm";
import { contactCallToAction } from "../lib/brochureContent";

const WHATSAPP_NUMBER = "919790555270";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const contactPoints = [
  {
    icon: "mail",
    label: "Email",
    value: "game2grow.g2g@gmail.com",
    href: "mailto:game2grow.g2g@gmail.com"
  },
  {
    icon: "call",
    label: "Phone",
    value: "+91 97905 55270",
    href: "tel:+919790555270"
  },
  {
    icon: "location_on",
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    href: null
  }
] as const;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.5 0 .14 5.34.14 11.91c0 2.1.55 4.15 1.59 5.95L0 24l6.32-1.65a11.87 11.87 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.35 11.92-11.91a11.84 11.84 0 0 0-3.48-8.43Zm-8.44 18.33h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.91 9.91 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.98-.27-.1-.47-.15-.67.16-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.47-2.41-1.5a9.07 9.07 0 0 1-1.67-2.08c-.18-.3-.02-.47.13-.62.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.03 1-.03 2.44 1 1.44 2.28 2.82 3.9 3.86 1.62 1.03 3.16 1.36 4.3 1.43 1.14.07 2.03-.49 2.32-.97.29-.48.29-.89.2-.98-.09-.09-.28-.15-.58-.3Z" />
    </svg>
  );
}

export function ContactPage() {
  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-7 md:p-10">
        <h1 className="mt-3 text-xl sm:text-2xl md:text-4xl">Ready to Level Up?</h1>
        <p className="mt-3 max-w-3xl text-zinc-300">{contactCallToAction}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <EnquiryForm title="Demo Booking Form" />

        <aside className="space-y-6">
          <article className="glass-card rounded-xl p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-brandGold sm:text-xs sm:tracking-[0.24em]">Direct Contact</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Speak With Game2Grow</h2>
            <p className="mt-3 text-zinc-300">
              Reach out through any channel below. For faster coordination, mention your audience type in the enquiry form.
            </p>

            <div className="mt-6 space-y-4">
              {contactPoints.map((point) => (
                <article key={point.label} className="rounded-lg border border-brandGold/20 bg-black/35 p-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-brandGold">{point.icon}</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{point.label}</p>
                      {point.href ? (
                        <a href={point.href} className="mt-1 inline-block text-zinc-100 transition hover:text-brandGold">
                          {point.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-zinc-100">{point.value}</p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-between rounded-xl border border-emerald-400/45 bg-emerald-500/15 px-4 py-4 text-emerald-200 transition hover:bg-emerald-500/25"
              aria-label="Chat on WhatsApp"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-emerald-200/90">WhatsApp</span>
                  <span className="block text-sm font-semibold">Start Chat Now</span>
                </span>
              </span>
              <span className="material-symbols-outlined text-emerald-100">arrow_forward</span>
            </a>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:game2grow.g2g@gmail.com"
                className="rounded border border-brandGold/40 bg-brandGold/10 px-4 py-3 text-center text-xs font-semibold tracking-[0.14em] text-brandGold transition hover:bg-brandGold/20"
              >
                EMAIL NOW
              </a>
              <a
                href="tel:+919790555270"
                className="rounded border border-brandGold/40 bg-brandGold/10 px-4 py-3 text-center text-xs font-semibold tracking-[0.14em] text-brandGold transition hover:bg-brandGold/20"
              >
                CALL NOW
              </a>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
