"use client";

import { motion } from "framer-motion";
import { focusData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/common/section-heading";

const groups = [
  { title: "Learning", items: focusData.learning },
  { title: "Exploring", items: focusData.exploring },
  { title: "Seeking", items: focusData.seeking }
];

export function CurrentFocusSection() {
  return (
    <section id="focus" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Right now"
          title="Current Focus"
          description="A live snapshot of what I am building, exploring, and pursuing."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card className="h-full bg-gradient-to-br from-card to-card/60">
                <CardHeader>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {group.items.map((item) => (
                    <p key={item} className="rounded-md bg-muted px-3 py-2 text-sm">
                      {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

