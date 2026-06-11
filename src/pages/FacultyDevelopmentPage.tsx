import { useState, useEffect, useCallback } from "react";
import { brochureTestimonials, facultySummary, programTopics } from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";
import { TopicMarquee } from "../components/TopicMarquee";

import sessionImg1 from "../assets/client-session/IMG_20260605_155731.jpg.jpeg";
import sessionImg2 from "../assets/client-session/IMG_20260605_155725.jpg.jpeg";
import sessionImg3 from "../assets/client-session/IMG-20260606-WA0043.jpg.jpeg";

const sessionImages = [sessionImg1, sessionImg2, sessionImg3];

const facultyOutcomes = [
  "Improve mentoring quality through experiential facilitation techniques",
  "Embed placement readiness practices into day-to-day classroom interactions",
  "Strengthen communication and feedback loops between faculty and students",
  "Build ownership mindset around institutional outcomes from admission to placement"
] as const;

export function FacultyDevelopmentPage() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? sessionImages.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === sessionImages.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

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

      {/* Session Gallery Section */}
      <section className="section-fade space-y-6">
        <div>
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">
            SESSION GALLERY
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-serif">Moments from Our Sessions</h2>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-brandGold/20 bg-[#141414] shadow-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {sessionImages.map((img, i) => (
              <div key={i} className="relative w-full shrink-0 h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                {/* Cinematic Blurred Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-15 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${img})` }}
                />
                
                {/* Foreground Image */}
                <img
                  src={img}
                  alt={`Session Moment ${i + 1}`}
                  className="relative z-10 max-h-full max-w-full object-contain p-2 transition-transform duration-700 hover:scale-[1.015]"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur border border-white/10 transition-all duration-300 hover:bg-brandGold hover:text-black hover:border-brandGold hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-2xl font-bold">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur border border-white/10 transition-all duration-300 hover:bg-brandGold hover:text-black hover:border-brandGold hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-2xl font-bold">chevron_right</span>
          </button>

          <div className="absolute bottom-4 left-1/2 flex z-10 -translate-x-1/2 gap-2">
            {sessionImages.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-brandGold w-6" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
