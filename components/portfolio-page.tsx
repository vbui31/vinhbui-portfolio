"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
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
  { label: "Experience", href: "#leadership", id: "leadership" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Capabilities", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.25, 0.6] }
    );

    ["home", ...navItems.map((item) => item.id)].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#09060e]/80 px-4 shadow-[0_12px_45px_rgb(0_0_0/0.3)] backdrop-blur-xl sm:px-6">
          <a href="#home" className="flex items-center gap-2 text-sm font-bold tracking-tight text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan text-[10px] font-black text-purple-deep">VB</span>
            <span className="hidden sm:inline">Vinh Bui</span>
          </a>
          <nav className="flex items-center gap-1" aria-label="Portfolio sections">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-[11px] font-semibold transition-colors sm:px-4 sm:text-xs ${
                  activeSection === item.id
                    ? "bg-white/10 text-cyan"
                    : "text-white/48 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <LeadershipTimelineSection />
        <ProjectsSection />
        <CurrentFocusSection />
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <GithubSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/8 bg-[#09060e] py-10">
        <div className="container flex flex-col items-center justify-between gap-3 text-sm text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Vinh Bui</p>
          <p className="font-instrument text-[9px] tracking-[0.16em]">ENGINEER THE SYSTEM · COMMUNICATE THE DECISION</p>
        </div>
      </footer>
    </MotionConfig>
  );
}
