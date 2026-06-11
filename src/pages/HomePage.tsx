import {
  audienceSegments,
  brochureHeroLine,
  brochureTestimonials,
  contactCallToAction,
  founderProfile,
  methodologyPillars,
  organizationSummary,
  podcastEpisodes,
  programTopics
} from "../lib/brochureContent";
import { Link } from "react-router-dom";
import { TopicMarquee } from "../components/TopicMarquee";
import { siteImages } from "../lib/siteImages";

const serviceCards = [
  {
    icon: "groups",
    title: "Corporate Power Sessions",
    text: "Immersive simulations tailored to real team performance challenges."
  },
  {
    icon: "school",
    title: "Student Transformation",
    text: "Placement-readiness programs that build confidence and execution."
  },
  {
    icon: "hub",
    title: "Faculty Development",
    text: "Process-driven workshops from admission strategy to placement outcomes."
  },
  {
    icon: "psychology",
    title: "Leadership Mindset",
    text: "Gamified leadership diagnostics and experiential behavior rewiring."
  },
  {
    icon: "query_stats",
    title: "Outcome Metrics",
    text: "Visible behavior shifts, engagement scores, and implementation momentum."
  },
  {
    icon: "military_tech",
    title: "Bespoke Mentoring",
    text: "1:1 guidance for career and professional growth decisions."
  }
];

const valueCards = [
  {
    icon: "verified_user",
    title: "Absolute Engagement",
    text: "Hands-on sessions that keep every participant active from start to finish."
  },
  {
    icon: "workspace_premium",
    title: "Proven Outcomes",
    text: "Programs rated highly by students, faculty, and corporate teams."
  },
  {
    icon: "architecture",
    title: "Bespoke Design",
    text: "Every session is tailored to context, not copied from generic templates."
  }
] as const;

const getYouTubeThumbnail = (url: string) => {
  const videoId = url.match(/youtu\.be\/([^?]+)/)?.[1];
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

export function HomePage() {
  return (
    <div className="cinematic-grain space-y-16 sm:space-y-20 lg:space-y-24">
      <section className="section-fade relative min-h-[72svh] overflow-hidden rounded-2xl border border-brandGold/25 sm:min-h-[78svh] md:min-h-[82svh]">
        <img
          src={siteImages.anjenAuditoriumSession}
          alt="Anjen Fernando leading a large student audience session"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.20),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(201,168,76,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/75 to-black" />
        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-4xl flex-col items-center justify-center px-4 text-center sm:min-h-[78svh] sm:px-6 md:min-h-[82svh]">
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">{brochureHeroLine}</h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">{organizationSummary}</p>
          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Link to="/contact" className="gold-glow rounded bg-brandGold px-7 py-3 text-center font-semibold text-black">Book a Free Demo</Link>
            <Link to="/about" className="rounded border border-brandGold px-7 py-3 text-center text-brandGold">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="section-fade grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-brandGold/70 sm:text-xs sm:tracking-[0.32em]">
            OUR PHILOSOPHY
          </p>
          <div className="glass-card rounded-xl border border-brandGold/25 bg-black/35 p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-brandGold sm:text-2xl">Why Game to Grow?</h3>
            <p className="mt-3 text-zinc-200">
              Because real growth happens when people actively participate, make choices, and experience the result of
              those choices in a guided environment.
            </p>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl">No Slides. No Lectures.</h2>
          <p className="max-w-2xl text-zinc-300">
            Every Game2Grow session is designed as an immersive simulation where participants make decisions, face
            consequences, reflect, and improve.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="glass-card rounded-lg p-5">
              <p className="text-3xl text-brandGold">{founderProfile.yearsExperience}</p>
              <p className="mt-1 text-sm tracking-widest text-zinc-300">YEARS TRAINING EXPERIENCE</p>
            </article>
            <article className="glass-card rounded-lg p-5">
              <p className="text-3xl text-brandGold">PAN INDIA</p>
              <p className="mt-1 text-sm tracking-widest text-zinc-300">PROGRAM DELIVERY REACH</p>
            </article>
          </div>
        </div>
        <div className="glass-card relative h-[320px] overflow-hidden rounded-xl sm:h-[420px] lg:h-[520px]">
          <img
            src={siteImages.workshopCardActivity}
            alt="Game-based collaboration activity during a Game2Grow workshop"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.22em] text-brandGold">Game-Based Learning</p>
        </div>
      </section>

      <section className="section-fade space-y-10">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.35em]">WHO WE SERVE</p>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl">Built for Real-World Performance</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audienceSegments.map((segment) => (
            <article key={segment.title} className="glass-card rounded-xl p-7">
              <h3 className="text-2xl text-brandGold">{segment.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-zinc-300">{segment.hook}</p>
              <p className="mt-4 text-zinc-300">{segment.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-fade space-y-10">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.35em]">CURATED SOLUTIONS</p>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl">Elite Learning Domains</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => (
            <article key={card.title} className="glass-card rounded-xl p-8 transition hover:-translate-y-1 hover:border-brandGold/70">
              <span className="material-symbols-outlined text-4xl text-brandGold">{card.icon}</span>
              <h3 className="mt-6 text-2xl">{card.title}</h3>
              <p className="mt-3 text-zinc-300">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-fade space-y-10">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.35em]">METHODOLOGY</p>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl">Experiential Learning Through Play</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [siteImages.workshopYellowSimulation, "Simulation-based decision labs"],
            [siteImages.workshopCardActivity, "Collaborative problem-solving tasks"],
            [siteImages.workshopTeamEnergizer, "High-energy group transformation"]
          ].map(([src, alt]) => (
            <div key={alt} className="glass-card overflow-hidden rounded-xl">
              <img src={src} alt={alt} className="h-44 w-full object-cover sm:h-52" />
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {methodologyPillars.map((pillar) => (
            <article key={pillar.title} className="glass-card rounded-xl p-8">
              <h3 className="text-2xl text-brandGold">{pillar.title}</h3>
              <p className="mt-3 text-zinc-300">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-fade space-y-8">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.32em]">PROGRAM TOPICS</p>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl">Competencies We Build</h2>
        </div>
        <TopicMarquee items={programTopics} />
      </section>

      <section className="section-fade space-y-6">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.32em]">WHY GAME2GROW</p>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl">Outcome Signals</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {valueCards.map((item) => (
              <article key={item.title} className="glass-card rounded-xl p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-brandGold">{item.icon}</span>
                <h3 className="mt-5 text-2xl">{item.title}</h3>
                <p className="mt-3 text-zinc-300">{item.text}</p>
              </article>
            ))}
        </div>
      </section>

      <section className="section-fade">
        <div className="glass-card rounded-2xl p-10 md:p-16">
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.32em]">VOICES OF IMPACT</p>
          <blockquote className="mt-6 text-lg italic leading-relaxed sm:text-xl md:text-2xl">
            "{brochureTestimonials[0].quote}"
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-zinc-300">
            {brochureTestimonials[0].author} - {brochureTestimonials[0].designation}
          </p>
        </div>
      </section>

      <section className="section-fade space-y-8">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.32em]">THE KNOWLEDGE BASE</p>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl">Watch Anjen in Action</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {podcastEpisodes.map((item) => (
            <article key={item.label} className="glass-card overflow-hidden rounded-xl">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={getYouTubeThumbnail(item.url)}
                    alt={`Yardstick Academy Podcast ${item.label} thumbnail`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="material-symbols-outlined rounded-full bg-brandGold p-3 text-3xl text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      play_arrow
                    </span>
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs tracking-[0.2em] text-brandGold">YARDSTICK ACADEMY PODCAST</p>
                  <h3 className="mt-3 text-2xl">{item.label}</h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-fade rounded-2xl border border-brandGold/30 bg-black/70 p-6 sm:p-8 md:p-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.32em]">INITIATION</p>
            <h2 className="mt-4 text-xl sm:text-2xl md:text-4xl">Command Your Growth Journey</h2>
            <p className="mt-4 text-zinc-300">{contactCallToAction}</p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <Link to="/contact" className="block w-full rounded bg-brandGold px-6 py-3 text-center font-semibold text-black">Reserve Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
