import { Download, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { assetPath } from "@/lib/asset-path";

const links = [
  { label: "Email Vinh", href: "mailto:vinh.bui1@outlook.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vinh-bui-lsu/", icon: Linkedin, external: true },
  { label: "Download Résumé", href: assetPath("/resume.pdf"), icon: Download, external: true },
  { label: "GitHub", href: "https://github.com/vbui31", icon: Github, external: true }
];

export function ContactSection() {
  return <section id="contact" className="py-16 md:py-20"><div className="container">
    <SectionHeading eyebrow="Connect" title="Start a Technical Conversation" description="Available for process engineering, energy, and engineering analytics opportunities." />
    <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0814] sm:grid-cols-2">
      {links.map(({ label, href, icon: Icon, external }) => <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="flex min-h-24 items-center gap-4 border-b border-white/10 px-6 text-base font-semibold text-white/82 transition-colors hover:bg-white/5 hover:text-cyan sm:[&:nth-child(odd)]:border-r">
        <Icon aria-hidden="true" className="h-5 w-5 text-cyan" />{label}
      </a>)}
    </div>
  </div></section>;
}
