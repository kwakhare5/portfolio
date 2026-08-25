"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PhotoItem } from "@/types/resume";

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
    if (activeIndex === null || photos.length === 0) return;
    onIndexChange(activeIndex === 0 ? photos.length - 1 : activeIndex - 1);
  }, [activeIndex, photos.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (activeIndex === null || photos.length === 0) return;
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

  if (activeIndex === null || !photos[activeIndex]) return null;

  const currentPhoto = photos[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photo preview"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-3 sm:p-8 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200"
    >
      {/* Top Bar: Counter & Close */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50">
        <span className="font-mono text-xs sm:text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted/80 border border-border/40 backdrop-blur-xs select-none">
          {activeIndex + 1} / {photos.length}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="size-9 rounded-full bg-muted/80 border border-border flex items-center justify-center text-foreground hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden transition-all cursor-pointer active:scale-95"
          aria-label="Close preview"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 sm:left-6 z-50 size-10 rounded-full bg-muted/80 border border-border flex items-center justify-center text-foreground hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden transition-all cursor-pointer active:scale-90"
        aria-label="Previous photo"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 sm:right-6 z-50 size-10 rounded-full bg-muted/80 border border-border flex items-center justify-center text-foreground hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden transition-all cursor-pointer active:scale-90"
        aria-label="Next photo"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Active Image Container */}
      <div
        className="relative max-h-[90vh] max-w-[95vw] sm:max-w-[90vw] flex flex-col items-center gap-3 animate-in zoom-in-95 duration-200 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] sm:max-h-[82vh] max-w-[92vw] sm:max-w-[85vw] overflow-hidden rounded border border-border shadow-2xl">
          <Image
            src={currentPhoto.url}
            alt={currentPhoto.caption.replace(/^\/\/\s*/, "") || "Photo"}
            width={1200}
            height={900}
            quality={95}
            priority
            className="h-auto max-h-[75vh] sm:max-h-[80vh] w-auto max-w-[92vw] sm:max-w-[85vw] object-contain"
          />
        </div>
        {currentPhoto.caption && (
          <p className="text-xs sm:text-sm font-mono text-muted-foreground tracking-wide text-center">
            {currentPhoto.caption}
          </p>
        )}
      </div>
    </div>
  );
}
