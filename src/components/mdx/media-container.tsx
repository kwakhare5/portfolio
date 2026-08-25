import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaContainerProps {
  readonly src: string;
  readonly alt?: string;
  readonly type?: "image" | "video";
  readonly className?: string;
}

export function MediaContainer({
  src,
  alt = "Post media preview",
  type = "image",
  className,
}: MediaContainerProps) {
  return (
    <div
      className={cn(
        "relative w-full h-[300px] sm:h-[360px] rounded-xl overflow-hidden border border-border bg-muted/20 my-6 shadow-xs flex items-center justify-center",
        className
      )}
    >
      {type === "image" ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover object-center"
        />
      ) : (
        <video
          src={src}
          className="w-full h-full object-cover object-center"
          controls
          playsInline
        />
      )}
    </div>
  );
}
