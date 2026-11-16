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
 * Subtle hand-drawn stationery underline placed right beneath text.
 */
export function SketchHighlighter({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <span className="relative inline-block">
      <span>{children}</span>
      <svg
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-1 left-0 w-full h-[6px] pointer-events-none text-[var(--notion-amber-text)] dark:text-[var(--notion-yellow-text)]"
        aria-hidden="true"
      >
        <path
          d="M1 5.5C25 2.5 65 2.5 99 5C70 6.5 30 6.5 5 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/**
 * Monoline X (Twitter) icon.
 */
export function SketchX({ className = "size-3.5" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M9.75 6.94 14.55 1.5h-1.14L9.24 6.24 5.92 1.5H2.07l5.04 7.15L2.07 14.5h1.14l4.4-4.97 3.51 4.97h3.85L9.75 6.94Zm-1.56 1.76-.51-.72L3.62 2.37h1.75l3.28 4.62.51.72 4.26 6.01h-1.75l-3.48-4.9-.5-.7Z" />
    </svg>
  );
}

/**
 * Monoline GitHub icon.
 */
export function SketchGithub({ className = "size-3.5" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5C4.41 1.5 1.5 4.42 1.5 8.03c0 2.89 1.87 5.34 4.46 6.2.33.06.45-.14.45-.31v-1.1c-1.81.39-2.19-.87-2.19-.87-.3-.75-.72-.96-.72-.96-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58 1 1.52.71 1.89.54.06-.42.23-.71.41-.87-1.44-.16-2.96-.72-2.96-3.21 0-.71.25-1.29.67-1.74-.07-.16-.29-.82.06-1.71 0 0 .55-.17 1.79.67.52-.15 1.08-.22 1.63-.22s1.11.07 1.63.22c1.24-.85 1.79-.67 1.79-.67.35.89.13 1.55.06 1.71.42.45.67 1.03.67 1.74 0 2.5-1.52 3.05-2.97 3.21.23.2.44.6.44 1.21v1.8c0 .18.12.38.45.31 2.59-.86 4.45-3.31 4.45-6.2C14.5 4.42 11.59 1.5 8 1.5Z"
      />
    </svg>
  );
}

/**
 * Monoline LinkedIn icon.
 */
export function SketchLinkedin({ className = "size-3.5" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.75 2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM2.5 6h2.5v7.5H2.5V6ZM8.75 6H6.5v7.5h2.25v-3.92c0-1.04.2-2.04 1.48-2.04 1.27 0 1.27 1.18 1.27 2.11v3.85H13.75V9.45c0-2.02-.43-3.57-2.8-3.57-1.14 0-1.9.63-2.2 1.2h-.03V6Z" />
    </svg>
  );
}

/**
 * Monoline Mail / Email envelope icon.
 */
export function SketchMail({ className = "size-3.5" }: { readonly className?: string }) {
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
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="M2.5 4.5L8 8.5L13.5 4.5" />
    </svg>
  );
}

/**
 * Monoline code brackets icon for Languages & Frameworks.
 */
export function SketchCode({ className = "size-3.5" }: { readonly className?: string }) {
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
      <path d="M5.5 3L2.5 8L5.5 13" />
      <path d="M10.5 3L13.5 8L10.5 13" />
      <path d="M9 3L7 13" />
    </svg>
  );
}

/**
 * Monoline sparkle / star for AI, Agents & Workflows.
 */
export function SketchSparkle({ className = "size-3.5" }: { readonly className?: string }) {
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
      <path d="M8 2.5C8 5.5 10.5 8 13.5 8C10.5 8 8 10.5 8 13.5C8 10.5 5.5 8 2.5 8C5.5 8 8 5.5 8 2.5Z" />
    </svg>
  );
}

/**
 * Monoline gear / tool for Infrastructure & Dev Tools.
 */
export function SketchGear({ className = "size-3.5" }: { readonly className?: string }) {
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
      <circle cx="8" cy="8" r="2.4" />
      <path d="M8 2.5V4.5M8 11.5V13.5M2.5 8H4.5M11.5 8H13.5M4.1 4.1L5.5 5.5M10.5 10.5L11.9 11.9M4.1 11.9L5.5 10.5M10.5 5.5L11.9 4.1" />
    </svg>
  );
}

/**
 * Monoline camera icon for Artifacts & Photography.
 */
export function SketchCamera({ className = "size-4" }: { readonly className?: string }) {
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
      <path d="M2.5 5.5H5L6 3.5H10L11 5.5H13.5C14.05 5.5 14.5 5.95 14.5 6.5V12.5C14.5 13.05 14.05 13.5 13.5 13.5H2.5C1.95 13.5 1.5 13.05 1.5 12.5V6.5C1.5 5.95 1.95 5.5 2.5 5.5Z" />
      <circle cx="8" cy="9.5" r="2.2" />
    </svg>
  );
}

/**
 * Monoline photo frame icon for photo captions.
 */
export function SketchFrame({ className = "size-3" }: { readonly className?: string }) {
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
      <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" />
      <path d="M4.5 11H11.5" />
    </svg>
  );
}

/**
 * Monoline hand-drawn checkmark for highlights.
 */
export function SketchCheck({ className = "size-3.5" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
    </svg>
  );
}

/**
 * Minimal monoline clock icon for local time stamp.
 */
export function SketchClock({ className = "size-3" }: { readonly className?: string }) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.5V8L10.5 9.5" />
    </svg>
  );
}

/**
 * Hand-drawn monoline sketch arrow for back navigation.
 */
export function SketchBackArrow({ className = "size-3.5" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 8H2.5" />
      <path d="M6.5 4L2.5 8L6.5 12" />
    </svg>
  );
}

/**
 * Hand-drawn monoline close mark for dismissing overlays.
 */
export function SketchClose({ className = "size-4" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4L12 12" />
      <path d="M12 4L4 12" />
    </svg>
  );
}

/**
 * Hand-drawn monoline chevron pointing left.
 */
export function SketchChevronLeft({ className = "size-4" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 3.5L5.5 8L10 12.5" />
    </svg>
  );
}

/**
 * Hand-drawn monoline chevron pointing right.
 */
export function SketchChevronRight({ className = "size-4" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3.5L10.5 8L6 12.5" />
    </svg>
  );
}

/**
 * Hand-drawn monoline sun for light mode.
 */
export function SketchSun({ className = "size-4" }: { readonly className?: string }) {
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
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5V3" />
      <path d="M8 13V14.5" />
      <path d="M1.5 8H3" />
      <path d="M13 8H14.5" />
      <path d="M3.4 3.4L4.5 4.5" />
      <path d="M11.5 11.5L12.6 12.6" />
      <path d="M12.6 3.4L11.5 4.5" />
      <path d="M4.5 11.5L3.4 12.6" />
    </svg>
  );
}

/**
 * Hand-drawn monoline crescent moon for dark mode.
 */
export function SketchMoon({ className = "size-4" }: { readonly className?: string }) {
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
      <path d="M13.5 10.2A5.8 5.8 0 0 1 5.8 2.5a5.8 5.8 0 1 0 7.7 7.7Z" />
    </svg>
  );
}
