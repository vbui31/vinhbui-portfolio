"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";

const views = ["Challenge", "Approach", "Outcome", "Artifact"] as const;
type View = (typeof views)[number];

export function ProjectsSection() {
  const [activeView, setActiveView] = useState<View>("Challenge");
  const project = projects[0];

  const content: Record<Exclude<View, "Artifact">, { label: string; text: string }> = {
    Challenge: { label: "PROBLEM DEFINITION", text: project.problem },
    Approach: { label: "ENGINEERING METHOD", text: project.approach },
    Outcome: { label: "DECISION + LEARNING", text: `${project.results} ${project.learnings}` }
  };

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-purple/20 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Selected work"
          title="A project should reveal how an engineer thinks."
          description="Move through the case study from problem framing to recommendation, then open the underlying design artifact."
        />

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0814]">
          <div className="grid lg:grid-cols-[0.38fr,0.62fr]">
            <div className="border-b border-white/10 bg-purple-deep p-7 lg:border-b-0 lg:border-r lg:p-10">
              <p className="font-instrument text-[10px] tracking-[0.18em] text-cyan">CHE 3171 · PROCESS DESIGN</p>
              <h3 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 text-pretty leading-7 text-white/62">{project.overview}</p>

              <div className="mt-9 border-t border-white/10 pt-6">
                <p className="font-instrument text-[9px] tracking-[0.16em] text-white/35">TOOLS IN THE LOOP</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-cyan/25 px-3 py-1.5 text-xs text-cyan/85">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist" aria-label="Project case study views">
                {views.map((view) => (
                  <button
                    key={view}
                    role="tab"
                    aria-selected={activeView === view}
                    onClick={() => setActiveView(view)}
                    className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${
                      activeView === view
                        ? "bg-cyan text-purple-deep"
                        : "border border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>

              <div className="relative mt-8 min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25">
                <AnimatePresence mode="wait">
                  {activeView === "Artifact" ? (
                    <motion.div
                      key="artifact"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="flex min-h-[24rem] flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10">
                        <FileText className="h-8 w-8 text-cyan" />
                      </div>
                      <h4 className="mt-6 text-2xl font-semibold tracking-[-0.035em]">Open the engineering artifact</h4>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                        Review the design presentation for the assumptions, process structure, safety considerations, and recommendation.
                      </p>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-bold text-purple-deep"
                      >
                        View design presentation <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activeView}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.28 }}
                      className="flex min-h-[24rem] flex-col justify-between p-7 sm:p-10"
                    >
                      <div>
                        <p className="font-instrument text-[10px] tracking-[0.2em] text-cyan">{content[activeView].label}</p>
                        <p className="mt-7 max-w-2xl text-pretty text-xl leading-8 text-white/82 sm:text-2xl sm:leading-9">
                          {content[activeView].text}
                        </p>
                      </div>
                      <div className="mt-9 flex items-center gap-3 font-instrument text-[9px] tracking-[0.16em] text-white/30">
                        <span className="h-px flex-1 bg-gradient-to-r from-cyan/60 to-transparent" />
                        ITERATE WITH EVIDENCE
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
