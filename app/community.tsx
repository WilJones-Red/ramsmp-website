import { sitePath } from "../lib/site-path";
import { ArrowUpRight, BookOpen, Compass, House, ShieldCheck, Users } from "lucide-react";

export const staff = [
  "PrimoSlice", "randomperson1194", "Luigi282", "BigLeader857614",
  "Monopolizer500", "Rambion", "VannyJo", "notnixois",
];

export function StaffSection() {
  return <section id="staff" className="section staff-section">
    <div className="section-heading">
      <div><p className="eyebrow">THE PEOPLE BEHIND THE SERVER</p><h2>Meet the main staff.</h2></div>
      <p>A few familiar faces to look out for.</p>
    </div>
    <div className="staff-grid">
      {staff.map(name => <article className="staff-card rainbow-panel" key={name}>
        <div className="staff-head"><img src={sitePath(`/assets/staff/${name}.png`)} alt={`${name}'s Minecraft character head`} width={160} height={160} loading="lazy" /></div>
        <h3>{name}</h3><p>MAIN STAFF</p>
      </article>)}
    </div>
    <div className="staff-footer"><p>Need a hand? Include the command you used and the exact message you received.</p><a className="text-link" href="https://discord.gg/QnVP7y9dRD" target="_blank" rel="noreferrer">Ask in Discord <ArrowUpRight size={16}/></a></div>
  </section>;
}

export function PlayerGuideSection() {
  const steps = [
    ["Open your menu", "Type /menu. On Bedrock, /servermenu works too."],
    ["Find your own spot", "Choose Random Teleport, then confirm to explore."],
    ["Claim your base", "Stand in your chosen chunk and run /p claim."],
    ["Check the boundary", "Run /p borders to see the edge of your land."],
    ["Save the way home", "Open Homes → Set a Home in /menu and confirm."],
    ["Let a friend build", "Use /p trust PlayerName to share your personal land."],
  ];
  return <section id="player-guide" className="section player-guide-section">
    <div className="section-heading"><div><p className="eyebrow">FROM FIRST JOIN TO FIRST BASE</p><h2>Make the world yours.</h2></div><a className="button" href={sitePath("/guide/")}>Open the player guide <ArrowUpRight size={17}/></a></div>
    <p className="guide-intro">Homes, teleports, teams, and protected land. Start with these six steps, then explore the full guide whenever you need a command.</p>
    <div className="quickstart-grid">{steps.map(([title, body], index) => <article key={title} className="quickstart-card rainbow-panel"><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    <div className="guide-note"><ShieldCheck size={22}/><p><strong>A home saves a location. A claim protects land.</strong> Team membership gives access to team land only. Personal land uses its own trust list.</p></div>
    <div className="guide-topics">{[
      { Icon: House, label: "Homes & travel", id: "save-and-visit-homes" },
      { Icon: ShieldCheck, label: "Personal claims", id: "protect-your-own-base" },
      { Icon: Users, label: "Teams & trust", id: "manage-a-team" },
      { Icon: Compass, label: "Territory & alliances", id: "expand-your-territory" },
      { Icon: BookOpen, label: "Common questions", id: "common-questions" },
    ].map(({Icon, label, id}) => <a key={id} href={sitePath(`/guide/#${id}`)}><Icon size={18}/>{label}<ArrowUpRight size={14}/></a>)}</div>
  </section>;
}
