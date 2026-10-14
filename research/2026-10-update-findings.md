# Site update research — 2026-10-14 (Asia/Shanghai)

Scope: facts and community consensus from ~2026-09-14 to 2026-10-14 for https://thefarmerwasreplaced.com

## Summary table

| Source & date | Fact | Affected pages | Suggested change |
| --- | --- | --- | --- |
| Steam store app/2060160 (checked 2026-10-14); Metaroot press | Developer is **Timon Herzog**; publisher **Metaroot, Timon Herzog** | `CollapsibleText.astro` (live homepage still says RainbowDoggieUnicorn); `info.md` already correct | Replace RainbowDoggieUnicorn → Timon Herzog / Metaroot (en/zh/de) |
| Steam store system requirements (checked 2026-10-14); Dec 2025 macOS news; SteamDB Deck notes | Official native platforms: **Windows + macOS**. Linux via **Proton** (no native Linux). Steam Deck: **Playable** (OSK for some text) | FAQ says “Windows, Linux, macOS” without nuance; `info.md` still says Windows-only | Clarify native Win/macOS; Linux/Deck via Proton/Playable |
| Steam news 2026-09-09; SteamDB build 25208917; DLC app/4521700; metaroot.ch press kit | **The Miner Was Replaced** DLC releases **2026-11-02**. Underground mining, coal/quartz/mushrooms/dynamite, rice on clay, Minesweeper-like challenge, new unlock-tree section. Playtest signup via Steam (app ~5180480) | Homepage, FAQ, blog — DLC never mentioned | Add FAQ + homepage news strip + blog post with Steam links |
| SteamDB build 25234622 (2026-09-10) | Silent depot update after DLC announcement; no public patch notes | Optional mention in blog only | Note “no public notes” if mentioning |
| Reddit r/TheFarmerWasReplaced 2026-09-18 (maze #524) | Multi-drone: fill 32×32 with 32 smaller mazes; wall-follower OK on fresh mazes; reused mazes need visited-tile / measure() for loops | `maze-code.astro` | Add “after beginner / leaderboard” tip: subdivide farm for multi-drone; mark plain left-wall as beginner / outdated for reused mazes (already partially noted) |
| Reddit 2026-09-23 (sunflowers) | Multi-drone: **no shared state** between drones; common approach is each pass harvesting current max petals | `sunflower-code.astro` | Add multi-drone note: no shared petal list; independent max-pass still works |
| Reddit 2026-09-11 (Pumpkinator V2) + comments | Consensus: track dead/bad tiles, replant; fertilizer on dead pumpkin for faster respawn; multi-drone sector split | `pumpkin-code.astro` | Add tip: fertilize dead tiles; multi-drone sector split for large grids |
| GitHub (search 2026-10-14) | Active personal script repos (DecafTitan, FlixiDoe, Theuderich, Densetsu152637…). Curated: **Flekay** (GPL, still primary), **Thorrdu** (drone_grid utilities), **LucasCerattoRS/the-farmer-was-replaced-lab** (annotated endgame). Cliencer Auto repo **404**. Gungnirrr still 200 | `github.astro` | Add Thorrdu + LucasCeratto lab; keep Flekay/Gungnirrr/Steam guide; keep wiki.gg (user-facing; bots get 403) |
| Steam guide id=3719505315 | Still 200; page already notes Sep 2026 rates | `github.astro` | Keep |
| Live site curl 2026-10-14 | Homepage CollapsibleText still ships wrong developer name; no DLC mention | index / CollapsibleText / FAQ | Fix + announce DLC |

## Platform nuance (for FAQ wording)

- Steam store tabs: Windows, macOS only (official).
- Native Linux build was attempted (Dec 2025 news) but not shipped; Proton works; Deck category Playable.
- Do **not** claim “Linux native”. Prefer: “Steam desktop: Windows & macOS native; Linux/Steam Deck via Proton (Playable).”

## Links verified (HTTP)

| URL | Status |
| --- | --- |
| https://store.steampowered.com/app/2060160/The_Farmer_Was_Replaced/ | 200 |
| https://store.steampowered.com/app/4521700/The_Miner_Was_Replaced/ | 200 |
| https://store.steampowered.com/news/app/2060160/view/687515890081597557 | 200 |
| https://www.metaroot.ch/press-kit/the-miner-was-replaced | 200 |
| https://github.com/Flekay/The-Farmer-Was-Replaced | 200 |
| https://github.com/Gungnirrr/The-Farmer-Was-Replaced | 200 |
| https://github.com/Thorrdu/the-farmer-was-replaced | 200 |
| https://github.com/LucasCerattoRS/the-farmer-was-replaced-lab | 200 |
| https://github.com/Cliencer/The-Farmer-Was-Replaced-Auto | **404** — do not link |
| https://steamcommunity.com/sharedfiles/filedetails/?id=3719505315 | 200 |
| https://thefarmerwasreplaced.wiki.gg/ | Bot **403**; keep for humans |
| https://thefarmerwasreplaced.com/ | 200 (still shows RainbowDoggieUnicorn) |

## Reddit access note

Direct Reddit JSON/HTML from this box was blocked (403 / network security). Strategy notes above come from indexed search snippets with dated posts (Sep 11–23 2026). Treat as community consensus, not verbatim code copies.

## Out of scope / uncertain

- Exact DLC price (not confirmed at research time).
- Whether playtest is still open to new signups on a given day — point users to Steam page.
- Whether any October 2026 gameplay balance patch changed crop math — no public notes found after Sep 10 silent build.
- Do not paste GPL Flekay sources onto the site.
