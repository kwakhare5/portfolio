"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  url: string;
  caption: string;
}

const PHOTOS: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    caption: "// building things"
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    caption: "// caffeine & code"
  },
  {
    url: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800",
    caption: "// daily driver"
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
    caption: "// hacking away"
  }
];

export function PolaroidGrid() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => 
        prev === 0 ? PHOTOS.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => 
        prev === PHOTOS.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Polaroid Gallery Grid */}
      <div className="grid grid-cols-2 justify-items-center gap-3 sm:gap-6 py-4 max-w-[340px] sm:max-w-none mx-auto sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:items-center">
        {PHOTOS.map((photo, index) => {
          // Alternating tilt angles
          const tilts = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];
          const tilt = tilts[index % tilts.length];

          return (
            <div
              key={photo.url}
              onClick={() => setActivePhotoIndex(index)}
              className={`bg-[#fbfaf7] p-2.5 pb-4 sm:p-3.5 sm:pb-6 shadow-[0_8px_24px_rgba(0,0,0,0.22)] rounded-sm border border-zinc-200/80 flex flex-col gap-2.5 sm:gap-3 w-[140px] sm:w-[160px] cursor-zoom-in transition-all duration-300 ${tilt} hover:rotate-0 hover:-translate-y-3 hover:scale-[1.07] hover:shadow-[0_16px_36px_rgba(0,0,0,0.32)] z-10 hover:z-20`}
            >
              {/* Polaroid Photo Aspect Square */}
              <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden border border-zinc-200/60">
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 140px, 160px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Monospace Caption */}
              <span className="text-[9px] sm:text-[10px] font-mono text-zinc-600 font-semibold text-center select-none truncate leading-none pt-0.5">
                {photo.caption}
              </span>
            </div>
          );
        })}
      </div>

      {/* Instruction Footer */}
      <div className="text-center text-[10px] sm:text-xs text-muted-foreground/60 font-mono mt-4">
        click any snapshot to view fullscreen • esc to close
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Lightbox Container: Inspection Style */}
          <div 
            className="relative flex flex-col items-center gap-6 max-w-sm sm:max-w-md w-full px-4 animate-in zoom-in-95 duration-300 ease-out"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking card
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-[-45px] right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="size-6" />
            </button>

            {/* Large Polaroid Card */}
            <div 
              key={activePhotoIndex}
              className="bg-[#fbfaf7] p-5 pb-8 shadow-[0_24px_50px_rgba(0,0,0,0.65)] rounded-sm border border-zinc-200/80 flex flex-col gap-4 w-full aspect-[3.8/4.5] select-none animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-6 duration-300 ease-out"
            >
              {/* Photo Inset */}
              <div className="relative w-full aspect-square bg-zinc-100 overflow-hidden border border-zinc-200/60">
                <Image
                  src={PHOTOS[activePhotoIndex].url}
                  alt={PHOTOS[activePhotoIndex].caption}
                  fill
                  sizes="(max-w-768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Bottom Chin Caption */}
              <span className="text-sm sm:text-base font-mono text-zinc-700 font-bold text-center tracking-wide mt-1">
                {PHOTOS[activePhotoIndex].caption}
              </span>
            </div>

            {/* Navigation Indicators */}
            <div className="flex items-center gap-5 text-xs font-mono text-white/50 tracking-wider">
              <button 
                onClick={handlePrev} 
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                data-cursor-type="nav"
                data-nav-label="Prev Card"
              >
                <ChevronLeft className="size-3.5" />
                <span>prev</span>
              </button>
              <span className="text-white/40">{activePhotoIndex + 1} / {PHOTOS.length}</span>
              <button 
                onClick={handleNext} 
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                data-cursor-type="nav"
                data-nav-label="Next Card"
              >
                <span>next</span>
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
