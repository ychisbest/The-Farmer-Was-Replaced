---
title: "The Ultimate Pumpkin Guide in The Farmer Was Replaced: Giant 32x32 Grid Automation & Rot Prevention"
description: "Current 1.0+ pumpkin rules: 20% Dead_Pumpkin, yield n³ then 6n², track bad tiles, plant over dead, multi-drone sectors. Copy-paste teaching script included."
date: 2026-09-04
updatedDate: 2026-10-14
---

In *The Farmer Was Replaced* (1.0+), pumpkins are the first crop where a naive harvest loop fails. Adjacent fully grown pumpkins **merge** into one giant pumpkin. About **20%** die at ripeness and leave `Entities.Dead_Pumpkin`, which blocks the merge until you plant over them.

This post was rewritten on **2026-10-14** against the wiki Pumpkins / Watering pages and the current Steam build line. Older versions of this article talked about a “rot timer” and invented helpers like `set_position` — those were wrong for 1.0.

## Rules that matter

1. **Soil + cost.** `till()` to `Grounds.Soil`. Planting spends carrots (`get_cost(Entities.Pumpkin)`).
2. **Death.** ~1 in 5 becomes `Entities.Dead_Pumpkin`. `can_harvest()` is always `False` on dead tiles. Planting anything on that tile clears the dead pumpkin (wiki) — you do not need to harvest it.
3. **Yield.** Side length 1–5 pays **n³**. From **6×6** up, pay **6·n²** (32×32 → 6,144). Harvest before the full square merges and you only get small clusters.
4. **Water.** `use_item(Items.Water)` — the old `Items.Water_Tank` / `trade()` economy is gone. Water speeds growth up to 5×; it does **not** stop deaths.
5. **Fertilizer.** `use_item(Items.Fertilizer)` cuts ~2s off a living plant’s remaining grow time and infects it. Prefer fertilizing the **new** plant after replanting, not as a substitute for planting over dead tiles.

## Algorithm: plant → track bad tiles → patch → harvest

```
Phase 1: Till + plant every tile once (and water if you can).
Phase 2: Scan; collect coordinates that are empty, Dead_Pumpkin, or not can_harvest().
Phase 3: Fly only to those coordinates; plant over bad tiles; wait on unripe live pumpkins.
Phase 4: When the bad list is empty, harvest() once (the giant merge should be ready).
Repeat.
```

## Teaching script (single drone, verified APIs)

Uses only wiki-backed names: `go_to` via `move`, `Grounds.Soil`, `Entities.Pumpkin`, `Entities.Dead_Pumpkin`, `Items.Water`. No `trade()`, no `set_position()`, no `Water_Tank`.

```python
def go_to(x, y):
    while get_pos_x() != x:
        if get_pos_x() < x:
            move(East)
        else:
            move(West)
    while get_pos_y() != y:
        if get_pos_y() < y:
            move(North)
        else:
            move(South)

def plant_full_field():
    size = get_world_size()
    for y in range(size):
        for x in range(size):
            go_to(x, y)
            if get_ground_type() != Grounds.Soil:
                till()
            plant(Entities.Pumpkin)
            if get_water() < 0.75:
                use_item(Items.Water)

def collect_bad_tiles():
    bad = []
    size = get_world_size()
    for y in range(size):
        for x in range(size):
            go_to(x, y)
            ent = get_entity_type()
            if ent == Entities.Dead_Pumpkin or ent != Entities.Pumpkin or not can_harvest():
                bad.append([x, y])
    return bad

def patch_bad(bad):
    while len(bad) > 0:
        still_bad = []
        for pos in bad:
            x = pos[0]
            y = pos[1]
            go_to(x, y)
            ent = get_entity_type()
            if ent != Entities.Pumpkin:
                if get_ground_type() != Grounds.Soil:
                    till()
                plant(Entities.Pumpkin)
                still_bad.append([x, y])
            elif not can_harvest():
                still_bad.append([x, y])
        bad = still_bad

clear()
while True:
    plant_full_field()
    bad = collect_bad_tiles()
    patch_bad(bad)
    go_to(0, 0)
    harvest()
```

## Multi-drone (Megafarm)

Drones **do not share globals**. Split columns or rectangles per drone. Sync phases with `spawn_drone` + `wait_for`. Community consensus (Sep–Oct 2026): keep a per-drone bad-tile list; water every tile on large grids.

## FAQ

**Why is my harvest tiny?**  
Something failed to merge — usually a Dead_Pumpkin or an unripe tile. Do not harvest until every tile in the square is a live, harvestable pumpkin.

**Does this work on small farms?**  
Yes. `get_world_size()` adapts. Aim for at least 6×6 when you can, so the 6n² multiplier applies.

## Related

- [Pumpkin code page](/codes/pumpkin-code)
- [Sunflower code](/codes/sunflower-code)
- [Cactus sorting](/codes/cactus-code)
- [Basic codes](/basic-codes)
