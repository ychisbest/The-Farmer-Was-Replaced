---
title: "The Miner Was Replaced: DLC Release, Price, Content and How to Start"
description: "The Miner Was Replaced is the first DLC for The Farmer Was Replaced, out November 2, 2026. Price and launch discount, base-game requirement, 8 new resources, mushroom sorting, Minesweeper and ruins puzzles, mobile and how to start."
date: 2026-11-05
---

**The Miner Was Replaced** is the first DLC for [The Farmer Was Replaced](/). It came out on **November 2, 2026** and takes the drone underground: you program it to dig, explore and mine. This page covers what is confirmed — release, price, requirements, content — and how to prepare your code.

## Quick facts

| | |
|---|---|
| Release date | November 2, 2026 |
| Type | DLC (needs the base game on Steam) |
| Developer / publisher | Timon Herzog / Metaroot |
| Platforms | Windows and macOS (Steam); included in the Android and iOS version |
| Launch offer | 30% off until November 17, 2026 |
| Bundles | Complete Bundle (game + DLC); Supporter Bundle (game + DLC + soundtrack) |
| Achievements | 52 |
| Languages | 11, including English, German, French, Italian, Spanish and Simplified Chinese |

## What's new in The Miner Was Replaced

From the Steam page and the developer's announcement:

- **A mining upgrade for your drone.** Program it to dig, explore and mine underground resources with the same Python-like language.
- **8 new underground resources**, including **coal, quartz, mushrooms and dynamite**.
- **Ruins excavation:** dig up ancient ruins without damaging them.
- **Mushroom sorting:** sort colorful mushrooms — a sorting-algorithm puzzle.
- **Minesweeper:** "finally learn how to play Minesweeper without blowing up your mining drone."
- **A new section of the unlock tree** and new mechanics to work through.
- Shipped together with a **major documentation overhaul** and base-game fixes.

## Do you need The Farmer Was Replaced?

Yes, on Steam. The DLC requires the base game. If you don't own either, the **Complete Bundle** is the cheapest way to get both. On **Android and iOS**, the mining content is already included in the app — see [The Farmer Was Replaced mobile](/blog/mobile-android-online/).

## Is it too hard for a first playthrough?

The mining content sits in its own part of the unlock tree, so you reach it through upgrades. If you want a clean first run of the farm, you can simply not buy the mining upgrade in game, or disable the DLC in Steam: **Library → right-click the game → Properties → DLC** and uncheck it.

## How to get ready for the mining puzzles

The API names are in the in-game documentation (press the info button). The programming ideas you need are the same ones the farm teaches:

1. **Scans need a stopping rule.** Mining a grid is a loop over tiles. Decide when the loop ends (all tiles visited, inventory full) before you start it.
2. **Track your position and visited tiles.** Keep a list or set of visited coordinates instead of re-scanning the whole map — the same trick as our [pumpkin code](/codes/pumpkin-code/).
3. **Sorting:** for mushrooms, learn compare-and-swap first. Our [cactus code](/codes/cactus-code/) is a sorting puzzle on the farm and a good warm-up.
4. **Minesweeper logic:** only dig a tile when you can prove it is safe from the numbers around it; if you can't, collect more information first.
5. **Ruins:** move carefully and check before digging; one wrong action damages the ruin.

If you already run several drones, read [multiple drones](/blog/multiple-drones/) — parallel drones help with large underground areas too.

## FAQ

**When did The Miner Was Replaced come out?**
November 2, 2026, on Steam (Windows and macOS) and inside the new mobile version.

**How much does The Miner Was Replaced cost?**
It has a 30% launch discount until November 17, 2026. Prices depend on your Steam region; check the Steam page.

**Is The Miner Was Replaced a separate game?**
No. It is a DLC for The Farmer Was Replaced and needs the base game on Steam.

**What resources does the DLC add?**
Eight new underground resources, including coal, quartz, mushrooms and dynamite.

**Is it on mobile?**
Yes, the Android and iOS version includes The Miner Was Replaced.

## Links

- [Steam: The Miner Was Replaced](https://store.steampowered.com/app/4521700/The_Miner_Was_Replaced/)
- [Mobile version (farmer.ateo.ch)](https://farmer.ateo.ch/)
- [Full guide (tutorial)](/tutorial/)
- [Use VS Code as an external editor](/blog/vscode-external-editor/)
- [Games like The Farmer Was Replaced](/blog/games-like-the-farmer-was-replaced/)
