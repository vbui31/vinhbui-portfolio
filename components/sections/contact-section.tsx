"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio conversation with ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:vinh.bui1@outlook.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Connect"
          title="Let’s Build Something Impactful"
          description="Open to internship roles, research collaborations, and engineering conversations."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr]">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-3" onSubmit={onSubmit}>
                <Input required name="name" autoComplete="name" placeholder="Your name" />
                <Input required name="email" autoComplete="email" type="email" placeholder="Your email" />
                <Textarea required name="message" placeholder="What would you like to discuss?" />
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
                {submitted ? (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-cyan">
                    Email draft opened in your mail app.
                  </motion.p>
                ) : null}
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-3 p-6">
              <a
                className="flex items-center gap-3 rounded-md border p-3 transition-colors hover:bg-muted"
                href="mailto:vinh.bui1@outlook.com"
              >
                <Mail className="h-4 w-4 text-cyan" /> Email
              </a>
              <a
                className="flex items-center gap-3 rounded-md border p-3 transition-colors hover:bg-muted"
                href="https://www.linkedin.com/in/vinh-bui-lsu/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4 text-cyan" /> LinkedIn
              </a>
              <a
                className="flex items-center gap-3 rounded-md border p-3 transition-colors hover:bg-muted"
                href="https://github.com/vbui31"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4 text-cyan" /> GitHub
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
