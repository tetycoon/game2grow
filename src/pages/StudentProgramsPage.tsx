import { programTopics } from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";
import { TopicMarquee } from "../components/TopicMarquee";

const studentTracks = [
  {
    title: "Placement Readiness Simulations",
    summary:
      "For Arts, Engineering, MBA, and final-year cohorts preparing to transition from campus to workplace.",
    points: [
      "Communication, presentation, and interview confidence",
      "Logical thinking, problem solving, and decision making",
      "Ownership, teamwork, and professional discipline"
    ]
  },
  {
    title: "Career Execution Accelerators",
    summary:
      "Experiential practice environments where students face realistic professional situations and respond in real time.",
    points: [
      "Stress management and time management under pressure",
      "Emotional intelligence and interpersonal relationship skills",
      "Goal setting and long-term career direction"
    ]
  }
] as const;

export function StudentProgramsPage() {
  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">Stop Preparing. Start Performing.</h1>
        <p className="mt-3 text-zinc-300">
          Gamified simulations built to improve employability, confidence, and industry readiness before students face
          real hiring and workplace challenges.
        </p>
      </header>

      <article className="glass-card overflow-hidden rounded-xl">
        <img
          src={siteImages.anjenAuditoriumSession}
          alt="Anjen Fernando conducting a high-energy student audience program"
          className="h-[250px] w-full object-cover sm:h-[340px] md:h-[440px]"
        />
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        {studentTracks.map((track) => (
          <article key={track.title} className="glass-card rounded-xl p-7">
            <h2 className="text-3xl text-brandGold">{track.title}</h2>
            <p className="mt-3 text-zinc-300">{track.summary}</p>
            <ul className="mt-5 space-y-2 text-zinc-300">
              {track.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Topics Covered Across Student Cohorts</h2>
        <div className="mt-5">
          <TopicMarquee items={programTopics} />
        </div>
      </article>
    </section>
  );
}
