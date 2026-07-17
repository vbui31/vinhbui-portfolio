"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function LeadershipTimelineSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="leadership" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Experience & leadership"
          title="Professional Experience Timeline"
          description="High-impact internships, teaching, and leadership roles with measurable outcomes."
        />
        <div className="relative mx-auto max-w-4xl space-y-4 border-l border-cyan/30 pl-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.role}-${item.period}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-cyan" />
              <Card>
                <CardContent className="space-y-2 p-5">
                  <button className="w-full text-left" onClick={() => setOpen(open === idx ? null : idx)}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 space-y-1">
                        <p className="text-xs uppercase tracking-[0.15em] text-cyan">{item.period}</p>
                        <h3 className="text-lg font-semibold">{item.company}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.role} · {item.location}
                        </p>
                      </div>
                      {item.logo ? (
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border bg-white p-1">
                          <Image src={item.logo} alt={`${item.company} logo`} fill className="object-contain" />
                        </div>
                      ) : null}
                    </div>
                  </button>
                  {open === idx ? (
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Responsibilities:</span>{" "}
                        {item.responsibilities}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Achievements:</span>{" "}
                        {item.achievements}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Impact:</span> {item.impact}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Leadership Growth:</span>{" "}
                        {item.growth}
                      </p>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
