import { existsSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import path from "node:path";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const root = path.resolve("out");
writeFileSync(path.join(root, ".nojekyll"), "");
if (existsSync("CNAME")) copyFileSync("CNAME", path.join(root, "CNAME"));
for (const page of ["index.html", "guide/index.html"]) {
  const html = readFileSync(path.join(root, page), "utf8");
  if (!html.includes("RAMSMP")) throw new Error(`Missing pre-rendered content in ${page}`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"<>]*)"/g)) {
    const url = match[1].split(/[?#]/)[0];
    if (url.startsWith("//")) continue;
    if (base && !url.startsWith(`${base}/`)) throw new Error(`URL missing base path: ${url}`);
    const local = decodeURIComponent(url.slice(base.length));
    const file = path.join(root, local.endsWith("/") ? `${local}index.html` : local);
    if (!existsSync(file)) throw new Error(`Broken exported URL in ${page}: ${url}`);
  }
}
console.log("Static export verified: homepage, guide, local links, images, CSS, and JavaScript.");
