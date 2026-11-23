const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const UNDERLINE =
  "underline underline-offset-4 decoration-muted-foreground/40 transition-colors";
const TAP = "relative inline-flex items-center after:absolute after:-inset-2 after:content-[''] touch-manipulation";

const LINK = `${UNDERLINE} ${FOCUS} text-foreground hover:decoration-foreground`;

export const LINK_SOCIAL = `${LINK} font-semibold inline-flex items-center gap-1`;

export const LINK_MUTED = `${UNDERLINE} ${FOCUS} ${TAP} text-muted-foreground hover:text-foreground hover:decoration-foreground`;

export const LINK_ACTION = `${UNDERLINE} ${FOCUS} ${TAP} gap-0.5 text-[var(--notion-blue-text)] hover:decoration-current`;

export const ACTION_TEXT = `${UNDERLINE} inline-flex items-center gap-0.5 text-[var(--notion-blue-text)]`;
