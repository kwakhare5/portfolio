"use client";

import { useState } from "react";
import Link from "next/link";
import type { PhotoItem } from "@/data/resume";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { PhotoCard } from "@/components/photo-card";
import { LINK_ACTION } from "@/lib/styles";
import { META } from "@/lib/typography";

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
          />
        ))}
      </div>

      {preview && (
        <div className={`${META} flex flex-wrap items-center justify-between gap-2 pt-0.5`}>
          <span>
            showing {PREVIEW_COUNT} of {photos.length} photos
          </span>
          <Link
            href="/artifacts"
            className={LINK_ACTION}
          >
            <span>see all {photos.length} photos</span>
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