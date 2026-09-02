import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { ModeToggle } from "@/components/layout/mode-toggle";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays on building tools, side projects, and life lessons.",
};

export default function BlogPage() {
  return (
    <section id="blog" className="flex flex-col min-h-screen space-y-8 antialiased">
      {/* Top in-page nav row */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 font-mono text-xs">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer editorial-link"
          aria-label="Back to Home"
        >
          <ArrowLeft className="size-3.5" />
          <span>back to home</span>
        </Link>
        <ModeToggle className="size-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
      </div>

      {/* Header Intro */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl sm:text-2xl font-normal tracking-tight text-foreground">
          blog
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Essays on building tools, side projects, and life lessons.
        </p>
      </div>

      {/* Ultra-minimal Notice */}
      <div className="pt-2 flex flex-col gap-2 font-mono text-sm sm:text-base text-muted-foreground">
        <p className="text-foreground">
          cooking something new.
        </p>
        <p className="text-xs sm:text-sm">
          <a
            href="https://x.com/kwakhare5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors editorial-link"
          >
            <span>follow updates on x (@kwakhare5)</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
