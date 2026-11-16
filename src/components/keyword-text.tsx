import { splitKeywords } from "@/lib/utils";

export function KeywordText({ text }: { readonly text: string }) {
  return (
    <>
      {splitKeywords(text).map((segment, idx) =>
        segment.bold ? (
          <strong key={idx} className="font-semibold text-foreground">
            {segment.text}
          </strong>
        ) : (
          segment.text
        ),
      )}
    </>
  );
}