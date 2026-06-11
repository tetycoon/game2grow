import { brochureTestimonials, facultySummary, programTopics } from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";
import { TopicMarquee } from "../components/TopicMarquee";

const facultyOutcomes = [
  "Improve mentoring quality through experiential facilitation techniques",
  "Embed placement readiness practices into day-to-day classroom interactions",
  "Strengthen communication and feedback loops between faculty and students",
  "Build ownership mindset around institutional outcomes from admission to placement"
] as const;

export function FacultyDevelopmentPage() {
  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">Equip Faculty to Mentor, Not Just Teach</h1>
        <p className="mt-3 text-zinc-300">
          Faculty-focused experiential sessions that build mentoring capability, classroom engagement, and student
          readiness outcomes.
        </p>
      </header>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Faculty Workshop Framework</h2>
        <p className="mt-3 text-zinc-300">{facultySummary}</p>
        <img src={siteImages.workshopStringExercise} alt="Faculty participants in a structured experiential string exercise" className="mt-5 h-56 w-full rounded-lg object-cover sm:h-72" />
        <ul className="mt-5 space-y-3 text-zinc-300">
          {facultyOutcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </article>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Capability Areas for Faculty Programs</h2>
        <div className="mt-5">
          <TopicMarquee items={programTopics} />
        </div>
      </article>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">What Institutions Said</h2>
        <blockquote className="mt-4 border-l-2 border-brandGold/80 pl-4 italic text-zinc-200">
          "{brochureTestimonials[1].quote}" - {brochureTestimonials[1].author}, {brochureTestimonials[1].designation}
        </blockquote>
        <blockquote className="mt-5 border-l-2 border-brandGold/80 pl-4 italic text-zinc-200">
          "{brochureTestimonials[2].quote}" - {brochureTestimonials[2].author}, {brochureTestimonials[2].designation}
        </blockquote>
      </article>
    </section>
  );
}
