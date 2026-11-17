---
title: "The Farmer Was Replaced Mobile: Official Android, iOS & APK Guide (2026)"
description: "Official Android (Google Play) & iOS links for The Farmer Was Replaced (no safe third-party APK). Plus hidden touch-keyboard tricks, Miner DLC guide, and copy-paste mobile scripts."
date: 2026-10-16
updatedDate: 2026-11-17
---

**Update, November 2, 2026:** The Farmer Was Replaced is now officially on **Android and iOS**. The mobile port is by Ateo, published by Metaroot, and it includes the first DLC, [The Miner Was Replaced](/blog/the-miner-was-replaced/). This page used to say "no mobile version" — that is no longer true.

## Short answer

| Platform | Official? | Notes |
|----------|-----------|--------|
| Android | **Yes** (since Nov 2, 2026) | Google Play, touch code keyboard, DLC included |
| iPhone / iPad | **Yes** (since Nov 2, 2026) | App Store, same features as Android |
| Windows (Steam) | Yes | Native |
| macOS (Steam) | Yes | Native since the December 2025 update |
| Linux / Steam Deck | Playable | Via Proton; a keyboard helps a lot |
| Browser / online | **No** | No official web version; this site is a guide |

## The Farmer Was Replaced on Android and iOS

![The Farmer Was Replaced mobile UI running a harvest loop on Android and iOS](/images/mobile/mobile-screenshot-2.webp)

The official mobile site is [farmer.ateo.ch](https://farmer.ateo.ch/), which links to the [App Store](https://apps.apple.com/app/the-farmer-was-replaced/id6790322035) and [Google Play](https://play.google.com/store/apps/details?id=com.TheFarmerWasReplaced.TheFarmerWasReplaced) listings. Install only from those two stores.

What the mobile version has:

- **Everything from the PC version**, rebuilt for phones and tablets: loops, variables, functions, lists, Megafarm (many drones in parallel), Simulation Mode, achievements and hats.
- **A code keyboard made for touch.** Every symbol is on one screen, brackets and quotes come in pairs, and you swipe on any key to move the cursor.
- **Bluetooth keyboard and mouse** support if you prefer real keys.
- **The Miner Was Replaced included**: underground mining, 8 new resources, mushroom sorting, ruins and Minesweeper-style puzzles.

Good to know before you buy:

- **Steam and mobile are separate purchases.** Owning the game on Steam does not unlock the app.
- Community members on the publisher's launch post mention a **free trial** on mobile; check the store listing on your device.
- **Touch keyboard hidden trick (single parenthesis):** Brackets and quotes auto-pair by default, which can make editing a single `(` or `)` annoying. **Press and hold the parenthesis key** to insert an individual bracket without triggering a pair — or connect a Bluetooth keyboard if you write long scripts.
- Mobile support: farmer@ateo.ch.

## Should mobile beginners worry about The Miner Was Replaced DLC?

![Underground mining and mushroom sorting in The Farmer Was Replaced mobile](/images/mobile/mobile-screenshot-1.webp)

No. Although the mobile version bundles **The Miner Was Replaced** DLC (adding 8 underground resources like Coal, Quartz, Mushrooms, and Dynamite), **mining mechanics stay completely inactive until you unlock the mining upgrade in the tech tree**. You can focus 100% on the base farming loop first and turn on mining whenever you are ready.

## Is there a safe "The Farmer Was Replaced APK" download?

Do **not** download third-party `.apk` files from mirror sites. The only legitimate Android build is on **Google Play** (`com.TheFarmerWasReplaced.TheFarmerWasReplaced`), linked directly from [farmer.ateo.ch](https://farmer.ateo.ch/). Check the store listing for regional pricing or trial availability rather than risking modified APKs.

## The Farmer Was Replaced on Mac

The Steam version runs **natively on macOS** since the December 2025 update ("Now available on macOS"). You no longer need Porting Kit, Wine or CrossOver — older guides that recommend them are out of date. Buy and install it in the Mac Steam client like any other game.

## Is there an online version?

No. There is no official browser or HTML5 version. Sites that offer "The Farmer Was Replaced online" or unofficial APKs are clones or unsafe downloads. This website ([thefarmerwasreplaced.com](/)) is an independent guide with copy-paste scripts; it cannot run the drone simulator.

## Coding on a phone: tips

- Start with short programs: the classic first script is `while True:` → `if can_harvest(): harvest()` → `move(North)`.
- Keep scripts small and use functions; scrolling long files on a phone is slow.
- Use Simulation Mode to test a change before running it on your farm.
- Copy our [basic codes](/basic-codes/), [pumpkin code](/codes/pumpkin-code/) or [maze code](/codes/maze-code/) on your phone and paste them into the app.

### Mobile Quick-Reference (Copy-Paste Ready)

Since scrolling docs on a phone is slow, keep these core calls handy:
- `harvest()` — harvest the tile under the drone
- `can_harvest()` — returns `True` when the crop is ready
- `till()` — turn grassland into soil (needed for carrots/pumpkins)
- `plant(Entities.Carrot)` — plant a specific crop
- `move(North)` / `South` / `East` / `West` — move one tile

## Steam Deck

Steam rates the game Playable on Deck. The on-screen keyboard is slow for writing loops, so connect a Bluetooth keyboard if you can.

## FAQ

**Is The Farmer Was Replaced on Android?**
Yes. Since November 2, 2026 it is on Google Play, with the official link on farmer.ateo.ch.

**Can I play on iPhone or iPad?**
Yes, the iOS version is on the App Store with the same touch keyboard.

**Does the mobile version include The Miner Was Replaced?**
Yes, the mining DLC content is included in the mobile version.

**If I own it on Steam, do I get the mobile version for free?**
No, they are separate purchases.

**Can I play The Farmer Was Replaced on Mac?**
Yes, natively through Steam on macOS.

**Is there a free online version?**
No official one.

## Related pages

- [The Miner Was Replaced (DLC) overview](/blog/the-miner-was-replaced/)
- [Full guide (tutorial)](/tutorial/)
- [Basic codes](/basic-codes/)
- [Use VS Code with The Farmer Was Replaced](/blog/vscode-external-editor/)
