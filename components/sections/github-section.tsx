import { Github } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";

export function GithubSection() {
  return <section id="github" className="py-16 md:py-20"><div className="container">
    <SectionHeading eyebrow="Technical work" title="Selected Technical Work" description="Code and portfolio artifacts are available for technical review." />
    <a href="https://github.com/vbui31" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d0814] p-6 text-white/82 transition-colors hover:border-cyan/45 hover:text-cyan">
      <span><span className="block text-lg font-semibold">Vinh Bui on GitHub</span><span className="mt-1 block text-sm text-white/65">Browse published engineering, analytics, and software work.</span></span><Github aria-hidden="true" className="h-6 w-6" />
    </a>
  </div></section>;
}
