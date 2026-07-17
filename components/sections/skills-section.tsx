"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const categories = ["All", ...skills.map((s) => s.category)];
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? skills : skills.filter((group) => group.category === active)),
    [active]
  );

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Engineering fundamentals, analytical tooling, and leadership execution."
        />
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button key={category} onClick={() => setActive(category)}>
              <Badge variant={active === category ? "default" : "secondary"}>{category}</Badge>
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((group) => (
            <Card key={group.category}>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold">{group.category}</h3>
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <Badge variant="secondary" className="text-sm">
                      {item.name}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
