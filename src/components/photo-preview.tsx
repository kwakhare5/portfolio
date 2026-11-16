"use client";

import { useState } from "react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import type { PhotoItem } from "@/data/resume";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { PhotoCard } from "@/components/photo-card";
import { SketchCamera, SketchArrow } from "@/components/stationery-icons";

const PHOTOS: readonly PhotoItem[] = DATA.photos;
const PREVIEW_COUNT = 4;

export function PhotoPreview() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const previewPhotos = PHOTOS.slice(0, PREVIEW_COUNT);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* -- 1 Single Line Grid (4 on desktop, 2x2 on mobile) -- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full">
        {previewPhotos.map((photo, index) => (
          <PhotoCard
            key={photo.url}
            photo={photo}
            index={index}
            onClick={() => setActivePhotoIndex(index)}
            sizes="(max-width: 640px) 50vw, 25vw"
          />
        ))}
      </div>

      {/* -- See All Action Trigger -- */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-0.5">
        <span>showing {PREVIEW_COUNT} of {PHOTOS.length} captures</span>
        <Link
          href="/artifacts"
          className="inline-flex items-center gap-1 font-medium text-[var(--notion-blue-text)] hover:underline underline-offset-4 transition-colors"
        >
          <SketchCamera className="size-3.5" />
          <span>see all {PHOTOS.length} images</span>
          <SketchArrow className="size-2.5 opacity-80" />
        </Link>
      </div>

      {/* -- Fullscreen Lightbox Modal across all captures -- */}
      <PhotoLightbox
        photos={PHOTOS}
        activeIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onIndexChange={setActivePhotoIndex}
      />
    </div>
  );
}
