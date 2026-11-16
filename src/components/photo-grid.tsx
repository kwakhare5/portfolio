"use client";

import { useState } from "react";
import Link from "next/link";
import type { PhotoItem } from "@/data/resume";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { PhotoCard } from "@/components/photo-card";
import { SketchCamera, SketchArrow } from "@/components/stationery-icons";

const PREVIEW_COUNT = 4;

export function PhotoGrid({
  photos,
  variant,
}: {
  photos: readonly PhotoItem[];
  variant: "preview" | "gallery";
}) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const preview = variant === "preview";
  const gridPhotos = preview ? photos.slice(0, PREVIEW_COUNT) : photos;

  return (
    <div className={`w-full flex flex-col ${preview ? "gap-3" : "gap-6"}`}>
      <div
        className={`grid grid-cols-2 w-full ${
          preview ? "sm:grid-cols-4 gap-3 sm:gap-3.5" : "sm:grid-cols-3 gap-3.5 sm:gap-4"
        }`}
      >
        {gridPhotos.map((photo, index) => (
          <PhotoCard
            key={photo.url}
            photo={photo}
            index={index}
            onClick={() => setActivePhotoIndex(index)}
            sizes={preview ? "(max-width: 640px) 50vw, 25vw" : "(max-width: 640px) 50vw, 33vw"}
            stamp={preview ? undefined : index + 1 < 10 ? `0${index + 1}` : String(index + 1)}
          />
        ))}
      </div>

      {preview && (
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-0.5">
          <span>
            showing {PREVIEW_COUNT} of {photos.length} captures
          </span>
          <Link
            href="/artifacts"
            className="relative inline-flex items-center gap-1 font-medium text-[var(--notion-blue-text)] underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:-inset-2 after:content-[''] touch-manipulation"
          >
            <SketchCamera className="size-3.5" />
            <span>see all {photos.length} images</span>
            <SketchArrow className="size-2.5 opacity-80" />
          </Link>
        </div>
      )}

      <PhotoLightbox
        photos={photos}
        activeIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onIndexChange={setActivePhotoIndex}
      />
    </div>
  );
}