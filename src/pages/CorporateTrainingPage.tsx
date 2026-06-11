import { useMemo, useState } from "react";
import {
  corporatePrograms,
  deliveryFormats,
  type ProgramCategory,
  type ProgramFormat
} from "../lib/corporatePrograms";
import { methodologyPillars, programTopics } from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";
import { TopicMarquee } from "../components/TopicMarquee";

const categories: Array<"All" | ProgramCategory> = [
  "All",
  "People & Team Dynamics",
  "Communication",
  "Thinking & Performance",
  "Leadership & Ownership",
  "New Joinee & Onboarding",
  "Sales & Customer Facing"
];

const formatOptions: Array<"All" | ProgramFormat> = [
  "All",
  "Power Session (3 Hours)",
  "Half Day Intensive (5 Hours)",
  "Full Day Workshop (8 Hours)",
  "Multi-Session Program (Weekly/Monthly)"
];

export function CorporateTrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");
  const [selectedFormat, setSelectedFormat] = useState<(typeof formatOptions)[number]>("All");
  const [search, setSearch] = useState("");

  const filteredPrograms = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    return corporatePrograms.filter((program) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        program.name.toLowerCase().includes(normalizedSearch) ||
        program.outcome.toLowerCase().includes(normalizedSearch);
      const matchesCategory = selectedCategory === "All" || program.category === selectedCategory;
      const matchesFormat =
        selectedFormat === "All" || program.recommendedFormats.includes(selectedFormat as ProgramFormat);

      return matchesSearch && matchesCategory && matchesFormat;
    });
  }, [search, selectedCategory, selectedFormat]);
  const totalPrograms = corporatePrograms.length;

  return (
    <section className="space-y-10">
      <header className="rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">Your Team Has the Skills. Does It Have the Edge?</h1>
        <p className="mt-4 text-zinc-300">
          Game2Grow designs customized gamified sessions for corporate teams through immersive simulations.
          Participants do not just absorb ideas. They apply them in high-pressure practice environments.
        </p>
      </header>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Simulation Methodology for Corporate Teams</h2>
        <p className="mt-3 text-zinc-300">
          Sessions are built with experiential learning techniques that help teams make decisions, see consequences,
          and immediately improve execution behavior.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <img src={siteImages.workshopYellowSimulation} alt="Corporate participants in a large simulation exercise" className="h-44 w-full rounded-lg object-cover sm:h-52" />
          <img src={siteImages.workshopCardActivity} alt="Corporate team card-based collaboration activity" className="h-44 w-full rounded-lg object-cover sm:h-52" />
          <img src={siteImages.workshopTeamEnergizer} alt="Team energizer activity during corporate workshop" className="h-44 w-full rounded-lg object-cover sm:h-52 sm:col-span-2 lg:col-span-1" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {methodologyPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-lg border border-brandGold/20 bg-black/30 p-5">
              <h3 className="text-xl text-brandGold">{pillar.title}</h3>
              <p className="mt-2 text-zinc-300">{pillar.description}</p>
            </article>
          ))}
        </div>
      </article>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {deliveryFormats.map((format) => (
          <article key={format.name} className="glass-card rounded-xl p-5">
            <p className="text-sm tracking-[0.16em] text-brandGold">FORMAT</p>
            <h2 className="mt-2 text-xl">{format.name}</h2>
            <p className="mt-2 text-zinc-300">Duration: {format.duration}</p>
            <p className="mt-2 text-sm text-zinc-400">{format.focus}</p>
          </article>
        ))}
      </div>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Common Competency Themes</h2>
        <p className="mt-3 text-zinc-300">
          Corporate interventions are adapted from these core capability areas based on role, seniority, and business goals.
        </p>
        <div className="mt-6">
          <TopicMarquee items={programTopics} />
        </div>
      </article>

      <article className="glass-card rounded-xl p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl text-brandGold">The Program Library</h2>
            <p className="mt-2 text-zinc-300">All 24 corporate programs with filterable discovery.</p>
          </div>
          <p className="text-sm tracking-[0.16em] text-zinc-300">
            Showing {filteredPrograms.length} of {totalPrograms} programs
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <input
            placeholder="Search program by name or outcome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded border border-brandGold/30 bg-black/40 px-3 py-2 text-zinc-100 outline-none ring-brandGold/40 placeholder:text-zinc-500 focus:ring"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as (typeof categories)[number])}
            className="rounded border border-brandGold/30 bg-black/40 px-3 py-2 text-zinc-100 outline-none ring-brandGold/40 focus:ring"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-zinc-900">
                {category}
              </option>
            ))}
          </select>
          <select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value as (typeof formatOptions)[number])}
            className="rounded border border-brandGold/30 bg-black/40 px-3 py-2 text-zinc-100 outline-none ring-brandGold/40 focus:ring"
          >
            {formatOptions.map((format) => (
              <option key={format} value={format} className="bg-zinc-900">
                {format}
              </option>
            ))}
          </select>
        </div>

        {filteredPrograms.length === 0 ? (
          <p className="mt-6 text-zinc-300">No programs found for this filter.</p>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredPrograms.map((program) => (
              <article key={program.name} className="rounded-lg border border-brandGold/20 bg-black/30 p-5">
                <p className="text-xs tracking-[0.16em] text-brandGold">{program.category}</p>
                <h3 className="mt-2 text-xl">{program.name}</h3>
                <p className="mt-2 text-zinc-300">{program.outcome}</p>
                <p className="mt-3 text-sm text-zinc-400">
                  Recommended formats: {program.recommendedFormats.join(" | ")}
                </p>
              </article>
            ))}
          </div>
        )}
      </article>
    </section>
  );
}
