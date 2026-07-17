"use client";

import { motion } from "framer-motion";
import { Route, TowerControl, BookOpenText } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function StandoutSection() {
  const items = [
    {
      icon: TowerControl,
      title: "Distillation Column Visualization",
      body: "Conceptual stage-by-stage separation model with operating insights."
    },
    {
      icon: Route,
      title: "Career Roadmap",
      body: "Structured trajectory from student engineer to high-impact technical leader."
    },
    {
      icon: BookOpenText,
      title: "Current Learning Tracker",
      body: "Live focus on Aspen Plus, process economics, and advanced analytics."
    }
  ];

  return (
    <section id="standout" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Standout features"
          title="Engineering Growth Platform"
          description="Additional concept modules that present technical maturity and career intent."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <Card>
                <CardContent className="space-y-3 p-6">
                  <item.icon className="h-5 w-5 text-cyan" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
