import { LABEL, META } from "@/lib/typography";

export function SectionLabel({
  ink,
  title,
  meta,
}: {
  ink: string;
  title: string;
  meta?: string | number;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <h2 className={`flex items-baseline gap-2 ${LABEL} ${ink}`}>
        <span className="font-mono select-none" aria-hidden="true">
          #
        </span>
        <span>{title}</span>
      </h2>
      {meta !== undefined && (
        <span className={META}>{meta}</span>
      )}
    </div>
  );
}
