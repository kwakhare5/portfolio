"use client";

import { useState, useRef, useEffect, type ComponentProps } from "react";
import { Copy, Check } from "lucide-react";
import { codeToHtml, type BundledLanguage } from "shiki/bundle/web";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre">;

function extractLanguage(className?: string): string {
  if (!className) return "plaintext";
  const match = className.match(/language-([a-z0-9-]+)/i);
  return match ? match[1] : "plaintext";
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [{ html, className, title }, setRenderState] = useState<{
    html: string;
    className: string;
    title: string | null;
  }>({ html: "", className: "", title: null });
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let active = true;
    const pre = preRef.current;
    const codeEl = pre?.querySelector("code");
    if (!pre || !codeEl) return;

    const codeText = codeEl.textContent || "";
    const lang = extractLanguage(codeEl.className);
    const nextTitle = codeEl.getAttribute("data-title");
    const nextClassName = codeEl.className || "";

    void codeToHtml(codeText, {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      lang: (lang || "plaintext") as BundledLanguage,
    })
      .then((highlightedHtml) => {
        if (!active) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(highlightedHtml, "text/html");
        setRenderState({
          html: doc.querySelector("code")?.innerHTML ?? "",
          className: nextClassName,
          title: nextTitle,
        });
      })
      .catch((error) => {
        console.error("Failed to highlight code:", error);
        if (!active) return;
        setRenderState({ html: "", className: nextClassName, title: nextTitle });
      });

    return () => {
      active = false;
    };
  }, [children]);

  const handleCopy = async () => {
    const codeEl = preRef.current?.querySelector("code");
    const code = codeEl?.textContent || preRef.current?.textContent || "";
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="group relative rounded-xl overflow-hidden border border-border">
      <pre
        ref={preRef}
        {...props}
        className={cn("p-0! m-0! overflow-x-auto", props.className)}
      >
        {title && (
          <div className="p-3 text-xs font-medium border-b border-border rounded-t-xl bg-muted/50 text-foreground">
            {title}
          </div>
        )}

        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "absolute size-8 text-primary cursor-pointer right-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity rounded-md border border-border bg-background/80 hover:bg-muted flex items-center justify-center shadow-none",
            title ? "top-13" : "top-3"
          )}
          aria-label="Copy code"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </button>
        {html && (
          <div className="p-3">
            <code
              className={`shiki ${className}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}

        {!html && <div className="p-4">{children}</div>}
      </pre>
    </div>
  );
}
