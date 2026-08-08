import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Metadata } from "next";
import { PolaroidGrid } from "@/components/features/photos/polaroid-grid";

export const metadata: Metadata = {
  title: "Snapshots",
  description: "A digital Polaroid gallery of snapshots and memories.",
};

export default function PhotosPage() {
  return (
    <div className="flex flex-col select-none">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors self-start cursor-pointer"
        data-cursor-type="nav"
        data-nav-label="Back Home"
      >
        <ArrowLeft className="size-3.5" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-1 mb-8">
        <h1 className="font-pixel text-3xl tracking-wider text-foreground">
          snapshots
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          A digital Polaroid gallery of memories, hacks, and setups.
        </p>
      </div>

      {/* Polaroid Grid */}
      <PolaroidGrid />
    </div>
  );
}
