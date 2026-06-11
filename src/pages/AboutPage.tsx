import { useEffect, useState } from "react";
import {
  brochureTagline,
  founderFocusAreas,
  founderProfile,
  missionStatement,
  organizationSummary,
  visionStatement
} from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";

const aboutImages = [
  { src: siteImages.anjenLinkedinDp, alt: "Anjen Fernando Portrait" },
  { src: siteImages.anjenVanakkamAward, alt: "Receiving Vanakkam HRD Award" },
  { src: siteImages.anjenIipeCertificate, alt: "IIPE Experiential Learning Certification" },
  { src: siteImages.anjenPrideAward, alt: "Pride of Coimbatore Leadership Award" }
] as const;

export function AboutPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % aboutImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-12">
      <header className="section-fade rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">{brochureTagline}</h1>
        <p className="mt-5 max-w-3xl text-zinc-300">{organizationSummary}</p>
      </header>

      <article className="glass-card rounded-xl p-8">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">FOUNDER</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-4">
            {/* Gaming Display HUD Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-brandGold/35 bg-black/80 shadow-[0_0_30px_rgba(201,168,76,0.18)]">
              {/* Sci-fi HUD corners */}
              <div className="absolute top-2 left-2 z-10 h-3 w-3 border-t-2 border-l-2 border-brandGold" />
              <div className="absolute top-2 right-2 z-10 h-3 w-3 border-t-2 border-r-2 border-brandGold" />
              <div className="absolute bottom-2 left-2 z-10 h-3 w-3 border-b-2 border-l-2 border-brandGold" />
              <div className="absolute bottom-2 right-2 z-10 h-3 w-3 border-b-2 border-r-2 border-brandGold" />
              
              {/* Player level tag */}
              <div className="absolute top-3 left-4 z-10 flex items-center gap-1.5 rounded-md bg-black/80 px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] text-brandGold border border-brandGold/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>COACH LEVEL 15</span>
              </div>
              
              {/* Scanlines layer for gaming screen look */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(201,168,76,0.04),rgba(0,255,0,0.02),rgba(201,168,76,0.04))] bg-[size:100%_4px,6px_100%] opacity-35" />

              {/* Slider Track */}
              <div className="relative h-full w-full">
                {aboutImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      idx === activeIdx 
                        ? "opacity-100 scale-100 z-0" 
                        : "opacity-0 scale-95 pointer-events-none z-0"
                    }`}
                  >
                    {/* Cinematic Blurred Background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-105"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />
                    {/* Main image */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover relative z-10"
                    />
                  </div>
                ))}
              </div>

              {/* Status Bar / Caption */}
              <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 text-center">
                <p className="text-[10px] font-bold tracking-[0.15em] text-zinc-300 uppercase">
                  {aboutImages[activeIdx].alt}
                </p>
              </div>
            </div>

            {/* Thumbnail selectors */}
            <div className="grid grid-cols-4 gap-2">
              {aboutImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative aspect-[4/3] rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    idx === activeIdx 
                      ? "border-brandGold scale-[1.03] shadow-[0_0_15px_rgba(201,168,76,0.45)]" 
                      : "border-brandGold/20 hover:border-brandGold/60 hover:scale-[1.01]"
                  }`}
                  aria-label={`Show photo ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {/* Select overlay */}
                  {idx !== activeIdx && (
                    <div className="absolute inset-0 bg-black/55 transition hover:bg-black/35" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl">{founderProfile.name}</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.12em] text-brandGold">{founderProfile.role}</p>
            <p className="mt-5 text-zinc-300 leading-relaxed">{founderProfile.summary}</p>
            <p className="mt-4 text-zinc-300">{founderProfile.certification}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {founderFocusAreas.map((area) => (
                <span key={area} className="rounded-full border border-brandGold/30 px-3 py-1.5 text-xs tracking-wide text-zinc-300">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card rounded-xl p-7">
          <h2 className="text-2xl text-brandGold">Vision</h2>
          <p className="mt-3 text-zinc-300">{visionStatement}</p>
        </article>
        <article className="glass-card rounded-xl p-7">
          <h2 className="text-2xl text-brandGold">Mission</h2>
          <p className="mt-3 text-zinc-300">{missionStatement}</p>
        </article>
      </div>


    </section>
  );
}
