import { useEffect, useState, useCallback } from "react";
import { brochureTestimonials, founderProfile } from "../lib/brochureContent";

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    let frameId: number;

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    }

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <>{count}{suffix}</>;
}

const highlights = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Programs Delivered", value: 50, suffix: "+" },
  { label: "Awards Won", value: 2, suffix: "" }
];

export function TestimonialPage() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? brochureTestimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === brochureTestimonials.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="space-y-8">
      <header className="section-fade rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">Proof of Impact</h1>
        <p className="mt-3 text-zinc-300">
          We have delivered high-engagement learning experiences across corporate and academic ecosystems.
        </p>
      </header>

      <div className="section-fade grid gap-6 sm:grid-cols-3">
        {highlights.map((h) => (
          <article key={h.label} className="glass-card flex flex-col items-center rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-brandGold sm:text-4xl">
              <AnimatedNumber value={h.value} suffix={h.suffix} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-zinc-400">{h.label}</p>
          </article>
        ))}
      </div>

      <article className="section-fade glass-card rounded-xl p-8">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">TESTIMONIALS</p>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">What People Say</h2>
        <p className="mt-3 text-zinc-400">Real feedback from participants and partners we have worked with.</p>

        <div className="relative mt-8 overflow-hidden rounded-xl border border-brandGold/20 bg-black/40">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {brochureTestimonials.map((t) => (
              <blockquote key={t.author} className="w-full shrink-0 p-8 sm:p-12">
                <span className="text-4xl leading-none text-brandGold/30">&ldquo;</span>
                <p className="mt-2 text-lg leading-relaxed italic text-zinc-200 sm:text-xl">{t.quote}</p>
                <footer className="mt-6 border-t border-brandGold/15 pt-4">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">{t.designation}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-brandGold hover:text-black"
            aria-label="Previous testimonial"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-brandGold hover:text-black"
            aria-label="Next testimonial"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {brochureTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === current ? "bg-brandGold" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
