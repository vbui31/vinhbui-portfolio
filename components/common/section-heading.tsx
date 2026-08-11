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
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">{description}</p>
      ) : null}
    </motion.div>
  );
}
