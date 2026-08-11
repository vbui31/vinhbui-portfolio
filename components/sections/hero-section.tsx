"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { typingItems } from "@/data/portfolio";
import { assetPath } from "@/lib/asset-path";
import { MagneticButton } from "@/components/common/magnetic-button";
import { MoleculeCanvas } from "@/components/visualization/molecule-canvas";

export function HeroSection() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingItems[typingIndex];
    const timer = setTimeout(
      () => {
        if (!deleting && displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
          return;
        }
        if (!deleting && displayed.length === current.length) {
          setDeleting(true);
          return;
        }
        if (deleting && displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
          return;
        }
        setDeleting(false);
        setTypingIndex((typingIndex + 1) % typingItems.length);
      },
      deleting ? 70 : displayed.length === current.length ? 1200 : 90
    );
    return () => clearTimeout(timer);
  }, [deleting, displayed, typingIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient px-4 pt-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <MoleculeCanvas />
      </div>
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 26 }).map((_, idx) => (
          <motion.span
            key={idx}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#FDD023]/70"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            animate={{ y: ["0%", "-10%", "0%"], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 3 + (idx % 3), repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </div>
      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan/80">LSU Chemical Engineering</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Vinh Bui</h1>
            <h2 className="text-2xl font-semibold text-cyan/90 md:text-3xl">
              Chemical Engineering Student
            </h2>
            <p className="text-lg text-slate-100">
              Future Engineer | Problem Solver | Leader
            </p>
            <p className="h-8 text-base font-semibold text-cyan md:text-lg">
              {displayed}
              <span className="animate-pulse">|</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                onClick={() => document.getElementById("projects")?.scrollIntoView()}
              >
                View Projects
              </MagneticButton>
              <MagneticButton onClick={() => window.open(assetPath("/resume.pdf"), "_blank")}>
                Download Resume
              </MagneticButton>
              <MagneticButton
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                Connect With Me
              </MagneticButton>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto w-full max-w-sm rounded-2xl border border-cyan/30 bg-white/5 p-6 backdrop-blur-lg"
          >
            <div className="relative mx-auto h-72 w-56 overflow-hidden rounded-xl border border-white/20">
              <Image
                src={assetPath("/headshot.jpg")}
                alt="Professional headshot of Vinh Bui"
                fill
                className="object-cover object-[56%_24%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
