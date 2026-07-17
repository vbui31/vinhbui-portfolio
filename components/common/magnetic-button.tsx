"use client";

import { MouseEvent, ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  onClick
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${offsetX * 0.18}px, ${offsetY * 0.18}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 230, damping: 18 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={cn(
        "rounded-md border border-cyan/35 bg-cyan/10 px-5 py-2 text-sm font-semibold text-cyan backdrop-blur-sm transition-colors hover:bg-cyan/20",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
