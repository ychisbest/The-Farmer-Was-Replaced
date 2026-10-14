# Guide rewrite verification — 2026-10-14

## Verified against wiki / patch notes

| API / rule | Source | Used on site |
| --- | --- | --- |
| `trade()` removed | SteamDB 1.0 / Simulation Update breaking changes | Removed from all copy-paste code |
| `Items.Water_Tank` → `Items.Water` | Same + Watering wiki | All watering uses `Items.Water` |
| No `Carrot_Seed`; plant spends hay+wood | Carrots wiki | carrot-code, basic-codes |
| `Entities.Dead_Pumpkin`; plant-over clears | Pumpkins wiki + Entities | pumpkin-code, blog |
| Yield n³ (1–5), 6n² (≥6) | Pumpkins wiki | pumpkin prose + blog |
| Sunflower 7–15; 8× if ≥10 + max petals | Gridworks / wiki consensus | sunflower-code, FAQ |
| Maze: measure anywhere; reuse loops | Mazes wiki | maze-code |
| Cactus sorted N/E≥ S/W≤; harvest n² | Cactus wiki | cactus-code |
| Dino move 400 ticks; −3%/apple; n² on unequip | Dinosaurs wiki | dinosaur-code tips |
| Tree adjacency doubles grow time | Trees / Gridworks | tree-code (unchanged logic) |
| Megafarm: no shared globals; spawn_drone / wait_for | Megafarm / Gridworks | tips on pumpkin/sunflower/maze |

## Explicitly NOT claimed as verified in runnable code

- Fertilizing a Dead_Pumpkin specifically speeds respawn — community tip only; scripts plant over dead instead.
- Exact multi-drone gold/s or pumpkin/min leaderboard numbers — cited as community reports, not copied scripts.
- Maze substance formula with upgrades — documented in prose; beginner script uses `get_world_size()` only.
- `get_cost` amounts — scale with upgrades; scripts optionally call `get_cost` but do not hardcode numbers.

## Checks run

- `pnpm test:guide` (dinosaur + tree + new `check-guide-apis.mjs`)
- `pnpm build`
