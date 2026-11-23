import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { SketchBackArrow } from "@/components/stationery-icons";
import { LINK_MUTED } from "@/lib/styles";
import { LABEL } from "@/lib/typography";

export function PageBar({ href, label }: { readonly href: string; readonly label: string }) {
  return (
    <div className={`flex items-center justify-between border-b border-border pb-3 ${LABEL}`}>
      <Link href={href} className={`${LINK_MUTED} gap-1.5`}>
        <SketchBackArrow className="size-3.5" />
        <span>{label}</span>
      </Link>
      <ModeToggle />
    </div>
  );
}
