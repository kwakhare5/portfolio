"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { PhotoItem } from "@/data/resume";
import { PhotoLightbox } from "@/components/artifacts/photo-lightbox";

export function ArtifactsGallery({ photos }: { photos: readonly PhotoItem[] }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
        {photos.map((photo, index) => (
          <figure
            key={photo.url}
            onClick={() => setActivePhotoIndex(index)}
            className="group m-0 cursor-zoom-in space-y-2 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-border bg-muted transition-[border-color,box-shadow] duration-200 ease-out group-hover:border-foreground group-hover:shadow-sm">
              <Image
                src={photo.url}
                alt={photo.caption.replace(/^\/\/\s*/, "") || `Photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                quality={92}
                className="object-cover transition-transform duration-250 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between text-muted-foreground font-mono text-xs">
              <p className="group-hover:text-foreground transition-colors line-clamp-2 leading-normal">
                {photo.caption}
              </p>
              <span className="text-xs">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
            </div>
          </figure>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <PhotoLightbox
        photos={photos}
        activeIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onIndexChange={setActivePhotoIndex}
      />
    </div>
  );
}