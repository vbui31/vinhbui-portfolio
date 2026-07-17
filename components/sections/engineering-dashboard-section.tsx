"use client";

import { motion } from "framer-motion";
import { dashboardKpis } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/common/section-heading";
import { AnimatedCounter } from "@/components/common/animated-counter";

export function EngineeringDashboardSection() {
  return (
    <section id="dashboard" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Engineering dashboard"
          title="Growth Metrics"
          description="A quick recruiter-facing view of project, leadership, and capability momentum."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardKpis.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-4xl font-black text-cyan">
                    <AnimatedCounter value={item.value} />+
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
