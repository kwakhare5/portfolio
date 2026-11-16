"use client";

import { useState } from "react";
import type { PhotoItem } from "@/data/resume";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { PhotoCard } from "@/components/photo-card";

export function ArtifactsGallery({ photos }: { photos: readonly PhotoItem[] }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.url}
            photo={photo}
            index={index}
            onClick={() => setActivePhotoIndex(index)}
            sizes="(max-width: 640px) 50vw, 33vw"
            stamp={index + 1 < 10 ? `0${index + 1}` : String(index + 1)}
          />
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