import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";

export function GithubSection() {
  const repositories = [
    { name: "NOVA", description: "Document renamer", technology: "Python", href: "https://github.com/vbui31/NOVA" },
    { name: "vinhbui-portfolio", description: "Personal Website for Vinh Bui", technology: "TypeScript", href: "https://github.com/vbui31/vinhbui-portfolio" }
  ];
  return <section id="github" className="py-16 md:py-20"><div className="container">
    <SectionHeading eyebrow="Technical work" title="Selected Technical Work" description="Code and portfolio artifacts are available for technical review." />
    <div className="grid gap-4 sm:grid-cols-2">{repositories.map((repo) => <a key={repo.name} href={repo.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-[#0d0814] p-6 text-white/82 transition-colors hover:border-cyan/45 hover:text-cyan"><span className="flex items-center justify-between text-lg font-semibold">{repo.name}<ArrowUpRight aria-hidden="true" className="h-5 w-5" /></span><span className="mt-3 block text-sm leading-6 text-white/65">{repo.description}</span><span className="mt-5 inline-block rounded-full border border-cyan/30 px-3 py-1 text-xs font-medium text-cyan">{repo.technology}</span></a>)}</div>
    <a href="https://github.com/vbui31" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan"><Github aria-hidden="true" className="h-4 w-4" />View GitHub profile</a>
  </div></section>;
}
