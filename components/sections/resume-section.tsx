"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Recruiter essentials"
          title="Resume & Quick Facts"
          description="A concise snapshot for internship, research, and long-term career conversations."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr]">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <iframe
              src="/resume.pdf"
              title="Vinh Bui Resume Preview"
              className="h-[480px] w-full rounded-xl border bg-card"
            />
          </motion.div>
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <p className="text-sm text-muted-foreground">
                Junior Chemical Engineering Student at LSU (Expected Graduation: Dec 2027)
              </p>
              <p className="text-sm text-muted-foreground">
                B.S. Chemical Engineering + Minor in Business Administration | GPA: 3.50
              </p>
              <p className="text-sm text-muted-foreground">
                Experience: Incoming Marathon Process Engineering Co-Op | NASA Test & Development Engineering Intern
              </p>
              <p className="text-sm text-muted-foreground">
                Awards: NSF S-STEM/PRISE Scholar | Shell Oil Company Technical Scholarship
              </p>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
