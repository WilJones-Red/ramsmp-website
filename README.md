# RAMSMP website

A responsive Minecraft community website with joining information, a noticeboard, showcases, staff heads, FAQs, and a searchable player handbook. Built with React, TypeScript, and Vinext/Vite.

## Local development

Requires Node 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the Local URL printed by the dev server (normally http://127.0.0.1:5173).

```sh
npm run build
npx tsc --noEmit
```

The build produces a Cloudflare Worker and client assets in `dist`. `dist/client` alone is not a standalone static website. GitHub stores this source; pushing it does not publish a live website.

## Editing content

- `app/content.ts`: noticeboard posts.
- `app/page.tsx`: joining information, homepage FAQ, and showcases.
- `app/community.tsx`: the main staff roster and homepage player-guide introduction.
- `public/RAMSMP-PLAYER-GUIDE.md`: the authoritative player guide. Edit this and run `npm run guide:sync` to refresh `app/guide/sections.json`. Production builds sync it automatically.
- `app/guide/player-guide.tsx`: search and the Markdown renderer. Supports the guide's paragraphs, lists, level-three headings, tables, code blocks, inline code, bold text, and HTTPS links. It never executes raw HTML.
- `app/globals.css`: responsive layout and rainbow hover/focus frames.
- `public/assets/`: logo, server screenshot, and staff head images.

Guide content comes from the supplied RAMSMP player document. Personal claims, team access, leader-delegated claiming permissions, and outsider trust remain distinct. Bedrock version 26.3 is supplied by the owner; the Java version is not yet specified.

## Staff images

The seven usernames were resolved through Mojang. Heads were rendered by [MCHeads](https://mc-heads.net/) using each current texture ID, then saved locally so visiting the page does not require the head service. Source UUIDs and texture IDs are in `public/assets/staff/profiles.json` (checked November 10, 2026). These are snapshots and do not automatically follow future skin changes.

## Scope

Updates and showcases are maintained in source. There is no CMS/admin dashboard, player-submission form, or live server-status integration. This repository contains website files only, not Minecraft plugins or server data. No live Minecraft connection testing is implied by website checks.

Sites hosting has not been configured; `.openai/hosting.json` has no project ID. Configure an appropriate hosting target separately when ready to publish.
