"use client";

import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { researchInterests } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { ProcessFlowDiagram } from "@/components/visualization/process-flow-diagram";

export function ResearchInterestsSection() {
  return (
    <section id="research" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Research interests"
          title="Technical Curiosity Areas"
          description="Emerging directions where I want to build depth through research, experimentation, and practical application."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Card>
            <CardContent className="grid gap-3 p-6 sm:grid-cols-2">
              {researchInterests.map((interest, idx) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="rounded-lg border bg-muted/40 p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-cyan" />
                    <p className="text-sm font-semibold">{interest}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Research summary, technical notes, and future publication potential.
                  </p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
          <ProcessFlowDiagram />
        </div>
      </div>
    </section>
  );
}

