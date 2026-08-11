"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experienceTimeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";

export function LeadershipTimelineSection() {
  const [selected, setSelected] = useState(0);
  const item = experienceTimeline[selected];

  return (
    <section id="experience" className="relative overflow-hidden border-y border-white/8 bg-[#0d0814] py-24 md:py-32">
      <div className="gold-noise pointer-events-none absolute right-0 top-0 h-64 w-1/3 opacity-[0.07]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Professional experience"
          title="Different systems. One engineering method."
          description="Select a role to see the problem, contribution, impact, and growth behind the title."
        />

        <div className="grid gap-8 lg:grid-cols-[0.42fr,0.58fr] lg:gap-14">
          <div
            className="flex gap-2 overflow-x-auto pb-3 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Professional experiences"
          >
            {experienceTimeline.map((experience, index) => (
              <button
                key={`${experience.company}-${experience.role}`}
                role="tab"
                id={`experience-tab-${index}`}
                aria-selected={selected === index}
                aria-controls="experience-detail"
                tabIndex={selected === index ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => { const next = event.key === "Home" ? 0 : event.key === "End" ? experienceTimeline.length - 1 : event.key === "ArrowRight" ? (index + 1) % experienceTimeline.length : event.key === "ArrowLeft" ? (index + experienceTimeline.length - 1) % experienceTimeline.length : index; if (next !== index) { event.preventDefault(); setSelected(next); (event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next])?.focus(); } }}
                className={`group min-w-[16rem] rounded-2xl border px-5 py-4 text-left transition-all lg:min-w-0 lg:w-full ${
                  selected === index
                    ? "border-cyan/55 bg-cyan text-purple-deep"
                    : "border-transparent bg-white/[0.025] text-white hover:border-white/12 hover:bg-white/[0.055]"
                }`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span>
                    <span className={`block font-instrument text-[9px] tracking-[0.15em] ${selected === index ? "text-purple-deep/65" : "text-cyan"}`}>
                      {experience.period}
                    </span>
                    <span className="mt-2 block text-sm font-bold leading-tight">{experience.company}</span>
                    <span className={`mt-1 block text-xs ${selected === index ? "text-purple-deep/70" : "text-white/45"}`}>
                      {experience.role}
                    </span>
                  </span>
                  <ArrowUpRight className={`h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${selected === index ? "opacity-100" : "opacity-30"}`} />
                </span>
              </button>
            ))}
          </div>

          <div id="experience-detail" role="tabpanel" aria-labelledby={`experience-tab-${selected}`} aria-live="polite" className="glass-panel min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10">
            <AnimatePresence mode="wait">
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-9"
              >
                <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-7">
                  <div>
                    <p className="font-instrument text-[10px] tracking-[0.18em] text-cyan">{item.period} · {item.location}</p>
                    <h3 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{item.role}</h3>
                    <p className="mt-2 text-white/55">{item.company}</p>
                  </div>
                  {item.logo ? (
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-white p-2">
                      <Image src={item.logo} alt={`${item.company} logo`} fill className="object-contain p-2" />
                    </div>
                  ) : null}
                </div>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <DetailBlock label="THE SYSTEM" text={item.responsibilities} />
                  <DetailBlock label="WHAT I DELIVERED" text={item.achievements} accent />
                  <DetailBlock label="WHY IT MATTERED" text={item.impact} />
                  <DetailBlock label="WHAT CHANGED IN ME" text={item.growth} />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailBlock({ label, text, accent = false }: { label: string; text: string; accent?: boolean }) {
  return (
    <div className={`border-l-2 pl-4 ${accent ? "border-cyan" : "border-white/12"}`}>
      <p className={`font-instrument text-[9px] tracking-[0.18em] ${accent ? "text-cyan" : "text-white/35"}`}>{label}</p>
      <p className="mt-3 text-pretty text-sm leading-6 text-white/72">{text}</p>
    </div>
  );
}
