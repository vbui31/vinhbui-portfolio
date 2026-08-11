"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Selected impact"
          title="Evidence behind the trajectory"
          description="Resume-backed milestones across engineering, scholarships, and community leadership."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <Card>
                <CardContent className="flex items-center gap-3 p-5">
                  <Award className="h-5 w-5 text-cyan" />
                  <p className="text-sm font-medium">{item}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
