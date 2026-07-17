"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = activeCategory === "All" || project.category === activeCategory;
      const queryMatch = `${project.title} ${project.overview} ${project.tools.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio centerpiece"
          title="Engineering Projects"
          description="Case-study-style projects focused on problem definition, methodology, and measurable value."
        />
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="pl-9"
              placeholder="Search projects..."
              aria-label="Search projects"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)}>
                <Badge variant={activeCategory === category ? "default" : "secondary"}>
                  {category}
                </Badge>
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          {filteredProjects.map((project, idx) => {
            const open = expanded === project.title;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[0.35fr,0.65fr]">
                    <div className="relative min-h-56">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>
                    <CardContent className="space-y-3 p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge>{project.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.overview}</p>
                      <p className="text-sm">
                        <span className="font-semibold">Problem:</span> {project.problem}
                      </p>
                      {open ? (
                        <>
                          <p className="text-sm">
                            <span className="font-semibold">Approach:</span> {project.approach}
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">Tools:</span> {project.tools.join(", ")}
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">Results:</span> {project.results}
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">Key Learnings:</span> {project.learnings}
                          </p>
                          <div className="overflow-hidden rounded-lg border">
                            <iframe
                              src={project.demo}
                              title={`${project.title} poster`}
                              className="h-[360px] w-full bg-card"
                            />
                          </div>
                          <div className="flex flex-wrap gap-3 pt-2">
                            <a href={project.demo} target="_blank" rel="noreferrer">
                              <Button>3171 Design Presentation (PDF)</Button>
                            </a>
                          </div>
                        </>
                      ) : null}
                      <Button
                        variant="ghost"
                        onClick={() => setExpanded(open ? null : project.title)}
                        className="px-0 text-cyan"
                      >
                        {open ? "Collapse case study" : "Expand case study"}
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
