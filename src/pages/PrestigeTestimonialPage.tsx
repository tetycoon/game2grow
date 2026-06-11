import { useState, useEffect, useCallback } from "react";
import sessionImg1 from "../assets/client-session/FB_IMG_1779865686168.jpg.jpeg";
import sessionImg2 from "../assets/client-session/IMG_20260605_155731.jpg.jpeg";
import sessionImg3 from "../assets/client-session/IMG_20260605_155725.jpg.jpeg";
import sessionImg4 from "../assets/client-session/IMG-20260606-WA0043.jpg.jpeg";
import sessionImg5 from "../assets/client-session/IMG-20260606-WA0033.jpg.jpeg";

const clients = [
  { name: "PSG College of Arts and Science", type: "Academic Institution" },
  { name: "KPR College of Arts and Science", type: "Academic Institution" },
  { name: "RVS College of Arts and Science", type: "Academic Institution" },
  { name: "Yardstick Digital Solutions", type: "Corporate Partner" }
] as const;

const sessionImages = [sessionImg1, sessionImg2, sessionImg3, sessionImg4, sessionImg5];

export function PrestigeTestimonialPage() {
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
      <header className="section-fade rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">
          PRESTIGE TESTIMONIAL
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">Our Esteemed Clients</h1>
        <p className="mt-3 text-zinc-300">
          We are proud to have partnered with leading academic institutions and corporate organizations
          to deliver impactful gamified learning experiences.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {clients.map((client) => (
          <article
            key={client.name}
            className="section-fade glass-card rounded-xl border border-brandGold/20 p-6 sm:p-8"
          >
            <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
              {client.type}
            </p>
            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">{client.name}</h2>
          </article>
        ))}
      </div>

      <section className="section-fade space-y-6">
        <header>
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">
            SESSION GALLERY
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl">Moments from Our Sessions</h2>
        </header>

        <div className="relative overflow-hidden rounded-xl border border-brandGold/20 bg-black/60">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {sessionImages.map((img, i) => (
              <div key={i} className="w-full shrink-0">
                <img
                  src={img}
                  alt={`Session ${i + 1}`}
                  className="mx-auto h-[300px] w-full object-contain sm:h-[400px] md:h-[500px]"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-brandGold hover:text-black"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-brandGold hover:text-black"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {sessionImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === current ? "bg-brandGold" : "bg-white/40 hover:bg-white/70"
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
