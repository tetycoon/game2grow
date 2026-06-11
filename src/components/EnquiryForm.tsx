import { CSSProperties, FormEvent, useState } from "react";

type Props = {
  title: string;
};

const WHATSAPP_NUMBER = "919790555270";
const ENQUIRIES_STORAGE_KEY = "game2grow_enquiries";

type EnquiryPayload = {
  audience: "corporate" | "institution";
  name: string;
  organisation: string;
  designation: string;
  mobile: string;
  email: string;
  programInterest: string;
  message: string;
};

const categoryOptions = [
  "Corporate Training",
  "College / Institution Programs",
  "Student Programs",
  "Faculty Development",
  "Career Mentoring"
] as const;

const getInitialForm = () => ({
  category: "Corporate Training" as (typeof categoryOptions)[number],
  name: "",
  organisation: "",
  mobile: "",
  email: "",
  programInterest: "",
  message: ""
});

const buildWhatsAppMessage = (form: ReturnType<typeof getInitialForm>) => {
  return [
    "New Demo Booking Enquiry - Game2Grow Website",
    "",
    `Category: ${form.category}`,
    `Name: ${form.name}`,
    `Organisation/Institution: ${form.organisation}`,
    `Mobile: ${form.mobile}`,
    `Email: ${form.email}`,
    `Program Interest: ${form.programInterest}`,
    "",
    "Message:",
    form.message
  ].join("\n");
};

const hasText = (value: string, minLength: number) => value.trim().length >= minLength;
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const saveEnquiryInBrowser = async (payload: EnquiryPayload) => {
  if (
    !hasText(payload.name, 2) ||
    !hasText(payload.organisation, 2) ||
    !hasText(payload.designation, 2) ||
    !hasText(payload.mobile, 8) ||
    !isEmail(payload.email) ||
    !hasText(payload.programInterest, 2) ||
    !hasText(payload.message, 5)
  ) {
    throw new Error("Invalid enquiry payload");
  }

  const entry = {
    ...payload,
    createdAt: new Date().toISOString()
  };
  const existing = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
  const parsed = existing ? (JSON.parse(existing) as unknown[]) : [];
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify([...parsed, entry]));
};

export function EnquiryForm({ title }: Props) {
  const [form, setForm] = useState(getInitialForm());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMeta, setSuccessMeta] = useState<{
    submittedAt: string;
    whatsappUrl: string;
    storedInBrowser: boolean;
  } | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSuccessMeta(null);
    setIsSubmitting(true);

    const payload: EnquiryPayload = {
      audience: form.category === "Corporate Training" ? "corporate" : "institution",
      name: form.name,
      organisation: form.organisation,
      designation: "Not Provided",
      mobile: form.mobile,
      email: form.email,
      programInterest: form.programInterest,
      message: form.message
    };

    const whatsappText = buildWhatsAppMessage(form);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

    let storedInBrowser = true;
    try {
      await saveEnquiryInBrowser(payload);
    } catch {
      storedInBrowser = false;
    } finally {
      setIsSubmitting(false);
    }

    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = whatsappUrl;
      return;
    }

    setSuccessMeta({
      submittedAt: new Date().toLocaleString("en-IN"),
      whatsappUrl,
      storedInBrowser
    });
    setForm(getInitialForm());
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-brandGold/35 bg-zinc-950/70 p-4 shadow-[0_20px_80px_-30px_rgba(201,168,76,0.25)] sm:p-6"
    >
      <h3 className="text-base font-semibold tracking-wide text-brandGold">{title}</h3>

      <div className="space-y-1">
        <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">Category</label>
        <select
          value={form.category}
          className="field-base"
          onChange={(e) => {
            const nextCategory = e.target.value as (typeof categoryOptions)[number];
            setForm({
              ...form,
              category: nextCategory
            });
          }}
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category} className="bg-zinc-900">
              {category}
            </option>
          ))}
        </select>
      </div>

      <input
        required
        placeholder="Full Name"
        className="field-base"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        required
        placeholder="Organisation / Institution"
        className="field-base"
        value={form.organisation}
        onChange={(e) => setForm({ ...form, organisation: e.target.value })}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          placeholder="Mobile"
          className="field-base"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="field-base"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <input
        required
        placeholder="Program Interested In"
        className="field-base"
        value={form.programInterest}
        onChange={(e) => setForm({ ...form, programInterest: e.target.value })}
      />
      <textarea
        required
        placeholder="Message"
        className="field-base min-h-28 resize-y"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-brandGold px-4 py-2.5 text-sm font-semibold tracking-[0.14em] text-black transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "PROCESSING..." : "BOOK FREE DEMO"}
      </button>

      {successMeta && (
        <article className="success-burst relative overflow-hidden rounded-xl border border-emerald-400/50 bg-emerald-500/10 p-5">
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="party-paper"
                style={
                  {
                    left: `${(index * 97) % 100}%`,
                    animationDelay: `${(index % 7) * 0.14}s`
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Successfully Prepared</p>
          <h4 className="mt-2 text-xl text-emerald-200 sm:text-2xl">Your WhatsApp draft is ready.</h4>
          <p className="mt-2 text-sm text-emerald-100/95">
            We opened WhatsApp with all your enquiry details. Press send in WhatsApp to complete your booking request.
          </p>
          <p className="mt-2 text-xs text-emerald-200/90">Submitted at: {successMeta.submittedAt}</p>
          {!successMeta.storedInBrowser && (
            <p className="mt-2 text-xs text-amber-200">
              Note: Browser backup save is currently unavailable, but your WhatsApp message flow is working.
            </p>
          )}
          <a
            href={successMeta.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded border border-emerald-300/60 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-emerald-200 transition hover:bg-emerald-400/10"
          >
            OPEN WHATSAPP AGAIN
          </a>
        </article>
      )}
    </form>
  );
}
