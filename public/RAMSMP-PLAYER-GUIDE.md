# RAMSMP Player Guide

Find a place to build, protect your base, and team up with friends. Most everyday features are available through `/menu`.

## Your first few minutes

1. Run `/menu` to open the server menu.
2. Choose **Random Teleport** to find somewhere to explore, then confirm.
3. When you find a place for your base, stand in it and run `/p claim` to claim the chunk for yourself.
4. Run `/p borders` to see the edge of your land.
5. Open **Homes** in `/menu`, choose **Set a Home**, and save the location.
6. If a friend should be able to build and use storage on your personal land, run `/p trust PlayerName`.

Replace `PlayerName`, `TeamName`, and other example names with the actual name. Some menu options depend on your rank or permissions.

## Open the server menu

| Platform | How to open it |
| --- | --- |
| Java | Press Escape and select **Server Menu**, or type `/menu`. |
| Bedrock | Type `/menu` or `/servermenu`. |

Bedrock uses in-game forms rather than a custom Escape-menu button. If `/menu` opens something else, use `/servermenu`.

The menu includes **Homes**, **Teleport**, **Random Teleport**, **Teams & Claims**, and **Server Links**. Use Back to return to the previous page. Lists with more entries have Previous and Next buttons.

## Save and visit homes

Open `/menu` -> **Homes**.

- **Set a Home:** enter a name such as `base`, then confirm. Stay near the spot until you finish confirming.
- **Visit a home:** select its name, then choose **Teleport**.
- **Move a saved home:** set a home using the same name and confirm the replacement.
- **Delete a home:** select it, choose **Delete Home**, and confirm.

Home names can contain letters, numbers, dots, dashes, and underscores, up to 32 characters. Do not use spaces.

Your home limit depends on your rank. A home is a saved teleport location: **setting a home does not claim or protect land**. Deleting a home does not remove your base or claims.

## Teleport to friends

Open `/menu` -> **Teleport**.

| Option | What it does |
| --- | --- |
| Request Teleport | Choose an online player to request a teleport to them. |
| Accept Latest | Accept the most recent incoming teleport request. |
| Deny Latest | Reject the most recent incoming request. |
| Auto-Accept TPA: ON/OFF | Toggle automatic acceptance of incoming teleport requests. |

Turn auto-accept **ON** if you want incoming requests accepted without approving each one. Turn it **OFF** when you want to choose who may teleport to you. Reopen the Teleport page to see the updated status. If the option is missing, your rank may not have access.

Teleport delays, cooldowns, costs, and combat restrictions still apply. A menu button does not bypass them.

## Explore with random teleport

Choose **Random Teleport** from `/menu`, then **Confirm**. Choose Cancel if you change your mind.

The server's random-teleport rules determine your destination and any costs or cooldowns. Once you find somewhere you like, claim it and save a home separately.

## Choose personal land or team land

| | Personal claims | Team claims |
| --- | --- | --- |
| Who owns the land? | You. | Your team. |
| Who can build and use storage? | You and people you personally trust. | Team members and people trusted by the team leader. |
| Who can claim? | You. | The leader and members given claiming permission. |
| Starting allowance | 12 chunks. | 12 chunks per team member. |
| Claim command | `/p claim` | `/team claim` |
| Trust command | `/p trust PlayerName` | `/team trust PlayerName` |

You can have both personal and team claims. Their allowances and trust lists are separate. **Being on the same team does not automatically give someone access to your personal land.**

A chunk is a 16-by-16-block area. Claim and unclaim commands act on the chunk you are standing in.

## Protect your own base

| Command | What it does |
| --- | --- |
| `/p claim` | Claim the current chunk for yourself. |
| `/p unclaim` | Remove your personal claim from the current chunk. |
| `/p info` | Check your personal claim allowance and usage. |
| `/p menu` | See your explicitly trusted players. |
| `/p trust PlayerName` | Give someone building and storage access to your personal claims. |
| `/p untrust PlayerName` | Remove their personal-claim access. |
| `/p borders` | Show or hide your outer territory boundary. |

`/p gui` and `/p trusted` also open the personal trust list.

Personal trust applies across **all of your personal claims**, not only the chunk you are standing in. Trust lets someone build as well as open storage, so choose carefully. The player must have joined the server before their name can be found for personal trust.

Your personal claims remain yours if you leave a team or are kicked from one.

## Create or join a team

To create a team, choose a name, short tag, and color. For example:

```text
/team create Rams RAM white
```

Use tab completion to see supported colors and icons. Team names can be up to 20 characters, and tags up to 8.

To invite a friend, the leader runs:

```text
/team invite PlayerName
```

The friend joins with:

```text
/team join Rams
```

You can also use `/team join TeamName` to request entry when you have not been invited. The leader accepts or denies the request.

| Command | What it does |
| --- | --- |
| `/team list` | Browse teams. |
| `/team info` | Read information about your team. |
| `/team info TeamName` | Read information about a named team. |
| `/team decline TeamName` | Decline an invitation. |
| `/team leave` | Leave your team. |

You can use `/t` instead of `/team`.

## Manage a team

The leader can open `/t menu` or `/team menu`. The older `/t gui` and `/team gui` commands still work.

| Leader command | What it does |
| --- | --- |
| `/team accept PlayerName` | Accept a join request. |
| `/team deny PlayerName` | Deny a join request. |
| `/team kick PlayerName` | Remove a member, including an offline member. |
| `/team leader PlayerName` | Transfer leadership to a team member. |
| `/team rename NewName` | Change the team name. |
| `/team tag NewTag` | Change the short tag. |
| `/team color ColorName` | Change the team color. |
| `/team icon IconName` | Change the team icon. |

Kicking a player removes their membership and delegated claiming permission. It does not remove their personal land.

### Team land and trust

Stand in a chunk and use `/team claim` to claim it for the team. Use `/team unclaim` to remove a claim, subject to the team's permissions.

Team members can build and use storage on team land automatically. The leader can grant claiming permission separately:

```text
/team claimperm PlayerName grant
/team claimperm PlayerName revoke
```

To give an outsider access to team land:

```text
/team trust PlayerName
/team untrust PlayerName
```

`/trust PlayerName` and `/untrust PlayerName` are team-trust shortcuts. Use `/team trusted` to see the explicit trust list. Team trust applies across all of the team's claims.

**Build access, claiming permission, and leadership are different.** Trusting someone does not make them a leader or give them permission to claim.

## Expand your territory

| Purchase | Team command | Personal command | Cost |
| --- | --- | --- | --- |
| One extra chunk slot | `/team buyclaim` | `/p buyclaim` | 10 diamonds |
| One extra detached-territory anchor | `/team buyanchor` | `/p buyanchor` | 64 diamonds |

Carry the diamonds in your inventory. Buying a slot increases your allowance; afterward, stand where you want land and use the claim command.

Your first anchor is free. Normally, new claims connect to your existing land. Buy another anchor if you want to start a separate territory elsewhere. Unclaiming does not refund your diamonds.

New claims must respect the 20-chunk spacing rule around unallied teams and unrelated personal land. Existing claims and protected server regions cannot be claimed over.

## Ally another team

An alliance lets friendly teams claim near one another without the usual spacing restriction between them.

Both leaders must agree. For example:

```text
Alpha's leader: /team ally Beta
Beta's leader: /team ally Alpha
```

Use `/team ally` to view allies, or `/team unally TeamName` to end an alliance or remove a pending request. Allies also appear in team information.

Alliances do **not** give automatic access to buildings, storage, or claim controls. Use trust when someone should have access. Spacing restrictions still apply to unrelated teams. Your own team and its accepted allies also receive the relevant spacing exceptions around personal territories.

Ending an alliance does not remove existing claims.

## Storage and farms

Chests, barrels, and other storage inside a claim use that claim's membership and trust rules. There are no separate chest locks to manage.

- On team land, team members and team-trusted players can use storage.
- On personal land, only the owner and personally trusted players can use storage.
- Untrusted outsiders cannot open claimed storage. Wilderness storage is not protected by a claim.
- Hoppers, hopper minecarts, and automatic composters can transfer items within the same claim owner. Transfers across claim-owner boundaries or between claimed land and wilderness are blocked.
- Water and lava can flow within your territory. Flow from outside needs a recorded source placed by someone with build access to the destination claim.
- You can sort your own inventory while visiting other people's land. Access to their storage is separate.

If a farm stops at a border, check that its storage and transfer path belong to the same claim owner.

## See boundaries and control explosions

| Command | What it shows |
| --- | --- |
| `/team borders` | The outer boundary of your team's land. |
| `/p borders` | The outer boundary of your personal land. |
| `/team tntborders` | Red outlines around explosion-enabled team chunks. |
| `/p tntborders` | Red outlines around explosion-enabled personal chunks. |

Run a command again to hide that view. Normal territory borders and red explosion borders can be shown independently. Stand near your claims and make sure particles are visible in your client settings.

Explosion block damage is blocked in claims by default. A team leader or personal owner can change a specific chunk while standing inside it:

```text
/team explosions status
/team explosions on
/team explosions off
```

For personal claims, use `/p explosions status`, `/p explosions on`, or `/p explosions off`.

**Turning explosions on allows block damage from all explosion sources in that chunk, including outsiders' TNT, creepers, beds, and anchors.** It is not limited to explosives placed by you. Storage can also be damaged. Keep explosions off around builds you want protected.

These settings control block damage; they do not promise protection from combat or explosion damage to players.

## Read your team and personal information

Open `/menu` -> **Teams & Claims** -> **My Team** to see your team, leader, members, allies, claiming permission, and land usage.

Choose **Personal Claims** -> **Personal Info** for your personal allowance, anchors, and trusted-player count. Use Next, Previous, and Refresh as needed.

The personal `/p menu` is the trusted-player list. Use **Personal Info** in ServerMenu or `/p info` when you want claim totals.

## Common questions

### Why can't my teammate build in my claim?

Check whether it is personal land. Teammates need `/p trust PlayerName` for personal claims. Team membership automatically covers team land only.

### Why can I build but not claim for my team?

Only the leader can claim by default. Ask the leader to use `/team claimperm YourName grant`.

### Why can't an ally open my chest?

An alliance affects claim spacing, not storage access. The relevant owner or leader must grant trust.

### Why does the trust list not show every teammate?

It shows explicit trust entries. Team members already have automatic team-land access.

### Why does my claim fail?

Check your remaining slots, nearby claims, protected regions, and whether the new chunk connects to existing land. A separate territory may need another anchor.

### Why does `/ec` fail in someone else's land?

Ender-chest storage opened through commands requires access to the territory you are standing in. Physical ender-chest use may also be disabled by server rules.

### Where can I get help?

Open **Server Links** in `/menu` or join the [RAMSMP Discord](https://discord.gg/QnVP7y9dRD). Tell staff which command you used and include the exact message you received.
