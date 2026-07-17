"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { HeroSection } from "@/components/sections/hero-section";
import { CurrentFocusSection } from "@/components/sections/current-focus-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { LeadershipTimelineSection } from "@/components/sections/leadership-timeline-section";
import { GithubSection } from "@/components/sections/github-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ContactSection } from "@/components/sections/contact-section";

const navItems = [
  { label: "Experience", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Focus", href: "#focus" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy"
          >
            <motion.div
              className="h-12 w-12 rounded-full border-2 border-cyan border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#home" className="text-sm font-bold tracking-wide text-cyan">
            VINH BUI
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main>
        <HeroSection />
        <LeadershipTimelineSection />
        <AchievementsSection />
        <CurrentFocusSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GithubSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer className="border-t py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vinh Bui · Future Engineer | Problem Solver | Leader
        </div>
      </footer>
    </>
  );
}
