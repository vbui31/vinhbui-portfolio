"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileCode2, FileText, Orbit } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";

const views = ["Challenge", "Approach", "Outcome", "Artifact"] as const;
type View = (typeof views)[number];

export function ProjectsSection() {
  const [activeView, setActiveView] = useState<View>("Challenge");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const project = projects.find((item) => item.id === activeProjectId) ?? projects[0];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedProject = params.get("project");
    const requestedView = params.get("view");

    if (projects.some((item) => item.id === requestedProject)) {
      setActiveProjectId(requestedProject!);
    }
    if (views.some((view) => view.toLowerCase() === requestedView)) {
      setActiveView(views.find((view) => view.toLowerCase() === requestedView)!);
    }
  }, []);

  const updateUrl = (projectId: string, view: View) => {
    const url = new URL(window.location.href);
    url.searchParams.set("project", projectId);
    url.searchParams.set("view", view.toLowerCase());
    url.hash = "projects";
    window.history.replaceState({}, "", url);
  };

  const selectProject = (projectId: string) => {
    setActiveProjectId(projectId);
    setActiveView("Challenge");
    updateUrl(projectId, "Challenge");
  };

  const selectView = (view: View) => {
    setActiveView(view);
    updateUrl(project.id, view);
  };

  const content: Record<Exclude<View, "Artifact">, { label: string; text: string }> = {
    Challenge: { label: "PROBLEM DEFINITION", text: project.problem },
    Approach: { label: "ENGINEERING METHOD", text: project.approach },
    Outcome: { label: "DECISION + LEARNING", text: `${project.results} ${project.learnings}` }
  };

  return (
    <section id="projects" className="relative scroll-mt-28 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-purple/20 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Selected work"
          title="A project should reveal how an engineer thinks."
          description="Choose a case file, then follow the decisions from problem framing to evidence, outcome, and working artifact."
        />

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0814]">
          <div className="border-b border-white/10 p-4 sm:p-5">
            <div className="grid gap-2 md:grid-cols-3" role="tablist" aria-label="Select a project case study">
              {projects.map((item, index) => {
                const selected = item.id === project.id;
                const Icon = item.id === "nova" ? Orbit : item.id === "portfolio" ? FileCode2 : FileText;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`project-selector-${item.id}`}
                    aria-controls="project-case-study"
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectProject(item.id)}
                    onKeyDown={(event) => {
                      const next = event.key === "Home" ? 0 : event.key === "End" ? projects.length - 1 : event.key === "ArrowRight" || event.key === "ArrowDown" ? (index + 1) % projects.length : event.key === "ArrowLeft" || event.key === "ArrowUp" ? (index + projects.length - 1) % projects.length : index;
                      if (next !== index) {
                        event.preventDefault();
                        selectProject(projects[next].id);
                        (event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next])?.focus();
                      }
                    }}
                    className={`group flex min-w-0 items-center gap-4 rounded-[1.1rem] border px-4 py-4 text-left transition-[border-color,background-color,color] sm:px-5 ${
                      selected
                        ? "border-cyan/45 bg-cyan/[0.09] text-white"
                        : "border-white/[0.07] text-white/48 hover:border-white/20 hover:bg-white/[0.03] hover:text-white/78"
                    }`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${selected ? "border-cyan/35 bg-cyan/10 text-cyan" : "border-white/10 text-white/35"}`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-instrument text-[9px] tracking-[0.16em] text-current/60">CASE FILE 0{index + 1}</span>
                      <span className="mt-1 block truncate text-sm font-semibold">{item.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div id="project-case-study" role="tabpanel" aria-labelledby={`project-selector-${project.id}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24 }}
              className="grid lg:grid-cols-[0.38fr,0.62fr]"
            >
            <div className="border-b border-white/10 bg-purple-deep p-7 lg:border-b-0 lg:border-r lg:p-10">
              <p className="font-instrument text-[10px] tracking-[0.18em] text-cyan">{project.eyebrow}</p>
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
                {views.map((view, index) => (
                  <button
                    key={view}
                    type="button"
                    role="tab"
                    id={`project-tab-${index}`}
                    aria-controls="project-tabpanel"
                    tabIndex={activeView === view ? 0 : -1}
                    aria-selected={activeView === view}
                    onClick={() => selectView(view)}
                    onKeyDown={(event) => { const next = event.key === "Home" ? 0 : event.key === "End" ? views.length - 1 : event.key === "ArrowRight" ? (index + 1) % views.length : event.key === "ArrowLeft" ? (index + views.length - 1) % views.length : index; if (next !== index) { event.preventDefault(); selectView(views[next]); (event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next])?.focus(); } }}
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

              <div id="project-tabpanel" role="tabpanel" aria-labelledby={`project-tab-${views.indexOf(activeView)}`} className="relative mt-8 min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25">
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
                        <FileText className="h-8 w-8 text-cyan" aria-hidden="true" />
                      </div>
                      <h4 className="mt-6 text-2xl font-semibold tracking-[-0.035em]">Open the engineering artifact</h4>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                        {project.artifactDescription}
                      </p>
                      <div className="mt-7 flex flex-wrap justify-center gap-3">
                        {project.links.map((link, index) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-[background-color,border-color,color] ${index === 0 ? "bg-cyan text-purple-deep hover:bg-white" : "border border-white/15 text-white/70 hover:border-cyan/40 hover:text-cyan"}`}
                          >
                            {link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
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
            </motion.div>
          </AnimatePresence>
          </div>
        </article>
      </div>
    </section>
  );
}
