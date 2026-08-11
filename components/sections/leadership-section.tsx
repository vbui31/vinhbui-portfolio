"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { leadershipTimeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";

export function LeadershipSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="leadership" className="border-y border-border bg-muted/30 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Leadership & community"
          title="Building teams that outlast the event"
          description="From professional development to cultural community work, I focus on the systems that help people show up, connect, and grow."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {leadershipTimeline.map((item, index) => {
            const expanded = open === index;
            return (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className={`rounded-xl border p-6 transition-colors duration-200 ${expanded ? "border-cyan/70 bg-card" : "border-border bg-background hover:bg-card"}`}
              >
                <button
                  type="button"
                  className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  onClick={() => setOpen(expanded ? null : index)}
                  aria-expanded={expanded}
                  aria-controls={`leadership-panel-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-4 font-mono text-xs text-cyan">{item.period}</p>
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.role}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.company}</p>
                    </div>
                    {item.logo ? (
                      <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded-md border border-border bg-white p-1">
                        <Image src={item.logo} alt="" fill className="object-contain" />
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-muted-foreground">
                    <span>{item.location}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180 text-cyan" : ""}`} aria-hidden="true" />
                  </div>
                </button>
                {expanded ? (
                    <motion.div id={`leadership-panel-${index}`}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      <div className="space-y-3 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
                        <p><span className="font-medium text-foreground">Impact:</span> {item.impact}</p>
                        <p><span className="font-medium text-foreground">What changed:</span> {item.achievements}</p>
                        <p><span className="font-medium text-foreground">Leadership growth:</span> {item.growth}</p>
                      </div>
                    </motion.div>
                  ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
