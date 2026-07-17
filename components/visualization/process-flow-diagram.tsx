"use client";

import { motion } from "framer-motion";

export function ProcessFlowDiagram() {
  const steps = ["Feed", "Reactor", "Separator", "Heat Exchange", "Product"];
  return (
    <div className="rounded-xl border bg-card p-5">
      <p className="mb-4 text-sm font-semibold text-cyan">Animated Process Flow Concept</p>
      <div className="flex flex-wrap items-center gap-3">
        {steps.map((step, idx) => (
          <div key={step} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-md border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-semibold"
            >
              {step}
            </motion.div>
            {idx < steps.length - 1 ? (
              <motion.div
                className="h-[2px] w-8 bg-cyan/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8, delay: idx * 0.2 }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
