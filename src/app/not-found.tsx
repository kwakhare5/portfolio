import Link from "next/link";
import type { Metadata } from "next";
import { SketchBackArrow } from "@/components/stationery-icons";
import { LINK_ACTION } from "@/lib/styles";
import { BODY, ROW_TITLE, TITLE } from "@/lib/typography";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4 select-none">
      <div className="flex flex-col items-center max-w-md gap-3">
        <h1 className={TITLE}>404</h1>

        <h2 className={ROW_TITLE}>Page not found</h2>

        <p className={`max-w-sm ${BODY}`}>
          This page does not exist or has moved.
        </p>

        <div className="pt-2">
          <Link href="/" className={LINK_ACTION}>
            <SketchBackArrow className="size-3.5" />
            <span>return home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
