"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import type { PhotoItem } from "@/data/resume";
import {
  SketchClose,
  SketchChevronLeft,
  SketchChevronRight,
} from "@/components/stationery-icons";
import { META, MICRO } from "@/lib/typography";

interface PhotoLightboxProps {
  readonly photos: readonly PhotoItem[];
  readonly activeIndex: number | null;
  readonly onClose: () => void;
  readonly onIndexChange: (index: number) => void;
}

export function PhotoLightbox({
  photos,
  activeIndex,
  onClose,
  onIndexChange,
}: PhotoLightboxProps) {
  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    onIndexChange(activeIndex === 0 ? photos.length - 1 : activeIndex - 1);
  }, [activeIndex, photos.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    onIndexChange(activeIndex === photos.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, photos.length, onIndexChange]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose, handlePrev, handleNext]);

  useEffect(() => {
    if (activeIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex]);

  if (activeIndex === null) return null;

  const currentPhoto = photos[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photo preview"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background p-3 sm:p-8 cursor-zoom-out"
    >
      {/* Top Bar: Counter & Close */}
      <div className="absolute top-4 sm:top-6 pt-[env(safe-area-inset-top)] inset-x-4 sm:inset-x-8 flex items-center justify-between z-50">
        <span className={`${MICRO} select-none`}>
          {activeIndex + 1} / {photos.length}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="size-9 rounded-full bg-muted border border-border flex items-center justify-center text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-[transform,background-color] duration-150 ease-out cursor-pointer active:scale-[0.96]"
          aria-label="Close preview"
        >
          <SketchClose className="size-4" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 sm:left-6 z-50 size-10 rounded-full bg-muted border border-border flex items-center justify-center text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-[transform,background-color] duration-150 ease-out cursor-pointer active:scale-[0.96]"
        aria-label="Previous photo"
      >
        <SketchChevronLeft className="size-4" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 sm:right-6 z-50 size-10 rounded-full bg-muted border border-border flex items-center justify-center text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-[transform,background-color] duration-150 ease-out cursor-pointer active:scale-[0.96]"
        aria-label="Next photo"
      >
        <SketchChevronRight className="size-4" />
      </button>

      {/* Active Image Container */}
      <div
        className="relative max-h-[90dvh] max-w-[95vw] sm:max-w-[90vw] flex flex-col items-center gap-3 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75dvh] sm:max-h-[82dvh] max-w-[92vw] sm:max-w-[85vw] overflow-hidden">
          <Image
            src={currentPhoto.url}
            alt={currentPhoto.caption || "Photo"}
            width={1500}
            height={2000}
            unoptimized
            priority
            className="h-auto max-h-[75dvh] sm:max-h-[80dvh] w-auto max-w-[92vw] sm:max-w-[85vw] object-contain"
          />
        </div>
        {currentPhoto.caption && (
          <p className={`text-center ${META}`}>
            {currentPhoto.caption}
          </p>
        )}
      </div>
    </div>
  );
}
