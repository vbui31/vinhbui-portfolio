"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="mb-10 text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold md:text-4xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">{description}</p>
      ) : null}
    </motion.div>
  );
}
