import { useEffect, useState, useCallback } from "react";
import { brochureTestimonials, founderProfile } from "../lib/brochureContent";
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
  const [galleryCurrent, setGalleryCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? brochureTestimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === brochureTestimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prevGallery = useCallback(() => {
    setGalleryCurrent((c) => (c === 0 ? sessionImages.length - 1 : c - 1));
  }, []);

  const nextGallery = useCallback(() => {
    setGalleryCurrent((c) => (c === sessionImages.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const id = setInterval(nextGallery, 4000);
    return () => clearInterval(id);
  }, [nextGallery]);

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

      {/* Our Esteemed Clients Section */}
      <section className="section-fade space-y-6">
        <div>
          <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">
            OUR PARTNERS
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-serif">Our Esteemed Clients</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {clients.map((client) => (
            <article
              key={client.name}
              className="glass-card rounded-xl border border-brandGold/20 p-6 sm:p-8"
            >
              <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
                {client.type}
              </p>
              <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">{client.name}</h2>
            </article>
          ))}
        </div>
      </section>

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
            style={{ transform: `translateX(-${galleryCurrent * 100}%)` }}
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
                  alt={`Session ${i + 1}`}
                  className="relative z-10 max-h-full max-w-full object-contain p-2 transition-transform duration-700 hover:scale-[1.015]"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prevGallery}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur border border-white/10 transition-all duration-300 hover:bg-brandGold hover:text-black hover:border-brandGold hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-2xl font-bold">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={nextGallery}
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
                onClick={() => setGalleryCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === galleryCurrent ? "bg-brandGold w-6" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

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
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur border border-white/10 transition-all duration-300 hover:bg-brandGold hover:text-black hover:border-brandGold hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Previous testimonial"
          >
            <span className="material-symbols-outlined text-2xl font-bold">chevron_left</span>
          </button>
          <button
            onClick={next}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur border border-white/10 transition-all duration-300 hover:bg-brandGold hover:text-black hover:border-brandGold hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Next testimonial"
          >
            <span className="material-symbols-outlined text-2xl font-bold">chevron_right</span>
          </button>

          <div className="absolute bottom-4 left-1/2 flex z-10 -translate-x-1/2 gap-2">
            {brochureTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-brandGold w-6" : "bg-white/40 hover:bg-white/70"
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
