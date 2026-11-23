import Image from "next/image";
import { splitKeywords } from "@/lib/utils";

const ICON_CLASS = "mr-1 inline-block h-[0.875em] w-auto align-[-0.12em]";

export function KeywordText({ text }: { readonly text: string }) {
  return (
    <>
      {splitKeywords(text).map((segment, idx) => {
        const content = segment.icon ? (
          <>
            <Image
              src={segment.icon}
              alt=""
              width={16}
              height={16}
              unoptimized
              className={ICON_CLASS}
            />
            {segment.text}
          </>
        ) : (
          segment.text
        );

        if (segment.href) {
          return (
            <a
              key={idx}
              href={segment.href}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap font-semibold text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors"
            >
              {content}
            </a>
          );
        }

        if (segment.bold) {
          return (
            <strong key={idx} className="font-semibold text-foreground whitespace-nowrap">
              {content}
            </strong>
          );
        }

        return segment.icon ? (
          <span key={idx} className="whitespace-nowrap">
            {content}
          </span>
        ) : (
          segment.text
        );
      })}
    </>
  );
}
