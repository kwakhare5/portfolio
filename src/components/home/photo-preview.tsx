"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import type { PhotoItem } from "@/types/resume";
import { PhotoLightbox } from "@/components/artifacts/photo-lightbox";

const PHOTOS: readonly PhotoItem[] = DATA.photos || [];
const PREVIEW_COUNT = 4;

export function PhotoPreview() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  if (!PHOTOS || PHOTOS.length === 0) return null;

  const previewPhotos = PHOTOS.slice(0, PREVIEW_COUNT);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* -- 1 Single Line Grid (4 on desktop, 2x2 on mobile) -- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full">
        {previewPhotos.map((photo, index) => (
          <figure
            key={photo.url}
            onClick={() => setActivePhotoIndex(index)}
            className="group m-0 cursor-zoom-in space-y-1.5 transition-transform duration-300 hover:-translate-y-1 active:scale-95"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-border/60 bg-muted transition-all duration-300 group-hover:border-foreground/40 group-hover:shadow-md">
              <Image
                src={photo.url}
                alt={photo.caption.replace(/^\/\/\s*/, "") || `Photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                quality={90}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground/70 group-hover:text-foreground transition-colors truncate leading-none">
              {photo.caption}
            </p>
          </figure>
        ))}
      </div>

      {/* -- See All Action Trigger -- */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground/70 pt-0.5">
        <span>showing 4 of {PHOTOS.length} captures</span>
        <Link
          href="/artifacts"
          className="editorial-link text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer active:scale-95 transition-colors"
        >
          see all {PHOTOS.length} images →
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
