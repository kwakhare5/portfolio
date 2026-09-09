"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { HeroGreeting } from "@/components/home/hero-greeting";
import { StatusTimeline } from "@/components/home/status-timeline";
import { ProjectRow } from "@/components/home/project-row";
import { GitHubCalendar } from "@/components/home/github-calendar";
import { PhotoPreview } from "@/components/home/photo-preview";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { DATA } from "@/data/resume";

const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

export default function Page() {
  const { name, role, description, manifesto, avatarUrl, status, featuredProjects, coreStack, contact } = DATA;
  const firstName = name.split(" ")[0];

  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setTimeStr(formatter.format(new Date()));
      } catch {
        setTimeStr("");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full flex flex-col space-y-14 sm:space-y-20 antialiased">
      {/* -- 1. Masthead & In-Page Navigation ------------------------- */}
      <motion.section
        custom={0}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="flex flex-col gap-6 sm:gap-7"
      >
        {/* In-Page Navigation Bar */}
        <div className="flex items-center justify-between gap-2 text-xs font-mono border-b border-border/50 pb-3">
          <nav className="flex flex-wrap items-center gap-2.5 sm:gap-5 text-muted-foreground text-xs sm:text-[13px]">
            <a href="#builds" className="editorial-link hover:text-foreground py-0.5">
              builds
            </a>
            <Link href="/artifacts" className="editorial-link hover:text-foreground py-0.5">
              artifacts
            </Link>
            <Link href="/blog" className="editorial-link hover:text-foreground py-0.5">
              blog
            </Link>
            <a href="#socials" className="editorial-link hover:text-foreground py-0.5">
              socials
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {timeStr && (
              <span className="text-muted-foreground/60 text-xs hidden sm:inline">
                Pune {timeStr}
              </span>
            )}
            <ModeToggle className="size-6 sm:size-5 p-0.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Greeting & Header */}
        <div className="flex items-center justify-between gap-5 pt-1">
          <div className="space-y-1.5">
            <HeroGreeting name={firstName} />
            <p className="font-sans text-base sm:text-lg text-muted-foreground font-normal tracking-normal">
              {role}
            </p>
          </div>

          <div className="relative size-16 sm:size-20 shrink-0 overflow-hidden rounded-full border border-border/80 bg-muted hover:ring-2 hover:ring-primary/20 transition-all shadow-xs">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio & Builder Manifesto */}
        <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground/90 font-normal">
            {description}
          </p>
          {manifesto && manifesto.length > 0 && (
            <div className="space-y-2 pl-4 text-sm sm:text-base pt-0.5">
              {manifesto.map((item, idx) => (
                <div
                  key={idx}
                  className="relative before:content-['-'] before:absolute before:-left-4 before:text-amber-500 text-foreground/85 leading-normal"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* -- Currently & Previously (Structured Timeline) -- */}
        <StatusTimeline status={status} />
      </motion.section>

      {/* -- 2. Featured Products (Linear System Rows) ------------------ */}
      <motion.section
        id="builds"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="space-y-3"
      >
        <div className="flex items-center justify-between border-b border-border/60 pb-2.5 mb-2">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span>featured builds</span>
            <span className="font-mono text-xs font-normal text-muted-foreground">({featuredProjects.length})</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground/60">click [specs] to inspect</span>
        </div>

        <div className="flex flex-col">
          {featuredProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </motion.section>

      {/* -- 3. Open Source Activity (GitHub Heatmap) ------------------ */}
      <motion.section
        id="activity"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight">
            activity
          </h2>
          <span className="font-mono text-xs text-muted-foreground/60">github</span>
        </div>

        <GitHubCalendar />
      </motion.section>

      {/* -- 4. Tech Stack & Tooling ------------------------------------ */}
      <motion.section
        custom={3}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight">
            daily drivers &amp; tooling
          </h2>
          <span className="font-mono text-xs text-muted-foreground/60">stack</span>
        </div>

        <div className="space-y-4 pt-1">
          {coreStack.map((group, idx) => {
            const dotColor =
              idx === 0 ? "bg-emerald-500" : idx === 1 ? "bg-amber-500" : "bg-blue-500";
            return (
              <div key={group.category} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`size-1.5 rounded-full ${dotColor}`} />
                  <span className="font-mono text-xs font-medium text-muted-foreground">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-mono rounded-full border border-border/70 bg-background/80 hover:border-foreground/50 hover:bg-muted/30 text-foreground/90 transition-all cursor-default select-none active:scale-95"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* -- 5. Artifacts Section ---------------------------------------- */}
      <motion.section
        id="artifacts"
        custom={4}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight">
            artifacts
          </h2>
          <span className="font-mono text-xs text-muted-foreground/60">gallery</span>
        </div>

        <PhotoPreview />
      </motion.section>

      {/* -- 6. Epilogue & Socials --------------------------------- */}
      <motion.section
        id="socials"
        custom={5}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="pt-4 border-t border-border/60"
      >
        <div className="flex flex-wrap items-center gap-y-2 gap-x-2.5 text-xs sm:text-[13px] font-mono text-muted-foreground">
          <span className="text-foreground/70 font-medium">find me on</span>
          <span className="text-muted-foreground/40 hidden sm:inline">-</span>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {contact.socials.map((social, idx) => {
              const hoverColor =
                social.accent === "emerald"
                  ? "hover:text-emerald-600 dark:hover:text-emerald-400"
                  : social.accent === "amber"
                    ? "hover:text-amber-600 dark:hover:text-amber-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400";
              return (
                <React.Fragment key={social.name}>
                  {idx > 0 && <span className="text-muted-foreground/30">/</span>}
                  <a
                    href={social.url}
                    {...(social.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`editorial-link text-foreground/90 ${hoverColor}`}
                  >
                    {social.label}
                  </a>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
