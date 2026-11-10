// Native image/link URLs also need the repository prefix on GitHub Pages.
export function sitePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
