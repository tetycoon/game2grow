import { useState, useEffect, useCallback } from "react";
import { programTopics } from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";
import { TopicMarquee } from "../components/TopicMarquee";

import sessionImg1 from "../lib/student_program/IMG_20260603_101930.jpg.jpeg";
import sessionImg2 from "../lib/student_program/IMG_20260603_155339.jpg.jpeg";
import sessionImg3 from "../lib/student_program/IMG_20260604_114930.jpg.jpeg";
import sessionImg4 from "../lib/student_program/IMG_20260604_150511.jpg.jpeg";
import sessionImg5 from "../lib/student_program/IMG_20260605_151940.jpg.jpeg";
import sessionImg6 from "../lib/student_program/IMG_20260608_101338.jpg.jpeg";
import sessionImg7 from "../lib/student_program/IMG_20260608_102828.jpg.jpeg";
import sessionImg8 from "../lib/student_program/IMG_20260608_121506.jpg.jpeg";
import sessionImg9 from "../lib/student_program/IMG_20260608_144241.jpg.jpeg";
import sessionImg10 from "../lib/student_program/IMG_20260608_154319.jpg.jpeg";
import sessionImg11 from "../lib/student_program/IMG_20260609_103755.jpg.jpeg";
import sessionImg12 from "../lib/student_program/IMG_20260609_115839.jpg.jpeg";

const sessionImages = [
  sessionImg1,
  sessionImg2,
  sessionImg3,
  sessionImg4,
  sessionImg5,
  sessionImg6,
  sessionImg7,
  sessionImg8,
  sessionImg9,
  sessionImg10,
  sessionImg11,
  sessionImg12
];

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

      {/* Session Gallery Section */}
      <section className="section-fade space-y-6">
        <div>
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">
            SESSION GALLERY
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-serif">Moments from Our Session</h2>
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

          <div className="absolute bottom-4 left-1/2 flex z-10 -translate-x-1/2 gap-2 max-w-[90%] overflow-x-auto py-1">
            {sessionImages.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
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
