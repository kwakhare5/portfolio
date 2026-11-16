"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroGreeting } from "@/components/home/hero-greeting";
import { ProjectRow } from "@/components/home/project-row";
import { GitHubCalendar } from "@/components/home/github-calendar";
import { PhotoPreview } from "@/components/home/photo-preview";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { SocialsFooter } from "@/components/layout/socials-footer";
import { DATA } from "@/data/resume";
import { getTechInkClass } from "@/lib/utils";
import {
  SketchCode,
  SketchSparkle,
  SketchGear,
  SketchClock,
  SketchLayersShelf,
  SketchGithub,
  SketchCamera,
} from "@/components/home/stationery-icons";

const TIME_FORMATTER = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export default function Page() {
  const { name, avatarUrl, featuredProjects, coreStack, bio } = DATA;
  const firstName = name.split(" ")[0];

  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => setTimeStr(TIME_FORMATTER.format(new Date()));
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full flex flex-col space-y-14 sm:space-y-20 antialiased">
      {/* -- 1. Masthead & In-Page Navigation -------------------------------- */}
      <section
        className="reveal flex flex-col gap-6 sm:gap-7"
        style={{ animationDelay: "0ms" }}
      >
        {/* Nav Bar */}
        <div className="flex items-center justify-between gap-2 text-sm font-sans border-b border-border pb-3">
          <nav className="flex flex-wrap items-center gap-3 sm:gap-5 text-muted-foreground text-sm">
            <a
              href="#builds"
              className="relative font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors py-1 px-1 -my-1 -mx-1 after:absolute after:-inset-2 after:content-[''] touch-manipulation"
            >
              builds
            </a>
            <Link
              href="/artifacts"
              className="relative font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors py-1 px-1 -my-1 -mx-1 after:absolute after:-inset-2 after:content-[''] touch-manipulation"
            >
              artifacts
            </Link>
            <a
              href="#socials"
              className="relative font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors py-1 px-1 -my-1 -mx-1 after:absolute after:-inset-2 after:content-[''] touch-manipulation"
            >
              socials
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {timeStr && (
              <span className="text-muted-foreground text-xs sm:text-sm font-mono hidden sm:inline-flex items-center gap-1.5">
                <SketchClock className="size-3 text-muted-foreground/70 shrink-0" />
                <span>Pune {timeStr}</span>
              </span>
            )}
            <ModeToggle />
          </div>
        </div>

        {/* Name & Avatar */}
        <div className="flex items-center justify-between gap-5 pt-1">
          <div className="space-y-2">
            <HeroGreeting name={firstName} />
            <p className="font-mono text-xs sm:text-sm text-muted-foreground tracking-normal flex flex-wrap items-center gap-1.5 lowercase">
              <a
                href="https://github.com/kwakhare5"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-foreground hover:text-foreground font-medium transition-colors"
              >
                kwakhare5
              </a>
              <span className="text-muted-foreground/50 select-none">·</span>
              <span>typescript / python</span>
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
              sizes="(max-width: 640px) 64px, 80px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-3 sm:space-y-3.5 text-sm sm:text-base leading-relaxed text-foreground font-normal">
          {bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* -- 2. Builds ------------------------------------------------------- */}
      <section
        id="builds"
        className="reveal space-y-2"
        style={{ animationDelay: "60ms" }}
      >
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono select-none">#</span>
            <SketchLayersShelf className="size-4 text-[var(--notion-blue-text)] shrink-0" />
            <span>builds</span>
            <span className="font-mono text-xs font-normal text-muted-foreground">
              ({featuredProjects.length})
            </span>
          </h2>
        </div>

        <div className="flex flex-col">
          {featuredProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* -- 3. Tech Stack & Tooling ----------------------------------------- */}
      <section
        id="stack"
        className="reveal space-y-4"
        style={{ animationDelay: "120ms" }}
      >
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono select-none">#</span>
            <SketchCode className="size-4 text-[var(--notion-amber-text)] shrink-0" />
            <span>stack</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">tooling</span>
        </div>

        <div className="space-y-3.5 pt-1">
          {coreStack.map((group) => {
            const cat = group.category.toLowerCase();
            const isLang = cat.includes("language");
            const isAi = cat.includes("ai");

            const icon = isLang ? (
              <SketchCode className="size-3 text-[var(--notion-blue-text)] shrink-0" />
            ) : isAi ? (
              <SketchSparkle className="size-3 text-[var(--notion-amber-text)] shrink-0" />
            ) : (
              <SketchGear className="size-3 text-[var(--notion-green-text)] shrink-0" />
            );

            const groupTextColor = isLang
              ? "text-[var(--notion-blue-text)]"
              : isAi
              ? "text-[var(--notion-amber-text)]"
              : "text-[var(--notion-green-text)]";

            return (
              <div key={group.category} className="space-y-1">
                <span className="font-mono text-xs font-medium text-muted-foreground inline-flex items-center gap-1.5">
                  {icon}
                  <span>{group.category}</span>
                </span>
                <p className="text-xs sm:text-sm font-mono leading-relaxed">
                  {group.items.map((item, idx) => (
                    <span key={item}>
                      {idx > 0 && (
                        <span className="text-muted-foreground/40 mx-2 select-none">·</span>
                      )}
                      <span className={`${groupTextColor} font-medium select-none`}>
                        {item}
                      </span>
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* -- 4. GitHub Activity --------------------------------------------- */}
      <section
        id="activity"
        className="reveal space-y-4"
        style={{ animationDelay: "180ms" }}
      >
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono select-none">#</span>
            <SketchGithub className="size-4 text-[var(--notion-blue-text)] shrink-0" />
            <span>activity</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">github</span>
        </div>

        <GitHubCalendar />
      </section>

      {/* -- 5. Artifacts ---------------------------------------------------- */}
      <section
        id="artifacts"
        className="reveal space-y-4"
        style={{ animationDelay: "240ms" }}
      >
        <div className="flex items-center justify-between border-b border-border pb-2.5">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-muted-foreground/50 font-mono select-none">#</span>
            <SketchCamera className="size-4 text-[var(--notion-green-text)] shrink-0" />
            <span>artifacts</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">gallery</span>
        </div>

        <PhotoPreview />
      </section>

      {/* -- 6. Socials Footer ----------------------------------------------- */}
      <div className="reveal" style={{ animationDelay: "300ms" }}>
        <SocialsFooter />
      </div>
    </main>
  );
}
