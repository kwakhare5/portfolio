import React from "react";

/**
 * Hand-drawn monoline sketch arrow for links (live, view, github).
 */
export function SketchArrow({ className = "size-3" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 9.5C4.5 7.5 7 4.5 9.5 2.5" />
      <path d="M5.5 2.5C7.2 2.3 8.7 2.3 9.5 2.5C9.7 3.3 9.7 4.8 9.5 6.5" />
    </svg>
  );
}

/**
 * Hand-drawn shopping tote bag icon for Grocer.
 */
export function SketchTote({ className = "size-4" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 5.5L4 13.5C4.1 14 4.5 14.5 5 14.5H11C11.5 14.5 11.9 14 12 13.5L13 5.5H3Z" />
      <path d="M6 5.5V3.8C6 2.8 6.9 2 8 2C9.1 2 10 2.8 10 3.8V5.5" />
      <path d="M7 8.5H9" />
    </svg>
  );
}

/**
 * Hand-drawn isometric storage box for Outpost.
 */
export function SketchBox({ className = "size-4" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 5.5L8 2.5L13.5 5.5L8 8.5L2.5 5.5Z" />
      <path d="M2.5 5.5V11L8 14V8.5" />
      <path d="M13.5 5.5V11L8 14" />
      <path d="M6 4.5L10 6.5" />
    </svg>
  );
}

/**
 * Hand-drawn branch with terminal prompt cursor for Git for Prompts.
 */
export function SketchPromptBranch({ className = "size-4" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="1.5" />
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="4" cy="12" r="1.5" />
      <path d="M4 5.5V10.5" />
      <path d="M4 8.5C6.5 8.5 9.5 8 12 6.5" />
    </svg>
  );
}

/**
 * Hand-drawn capsule / soundwave pill for Beam.
 */
export function SketchSoundPill({ className = "size-4" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4.5" width="12" height="7" rx="3.5" />
      <path d="M5.5 7V9" />
      <path d="M8 6V10" />
      <path d="M10.5 7V9" />
    </svg>
  );
}

/**
 * Subtle hand-drawn marker highlighter stroke placed under text.
 */
export function SketchHighlighter({
  children,
  color = "var(--notion-yellow-bg)",
}: {
  readonly children: React.ReactNode;
  readonly color?: string;
}) {
  return (
    <span className="relative inline-block z-0">
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-0.5 left-0 w-full h-[0.45em] pointer-events-none -z-10"
        aria-hidden="true"
      >
        <path
          d="M1 8C20 6.2 55 5.5 99 7C85 8.5 35 9.8 3 10.5"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}
