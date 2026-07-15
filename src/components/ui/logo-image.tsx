"use client";
import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function LogoImage({ src, alt, fillSpace = false, backgroundColor }: { src: string; alt: string; fillSpace?: boolean; backgroundColor?: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div
        className="border rounded-full shadow ring-2 ring-border bg-muted flex-none"
        style={{ width: 42, height: 42, minWidth: 42 }}
      />
    );
  }

  return (
    <div
      className={cn(
        "border rounded-full shadow ring-2 ring-border overflow-hidden bg-background flex items-center justify-center flex-none"
      )}
      style={{
        width: 42,
        height: 42,
        minWidth: 42,
        backgroundColor: backgroundColor
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={42}
        height={42}
        className={cn(
          "w-full h-full",
          fillSpace ? "object-cover p-0" : "object-contain p-1.5"
        )}
        onError={() => setImageError(true)}
      />
    </div>
  );
}



