"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

export function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/vbui31/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data: Repo[]) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setRepos([]));
  }, []);

  return (
    <section id="github" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Open source"
          title="GitHub Activity"
          description="Recent repositories and engineering build momentum."
        />
        <div className="mb-6 rounded-xl border bg-card p-4">
          <p className="mb-3 text-sm font-semibold">Contribution-style Snapshot</p>
          <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-1">
            {Array.from({ length: 126 }).map((_, idx) => (
              <motion.span
                key={idx}
                className="h-3 w-3 rounded-sm bg-cyan/10"
                animate={{ opacity: [0.2, (idx % 6) / 6 + 0.2, 0.2] }}
                transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, delay: (idx % 12) * 0.05 }}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card key={repo.id}>
              <CardContent className="space-y-3 p-5">
                <p className="font-semibold">{repo.name}</p>
                <p className="text-xs text-muted-foreground">
                  {repo.language ?? "Code"} · ★ {repo.stargazers_count}
                </p>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full">
                    View Repository
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <a
          href="https://github.com/vbui31"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
        >
          <Github className="h-4 w-4" /> Explore full GitHub profile
        </a>
      </div>
    </section>
  );
}
