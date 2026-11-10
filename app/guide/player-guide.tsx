"use client";

import { Fragment, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, BookOpen, Search, X } from "lucide-react";
import sections from "./sections.json";

// Render the limited Markdown used in the supplied guide as React nodes.
// Raw HTML is never evaluated; commands and example names remain literal text.
function inline(text: string): ReactNode[] {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\(https:\/\/[^)]+\))/g).map((part, i) => {
    if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    if (link) return <a key={i} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("```")) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i++;
      blocks.push(<pre key={i}><code>{code.join("\n")}</code></pre>);
    } else if (line.startsWith("### ")) {
      blocks.push(<h3 key={i}>{inline(line.slice(4))}</h3>); i++;
    } else if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i++].split("|").slice(1, -1).map(cell => cell.trim());
        if (!cells.every(cell => /^:?-+:?$/.test(cell))) rows.push(cells);
      }
      blocks.push(<div className="guide-table" key={i} tabIndex={0} role="region" aria-label="Command reference table"><table><thead><tr>{rows[0].map((cell, j) => <th key={j} scope="col">{inline(cell)}</th>)}</tr></thead><tbody>{rows.slice(1).map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>);
    } else if (/^(\d+\. |- )/.test(line)) {
      const ordered = /^\d+\./.test(line);
      const items: ReactNode[] = [];
      const pattern = ordered ? /^\d+\. / : /^- /;
      while (i < lines.length && pattern.test(lines[i])) {
        items.push(<li key={i}>{inline(lines[i++].replace(pattern, ""))}</li>);
      }
      blocks.push(ordered ? <ol key={i}>{items}</ol> : <ul key={i}>{items}</ul>);
    } else {
      const paragraph = [lines[i++]];
      while (i < lines.length && lines[i].trim() && !/^(### |\||```|\d+\. |- )/.test(lines[i])) paragraph.push(lines[i++]);
      blocks.push(<p key={i}>{inline(paragraph.join(" "))}</p>);
    }
  }
  return <>{blocks}</>;
}

export default function PlayerGuide() {
  const [query, setQuery] = useState("");
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = sections.filter(section => terms.every(term => `${section.title} ${section.body}`.toLowerCase().includes(term)));
  return <>
    <a className="skip" href="#guide-content">Skip to guide content</a>
    <header className="guide-header"><a className="brand" href="/"><img src="/assets/logo.png" alt=""/>RAM<span>SMP</span></a><a className="text-link" href="/#player-guide"><ArrowLeft size={16}/>Back to the server</a><a className="button small" href="/#join">Join RAMSMP <ArrowUpRight size={16}/></a></header>
    <main className="guide-page">
      <div className="guide-title"><p className="eyebrow"><BookOpen size={15}/> YOUR RAMSMP FIELD GUIDE</p><h1>Less guessing.<br/><em>More playing.</em></h1><p>Find a place to build, protect your base, and team up with friends.<br/>Most everyday features are available through <code>/menu</code>.</p><a className="text-link" href="/RAMSMP-PLAYER-GUIDE.md" download>Download the full guide (.md) <ArrowUpRight size={15}/></a></div>
      <div className="guide-search"><Search size={20}/><label className="sr-only" htmlFor="guide-search">Search the player guide</label><input id="guide-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search commands or topics: homes, trust, explosions…"/>{query && <button onClick={() => setQuery("")} aria-label="Clear search"><X size={18}/></button>}</div>
      <div className="guide-layout"><aside className="guide-sidebar"><p className="eyebrow">IN THIS GUIDE</p><nav aria-label="Guide chapters">{matches.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav><p role="status">{matches.length} of {sections.length} topics</p><a className="text-link" href="https://discord.gg/QnVP7y9dRD" target="_blank" rel="noreferrer">Need help? Ask in Discord <ArrowUpRight size={14}/></a></aside>
        <div id="guide-content" className="guide-articles">{matches.length ? matches.map(section => <article className="guide-article rainbow-panel" id={section.id} key={section.id}><h2>{section.title}</h2><Markdown text={section.body}/></article>) : <div className="guide-empty"><h2>No matching topics.</h2><p>Try a command such as /p claim, or a shorter term like homes or trust.</p><button className="button" onClick={() => setQuery("")}>Show all topics</button></div>}</div>
      </div>
    </main><footer><a href="/">← Back to RAMSMP</a><p>Player instructions from the RAMSMP Player Guide.</p><a href="#">Back to top ↑</a></footer>
  </>;
}
