import { sitePath } from "../lib/site-path";
import { ArrowUpRight, BookOpen, Compass, House, ShieldCheck, Users } from "lucide-react";

export const staff = [
  "PrimoSlice", "randomperson1194", "Luigi282", "BigLeader857614",
  "Monopolizer500", "Rambion", "VannyJo", "notnixois",
];

export function StaffSection() {
  return <section id="staff" className="section staff-section">
    <div className="section-heading">
      <div><h2>Meet the staff.</h2></div>

    </div>
    <div className="staff-grid">
      {staff.map(name => <article className="staff-card rainbow-panel" key={name}>
        <div className="staff-head"><img src={sitePath(`/assets/staff/${name}.png`)} alt={`${name}'s Minecraft character head`} width={160} height={160} loading="lazy" /></div>
        <h3>{name}</h3><p>MAIN STAFF</p>
      </article>)}
    </div>
    <div className="staff-footer"><p>Stuck? Ask us!</p><a className="text-link" href="https://discord.gg/QnVP7y9dRD" target="_blank" rel="noreferrer">Ask in Discord <ArrowUpRight size={16}/></a></div>
  </section>;
}

export function PlayerGuideSection() {
  const steps = [
    ["Open your menu", "Type /menu (or /servermenu on Bedrock)."],
    ["Find your own spot", "Pick Random Teleport and confirm."],
    ["Claim your base", "Type /p claim where you want to build."],
    ["Check the boundary", "Type /p borders to see your land."],
    ["Save the way home", "In /menu, pick Homes → Set a Home. Confirm."],
    ["Let a friend build", "Type /p trust PlayerName. Only trust friends!"],
  ];
  return <section id="player-guide" className="section player-guide-section">
    <div className="section-heading"><div><p className="eyebrow">GET STARTED</p><h2>Your first base.</h2></div><a className="button" href={sitePath("/guide/")}>All commands <ArrowUpRight size={17}/></a></div>
    <p className="guide-intro">Six quick steps. Then go build!</p>
    <div className="quickstart-grid">{steps.map(([title, body], index) => <article key={title} className="quickstart-card rainbow-panel"><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    <div className="guide-note"><ShieldCheck size={22}/><p><strong>Set a home to get back. Claim to protect.</strong>  Teammates can build on team land. Your own land needs /p trust.</p></div>
    <div className="guide-topics">{[
      { Icon: House, label: "Homes & travel", id: "save-and-visit-homes" },
      { Icon: ShieldCheck, label: "Personal claims", id: "protect-your-own-base" },
      { Icon: Users, label: "Teams & trust", id: "manage-a-team" },
      { Icon: Compass, label: "Territory & alliances", id: "expand-your-territory" },
      { Icon: BookOpen, label: "Common questions", id: "common-questions" },
    ].map(({Icon, label, id}) => <a key={id} href={sitePath(`/guide/#${id}`)}><Icon size={18}/>{label}<ArrowUpRight size={14}/></a>)}</div>
  </section>;
}
