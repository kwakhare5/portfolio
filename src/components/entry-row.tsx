import Link from "next/link";
import type { ReactNode } from "react";
import { SketchArrow, SketchGlobe } from "@/components/stationery-icons";
import { ACTION_TEXT, LINK_ACTION } from "@/lib/styles";
import { LABEL, ROW_TEXT, ROW_TITLE } from "@/lib/typography";

interface EntryRowProps {
  readonly icon?: ReactNode;
  readonly title: string;
  readonly href?: string;
  readonly liveUrl?: string;
  readonly description?: ReactNode;
  readonly showView?: boolean;
}

export function EntryRow({
  icon,
  title,
  href,
  liveUrl,
  description,
  showView = false,
}: EntryRowProps) {
  const interactive = Boolean(href);
  const hasActions = Boolean(liveUrl) || showView;

  return (
    <div
      className={`group relative flex flex-col gap-1.5 py-3 rounded-md px-3 -mx-3 border-b border-border last:border-b-0 ${
        interactive ? "hover:bg-muted/40 transition-colors" : ""
      }`}
    >
      {href && (
        <Link
          href={href}
          aria-label={`View ${title}`}
          className="absolute inset-0 z-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        />
      )}

      <div className="relative z-10 pointer-events-none flex flex-wrap items-baseline gap-x-2 gap-y-1">
        {icon && <span className="shrink-0 self-center">{icon}</span>}
        <h3 className={ROW_TITLE}>{title}</h3>

        {hasActions && (
          <span className={`${LABEL} ml-auto inline-flex items-center gap-3`}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`pointer-events-auto ${LINK_ACTION}`}
              >
                <SketchGlobe className="size-3.5" />
                <span>live</span>
              </a>
            )}
            {showView && (
              <span aria-hidden="true" className={ACTION_TEXT}>
                <span>view</span>
                <SketchArrow className="size-2.5" />
              </span>
            )}
          </span>
        )}
      </div>

      {description !== undefined && (
        <p
          className={`relative z-10 pointer-events-none ${ROW_TEXT} ${
            interactive ? "transition-colors group-hover:text-foreground" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
