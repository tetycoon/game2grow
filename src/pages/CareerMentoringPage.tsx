import { founderProfile, founderFocusAreas } from "../lib/brochureContent";

const mentoringPillars = [
  {
    title: "Career Clarity",
    detail:
      "Guidance to choose roles, domains, and growth paths based on strengths, market demand, and long-term goals."
  },
  {
    title: "Personalized Development Plans",
    detail:
      "Actionable development roadmaps to improve employability and professional effectiveness."
  },
  {
    title: "Execution Coaching",
    detail:
      "Regular mentoring checkpoints that convert plans into consistent behavior change and career momentum."
  }
] as const;

export function CareerMentoringPage() {
  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">Your Career. Your Blueprint. Our Game.</h1>
        <p className="mt-3 text-zinc-300">
          One-on-one mentoring for students and working professionals who want stronger decisions, clearer direction,
          and faster career execution.
        </p>
      </header>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Mentoring Approach</h2>
        <p className="mt-3 text-zinc-300">
          Mentoring is led by {founderProfile.name}, a {founderProfile.role.toLowerCase()} with {founderProfile.yearsExperience}
          years of training and talent development experience.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mentoringPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-lg border border-brandGold/20 bg-black/30 p-5">
              <h3 className="text-2xl text-brandGold">{pillar.title}</h3>
              <p className="mt-3 text-zinc-300">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Focus Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {founderFocusAreas.map((area) => (
            <span key={area} className="rounded-full border border-brandGold/35 px-4 py-2 text-sm text-zinc-200">
              {area}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
