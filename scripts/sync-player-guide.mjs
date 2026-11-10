import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Keep the downloadable original and rendered website guide in sync.
const source = readFileSync(new URL("../public/RAMSMP-PLAYER-GUIDE.md", import.meta.url), "utf8").replace(/\r\n/g, "\n");
const parts = source.split(/^## /m);
const sections = parts.slice(1).map(part => {
  const newline = part.indexOf("\n");
  const title = part.slice(0, newline).trim();
  return {
    id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    title,
    body: part.slice(newline + 1).trim(),
  };
});
if (!sections.length || new Set(sections.map(s => s.id)).size !== sections.length) throw new Error("Guide must have unique section headings.");
writeFileSync(fileURLToPath(new URL("../app/guide/sections.json", import.meta.url)), JSON.stringify(sections, null, 2) + "\n");
console.log(`Synced ${sections.length} player guide sections.`);
