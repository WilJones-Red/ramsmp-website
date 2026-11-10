import type { Metadata } from "next";
import PlayerGuide from "./player-guide";

export const metadata: Metadata = {
  title: "Player Guide — RAMSMP",
  description: "Learn RAMSMP's menus, homes, teleports, personal claims, teams, trust, alliances, storage, and explosion controls.",
};

export default function GuidePage() { return <PlayerGuide/>; }
