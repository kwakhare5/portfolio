"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FlickeringGrid } from "@/components/animations/flickering-grid";

interface PhotoBannerProps {
  images: readonly string[];
}

export const PhotoBanner: React.FC<PhotoBannerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    if (images.length <= 1) {
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [images]);

  // Set target opacity: 85% (0.85) for light mode, 40% (0.4) for dark mode
  const targetOpacity = resolvedTheme === "dark" ? 0.4 : 0.85;

  // Prevent hydration flash/transition by starting at 0 until client theme is loaded
  const activeOpacity = mounted ? targetOpacity : 0;

  return (
    <div className="absolute inset-0 top-0 left-0 right-0 h-[160px] overflow-hidden z-0">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Banner ${index}`}
          fill
          priority
          loading="eager"
          className="object-cover transition-opacity duration-1000 ease-in-out pointer-events-none"
          style={{
            opacity: index === currentIndex ? activeOpacity : 0,
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            objectPosition: isMobile ? "center 50%" : "center 48%",
          }}
        />
      ))}
      <FlickeringGrid
        className="absolute inset-0 h-full w-full pointer-events-none"
        squareSize={2}
        gridGap={2}
        maxOpacity={mounted ? (resolvedTheme === "dark" ? 0.15 : 0.3) : 0.3}
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[100px] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />
    </div>
  );
};
