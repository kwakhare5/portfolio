const KEYWORDS = [
  "swiggy instamart",
  "full-stack developer",
  "builder club",
  "ai engineer",
  "swiggy",
  "whatsapp",
  "mcp",
];

const KEYWORD_PATTERN = new RegExp(`\\b(${KEYWORDS.join("|")})\\b`, "gi");

export interface KeywordSegment {
  readonly text: string;
  readonly bold: boolean;
}

export function splitKeywords(text: string): KeywordSegment[] {
  const segments: KeywordSegment[] = [];
  let last = 0;
  for (const match of text.matchAll(KEYWORD_PATTERN)) {
    const index = match.index ?? 0;
    if (index > last) segments.push({ text: text.slice(last, index), bold: false });
    segments.push({ text: match[0], bold: true });
    last = index + match[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last), bold: false });
  return segments;
}

export function getComputedLevel(count: number): number {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 9) return 2;
  if (count <= 19) return 3;
  return 4;
}
