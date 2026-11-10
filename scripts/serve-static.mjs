// Local preview only. Production hosting serves out/ directly; no Node runtime needed.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json", ".txt": "text/plain", ".md": "text/plain; charset=utf-8", ".woff2": "font/woff2" };
createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", "http://localhost");
    if (base && !url.pathname.startsWith(`${base}/`)) { response.writeHead(404).end(); return; }
    let file = path.resolve(root, `.${decodeURIComponent(url.pathname.slice(base.length))}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) { response.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) {
      if (!url.pathname.endsWith("/")) { response.writeHead(301, { Location: `${url.pathname}/${url.search}` }).end(); return; }
      file = path.join(file, "index.html");
    }
    response.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    response.end(await readFile(file));
  } catch { response.writeHead(404).end("Not found"); }
}).listen(5173, "127.0.0.1", () => console.log(`Static preview: http://127.0.0.1:5173${base}/`));
