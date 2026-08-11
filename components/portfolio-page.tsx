"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { LeadershipTimelineSection } from "@/components/sections/leadership-timeline-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { GithubSection } from "@/components/sections/github-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ContactSection } from "@/components/sections/contact-section";

const navItems = [
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Capabilities", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

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
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Portfolio sections">
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
        {menuOpen ? <nav id="mobile-navigation" aria-label="Portfolio sections" className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#09060e]/95 p-2 shadow-[0_12px_45px_rgb(0_0_0/0.3)] backdrop-blur-xl md:hidden">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} aria-current={activeSection === item.id ? "page" : undefined} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/78 hover:bg-white/10 hover:text-cyan">{item.label}</a>)}
        </nav> : null}
      </header>

      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan focus:px-4 focus:py-2 focus:text-purple-deep">Skip to content</a>
      <main id="main-content">
        <HeroSection />
        <LeadershipTimelineSection />
        <LeadershipSection />
        <ProjectsSection />
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
