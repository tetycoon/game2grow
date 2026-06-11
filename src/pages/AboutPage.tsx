import {
  brochureTagline,
  founderFocusAreas,
  founderProfile,
  missionStatement,
  organizationSummary,
  visionStatement
} from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";

export function AboutPage() {
  return (
    <section className="space-y-12">
      <header className="section-fade rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">{brochureTagline}</h1>
        <p className="mt-5 max-w-3xl text-zinc-300">{organizationSummary}</p>
      </header>

      <article className="glass-card rounded-xl p-8">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">FOUNDER</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <img src={siteImages.anjenLinkedinDp} alt="Anjen Fernando" className="h-72 w-full rounded-lg object-cover sm:h-80" />
            <div className="grid grid-cols-2 gap-4">
              <img src={siteImages.anjenVanakkamAward} alt="Anjen Fernando receiving award at Vanakkam HRD annual conference" className="h-36 w-full rounded-lg object-cover" />
              <img src={siteImages.anjenIipeCertificate} alt="Anjen Fernando with IIPE experiential learning certificate" className="h-36 w-full rounded-lg object-cover" />
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
