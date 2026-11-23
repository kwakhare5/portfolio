import type { ReactNode } from "react";
import { META, TITLE } from "@/lib/typography";

export function PageHeading({
  icon,
  title,
  meta,
}: {
  readonly icon?: ReactNode;
  readonly title: string;
  readonly meta?: string;
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {icon}
      <h1 className={TITLE}>{title}</h1>
      {meta && <span className={META}>{meta}</span>}
    </div>
  );
}
