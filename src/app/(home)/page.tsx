"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { HeroGreeting } from "@/components/home/hero-greeting";
import { ProjectRow } from "@/components/home/project-row";
import { GitHubCalendar } from "@/components/home/github-calendar";
import { PhotoPreview } from "@/components/home/photo-preview";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { SocialsFooter } from "@/components/layout/socials-footer";
import { DATA } from "@/data/resume";

function StatusTimeline({ status }: { readonly status: typeof DATA.status }) {
  const sections = [
    { title: "currently", items: status.currently },
    { title: "previously", items: status.previously },
  ] as const;

  return (
    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-t border-border">
      {sections.map((section) => (
        <div key={section.title} className="space-y-2.5">
          <p className="text-xs font-mono text-muted-foreground lowercase tracking-wide font-medium">
            {section.title}
          </p>
          <ul className="space-y-2.5 text-sm sm:text-base text-foreground font-normal leading-relaxed list-none pl-0">
            {section.items.map((item, idx) => (
              <li key={idx}>
                {item.prefix}
                {item.links?.map((link, linkIdx) => {
                  const hoverClass =
                    link.accent === "blue"
                      ? "hover:text-blue-500 dark:hover:text-blue-400"
                      : link.accent === "amber"
                      ? "hover:text-amber-500 dark:hover:text-amber-400"
                      : "hover:text-emerald-500 dark:hover:text-emerald-400";
                  const separator = link.separator ?? " & ";
                  return (
                    <React.Fragment key={link.label}>
                      {linkIdx > 0 && separator}
                      {link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`editorial-link text-foreground ${hoverClass} transition-colors`}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span className="font-medium text-foreground">
                          {link.label}
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
                {item.suffix}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.35,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
};

export default function Page() {
  const { name, avatarUrl, status, featuredProjects, coreStack, bio } = DATA;
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
        <div className="flex items-center justify-between gap-2 text-sm font-sans border-b border-border pb-3">
          <nav className="flex flex-wrap items-center gap-3 sm:gap-5 text-muted-foreground text-sm">
            <a href="#builds" className="relative font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors py-1 px-1 -my-1 -mx-1 after:absolute after:-inset-2 after:content-[''] touch-manipulation">
              builds
            </a>
            <Link href="/artifacts" className="relative font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors py-1 px-1 -my-1 -mx-1 after:absolute after:-inset-2 after:content-[''] touch-manipulation">
              artifacts
            </Link>
            <a href="#socials" className="relative font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors py-1 px-1 -my-1 -mx-1 after:absolute after:-inset-2 after:content-[''] touch-manipulation">
              socials
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {timeStr && (
              <span className="text-muted-foreground text-xs sm:text-sm font-mono hidden sm:inline">
                Pune {timeStr}
              </span>
            )}
            <ModeToggle />
          </div>
        </div>

        {/* Greeting & Header */}
        <div className="flex items-center justify-between gap-5 pt-1">
          <div className="space-y-2">
            <HeroGreeting name={firstName} />
            <p className="font-mono text-xs sm:text-sm text-muted-foreground tracking-normal flex flex-wrap items-center gap-1.5 lowercase">
              <a
                href="https://github.com/kwakhare5"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-foreground hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                kwakhare5
              </a>
              <span className="text-muted-foreground/50 select-none">·</span>
              <span>typescript/python</span>
              <span className="text-muted-foreground/50 select-none">·</span>
              <span>ai systems &amp; full-stack</span>
            </p>
          </div>

          <div className="relative size-16 sm:size-20 shrink-0 overflow-hidden rounded-full border border-border bg-muted hover:ring-2 hover:ring-primary/20 transition-all shadow-xs">
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

        {/* Bio & Builder Narrative (Aditya minimalist style) */}
        <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
          {bio.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? "text-foreground" : undefined}>
              {paragraph}
            </p>
          ))}
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
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono text-base sm:text-lg font-normal select-none">#</span>
            <span>builds</span>
            <span className="font-mono text-xs font-normal text-muted-foreground">({featuredProjects.length})</span>
          </h2>
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
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono text-base sm:text-lg font-normal select-none">#</span>
            <span>activity</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">github</span>
        </div>

        <GitHubCalendar />
      </motion.section>

      {/* -- 4. Tech Stack & Tooling ------------------------------------ */}
      <motion.section
        id="stack"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono text-base sm:text-lg font-normal select-none">#</span>
            <span>stack</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">tooling</span>
        </div>

        <div className="space-y-4 pt-1">
          {coreStack.map((group, idx) => {
            const dotColor =
              idx === 0
                ? "bg-emerald-500 dark:bg-emerald-400"
                : idx === 1
                  ? "bg-amber-500 dark:bg-amber-400"
                  : "bg-blue-500 dark:bg-blue-400";
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
                      className="px-2.5 py-1 text-xs sm:text-sm font-mono rounded-full border border-border bg-background hover:border-foreground hover:bg-muted text-foreground transition-[transform,border-color,background-color] duration-150 ease-out cursor-default select-none active:scale-[0.98]"
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
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono text-base sm:text-lg font-normal select-none">#</span>
            <span>artifacts</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">gallery</span>
        </div>

        <PhotoPreview />
      </motion.section>

      {/* -- 6. Epilogue & Socials --------------------------------- */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        <SocialsFooter />
      </motion.div>
    </main>
  );
}
