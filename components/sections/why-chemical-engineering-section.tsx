"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function WhyChemicalEngineeringSection() {
  return (
    <section id="why-chem" className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Story" title="Why Chemical Engineering?" />
        <Card className="mx-auto max-w-4xl">
          <CardContent className="space-y-4 p-8 text-pretty text-muted-foreground">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              I chose chemical engineering because it sits at the intersection of science, math, and
              systems-level impact. I am motivated by solving problems that influence real operations,
              sustainability outcomes, and long-term value creation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              My goal is to become an engineer who can move fluidly between technical depth and
              strategic thinking, translating complex process insights into decisions that improve
              performance and people outcomes.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

