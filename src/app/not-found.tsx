import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4 select-none">
      <div className="flex flex-col items-center max-w-md gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono text-foreground tracking-tight">
            404
          </h1>
          <span className="border border-border rounded px-1.5 py-0.5 text-muted-foreground text-xs font-mono">
            not found
          </span>
        </div>

        <h2 className="text-base sm:text-lg font-medium text-foreground tracking-tight">
          Page not found
        </h2>

        <p className="text-xs sm:text-sm text-muted-foreground max-w-xs leading-relaxed">
          The link you followed may be broken or the page may have been moved.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-foreground font-mono editorial-link"
          >
            <ArrowLeft className="size-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
