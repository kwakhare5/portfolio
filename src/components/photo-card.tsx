import Image from "next/image";
import type { PhotoItem } from "@/data/resume";
import { SketchFrame, SketchArrow } from "@/components/stationery-icons";

interface PhotoCardProps {
  readonly photo: PhotoItem;
  readonly index: number;
  readonly onClick: () => void;
  readonly sizes: string;
  readonly stamp?: string;
}

export function PhotoCard({ photo, index, onClick, sizes, stamp }: PhotoCardProps) {
  return (
    <figure
      onClick={onClick}
      className="group m-0 cursor-zoom-in space-y-2 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-border bg-muted transition-[border-color,box-shadow] duration-200 ease-out group-hover:border-foreground group-hover:shadow-sm">
        <Image
          src={photo.url}
          alt={photo.caption || `Photo ${index + 1}`}
          fill
          sizes={sizes}
          quality={90}
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div
        className={
          stamp
            ? "flex items-start justify-between gap-3 text-muted-foreground font-mono text-xs"
            : "text-muted-foreground font-mono text-xs"
        }
      >
        <p className="min-w-0 group-hover:text-foreground transition-colors line-clamp-2 leading-normal flex items-center gap-1">
          <SketchFrame className="size-3 shrink-0 text-muted-foreground/50" />
          <span>{photo.caption}</span>
          <SketchArrow className="size-2.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
        </p>
        {stamp && <span className="shrink-0 ink-stamp">{stamp}</span>}
      </div>
    </figure>
  );
}
