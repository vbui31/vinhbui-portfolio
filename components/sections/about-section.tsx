"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/common/section-heading";

export function AboutSection() {
  const cards = [
    {
      title: "Personal Story",
      content:
        "As an LSU Chemical Engineering student in the PRISE cohort, I am building toward high-impact technical roles by combining academic rigor, leadership, and real-world internship experience."
    },
    {
      title: "Engineering Philosophy",
      content:
        "I believe strong engineers pair systems thinking, data-driven decisions, and safety-first judgment with communication that helps teams act confidently."
    },
    {
      title: "Strengths & Career Direction",
      content:
        "I am preparing for process engineering, energy systems, and consulting pathways where technical depth, leadership, and execution discipline create measurable value."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="Building impact through engineering and leadership"
          description="I am passionate about solving large-scale real-world problems through engineering, data-driven decision-making, and leadership."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card className="h-full">
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
