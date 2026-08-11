"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Compass, GraduationCap, Radar } from "lucide-react";
import { useState } from "react";
import { focusData } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";

const groups = [
  {
    title: "Learning",
    question: "What am I sharpening?",
    description: "Tools and methods moving from coursework into engineering practice.",
    items: focusData.learning,
    icon: GraduationCap
  },
  {
    title: "Exploring",
    question: "Where am I looking next?",
    description: "Technical spaces where systems thinking and analytics can create leverage.",
    items: focusData.exploring,
    icon: Compass
  },
  {
    title: "Seeking",
    question: "What conversations matter now?",
    description: "Opportunities to contribute, learn quickly, and take on meaningful responsibility.",
    items: focusData.seeking,
    icon: Radar
  }
];

export function CurrentFocusSection() {
  const [active, setActive] = useState(0);
  const group = groups[active];
  const Icon = group.icon;

  return (
    <section id="focus" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Live operating state"
          title="What I am building toward now."
          description="This portfolio is a snapshot, not a finish line. Select a signal to see the current direction."
        />

        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0814] lg:grid-cols-[0.32fr,0.68fr]">
          <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
            {groups.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <button
                  key={item.title}
                  onClick={() => setActive(index)}
                  className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-colors ${
                    active === index ? "bg-cyan text-purple-deep" : "text-white/55 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <ItemIcon className="h-5 w-5" />
                  <span>
                    <span className="block text-sm font-bold">{item.title}</span>
                    <span className={`mt-0.5 block text-[11px] ${active === index ? "text-purple-deep/65" : "text-white/35"}`}>
                      {item.question}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[25rem] p-7 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 text-cyan">
                  <Icon className="h-5 w-5" />
                  <p className="font-instrument text-[10px] tracking-[0.18em]">{group.title.toUpperCase()} SIGNAL</p>
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{group.question}</h3>
                <p className="mt-3 max-w-xl text-white/55">{group.description}</p>
                <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                  {group.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.04 }}
                      className="bg-[#100a18] px-5 py-4 text-sm font-medium text-white/78"
                    >
                      <span className="mr-3 font-instrument text-[9px] text-cyan/65">{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
