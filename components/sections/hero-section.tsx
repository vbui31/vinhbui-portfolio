"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/asset-path";
import { MoleculeCanvas } from "@/components/visualization/molecule-canvas";

const stages = [
  {
    label: "Observe",
    signal: "FIELD + SYSTEM DATA",
    title: "Read the system before changing it.",
    detail:
      "I start with the evidence: process conditions, hardware configuration, operating history, and the people closest to the work.",
    proof: "150+ shale well pads evaluated · NASA test-stand configuration baselined"
  },
  {
    label: "Model",
    signal: "PHYSICS + ANALYTICS",
    title: "Turn complexity into a decision model.",
    detail:
      "I connect chemical-engineering fundamentals with simulation, code, and structured analysis so tradeoffs become visible.",
    proof: "Aspen Plus · Python · Power BI · engineering documentation"
  },
  {
    label: "Improve",
    signal: "SAFETY + PERFORMANCE",
    title: "Design the next operating state.",
    detail:
      "I look for improvements that teams can actually implement—safer hardware, clearer workflows, faster analysis, and stronger forecasts.",
    proof: "~$25MM potential value · 20% faster data workflows"
  },
  {
    label: "Lead",
    signal: "ALIGNMENT + DELIVERY",
    title: "Make the work usable by other people.",
    detail:
      "The deliverable is not finished until operators, engineers, students, or leaders can understand it and act with confidence.",
    proof: "NASA readiness review · teaching · SASE leadership"
  }
];

export function HeroSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-hero-gradient px-4 pb-14 pt-28 text-white"
    >
      <div className="lab-grid pointer-events-none absolute inset-0 opacity-55" />
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <MoleculeCanvas />
      </div>
      <div className="pointer-events-none absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full bg-purple/30 blur-[120px]" />

      <div className="container relative z-10 flex min-h-[calc(100vh-7rem)] flex-col justify-between">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr,1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-7 flex items-center gap-3 font-instrument text-[11px] tracking-[0.2em] text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_#FDD023]" />
              LSU · NASA MARSHALL SPACE FLIGHT CENTER
            </div>
            <h1 className="text-balance text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.87] tracking-[-0.075em]">
              Vinh
              <span className="block text-cyan">Bui.</span>
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-instrument text-[10px] tracking-[0.17em] text-white/70 sm:text-[11px]">
              <span className="font-semibold text-white">CHEMICAL ENGINEER</span>
              <span className="h-px w-7 bg-cyan" aria-hidden="true" />
              <span>GRADUATING DECEMBER 2027</span>
            </div>
            <p className="mt-7 max-w-xl text-pretty text-xl leading-8 text-white/72 md:text-2xl md:leading-9">
              I turn complex process, energy, and data problems into decisions people can use.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView()}
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan px-6 text-sm font-bold text-purple-deep transition-transform hover:-translate-y-0.5"
              >
                Explore the work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
              <button
                onClick={() => window.open(assetPath("/resume.pdf"), "_blank")}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:border-cyan/55 hover:bg-white/10"
              >
                <FileText className="h-4 w-4 text-cyan" /> Resume
              </button>
            </div>

            <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan/45 bg-white/5">
                <Image
                  src={assetPath("/headshot.jpg")}
                  alt="Vinh Bui"
                  fill
                  priority
                  className="object-cover object-[56%_24%]"
                />
              </div>
              <div>
                <p className="font-semibold">Louisiana State University</p>
                <p className="text-sm text-white/55">B.S. Chemical Engineering · December 2027</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/12 p-4 sm:p-6"
          >
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-cyan/10" />
            <div className="relative rounded-[1.45rem] border border-white/10 bg-black/25 p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-instrument text-[10px] tracking-[0.18em] text-white/45">
                <span>ENGINEERING LOOP</span>
                <span className="text-cyan">SYSTEM ONLINE</span>
              </div>

              <div className="relative min-h-[21rem] py-9">
                <div className="absolute left-7 top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-cyan via-purple to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.28 }}
                    className="pl-16"
                  >
                    <p className="font-instrument text-[10px] tracking-[0.2em] text-cyan">
                      0{activeStage + 1} / 04 · {stage.signal}
                    </p>
                    <h2 className="mt-5 max-w-lg text-balance text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                      {stage.title}
                    </h2>
                    <p className="mt-5 max-w-lg text-pretty leading-7 text-white/65">{stage.detail}</p>
                    <div className="mt-8 border-l-2 border-cyan pl-4">
                      <p className="font-instrument text-[10px] tracking-[0.16em] text-white/40">EVIDENCE</p>
                      <p className="mt-2 text-sm font-medium text-white/86">{stage.proof}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <motion.span
                  className="absolute left-[1.48rem] top-12 h-3 w-3 rounded-full bg-cyan shadow-[0_0_24px_#FDD023]"
                  animate={{ y: activeStage * 56 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-4 sm:grid-cols-4" role="tablist" aria-label="Engineering process stages">
                {stages.map((item, index) => (
                  <button
                    key={item.label}
                    role="tab"
                    aria-selected={activeStage === index}
                    onClick={() => setActiveStage(index)}
                    className={`rounded-xl px-3 py-3 text-left transition-colors ${
                      activeStage === index
                        ? "bg-cyan text-purple-deep"
                        : "bg-white/[0.035] text-white/55 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <span className="block font-instrument text-[9px] opacity-65">0{index + 1}</span>
                    <span className="mt-1 block text-xs font-bold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#leadership"
          className="mt-14 inline-flex w-fit items-center gap-3 font-instrument text-[10px] tracking-[0.18em] text-white/45 transition-colors hover:text-cyan"
        >
          FOLLOW THE PROCESS <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
