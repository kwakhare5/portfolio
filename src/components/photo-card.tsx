import Image from "next/image";
import type { PhotoItem } from "@/data/resume";
import { META } from "@/lib/typography";

interface PhotoCardProps {
  readonly photo: PhotoItem;
  readonly index: number;
  readonly onClick: () => void;
  readonly sizes: string;
}

export function PhotoCard({ photo, index, onClick, sizes }: PhotoCardProps) {
  return (
    <figure
      onClick={onClick}
      className="group m-0 cursor-zoom-in space-y-2 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={photo.url}
          alt={photo.caption || `Photo ${index + 1}`}
          fill
          sizes={sizes}
          quality={90}
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <p className={`min-w-0 ${META} group-hover:text-foreground transition-colors line-clamp-2`}>
        <span className="text-muted-foreground underline underline-offset-4 decoration-muted-foreground/40 group-hover:decoration-foreground transition-colors">
          {photo.caption}
        </span>
      </p>
    </figure>
  );
}
