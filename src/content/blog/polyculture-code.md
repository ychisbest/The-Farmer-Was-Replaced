---
title: "Polyculture Code – The Farmer Was Replaced (get_companion Guide)"
description: "Working polyculture code for The Farmer Was Replaced. Learn how get_companion() works, plant the right companion on the right tile, and multiply grass, wood and carrot yields."
date: 2026-10-16
---

Polyculture is the mechanic that makes grass, bushes, trees and carrots yield far more when the right companion plant grows on the right tile. This guide explains exactly what `get_companion()` returns, why the naive approach fails, and gives you polyculture code you can paste into the game and extend.

If you are still setting up your first farm, start with the [basic codes](/basic-codes/) and the [tree code](/codes/tree-code/) first. Polyculture builds on both.

## What polyculture does

Every grass, bush, tree and carrot can have a **companion preference**. If you plant the plant it wants, at the exact position it wants, and then harvest the original plant, you get a big yield bonus. Before you upgrade polyculture the multiplier is 5, and each upgrade doubles it. That makes polyculture one of the strongest boosts for hay, wood and carrots in the mid game.

A few rules decide how your code has to work:

- The preference is random for each individual plant. You cannot predict it; you have to read it.
- The companion is always a different plant type from the one asking. It is one of grass, bush, tree or carrot.
- The requested tile is within 3 moves of the plant, but never the plant's own tile.
- The companion's growth stage does not matter. It only has to be planted there when you harvest.

## How get_companion() works

Stand the drone on a plant and call `get_companion()`. It takes one tick and returns either `None` (no preference) or a tuple: the entity type it wants, and the `(x, y)` position where it wants it.

```python
companion = get_companion()
if companion != None:
    plant_type, (x, y) = companion
    print("Companion:", plant_type, "at", x, ",", y)
```

So a bush might return `(Entities.Carrot, (3, 5))`. That means: put a carrot on tile (3, 5), then harvest this bush for extra wood.

Always unpack the position you get back. Do not assume the companion sits directly next to the plant. The API only promises a coordinate, not a direction.

## Why the simple approach fails

The obvious idea is: read the companion, walk to that tile, plant it, walk back, harvest. On a small farm that works, but it wastes a lot of movement. Worse, the tile you walk to may already hold a plant that has its *own* companion request, and replanting it throws that request away.

The better pattern is to **remember requests in a dictionary** and fulfil them when your normal sweep reaches that tile. Your drone keeps its usual row-by-row route, and polyculture comes almost for free.

## Polyculture code (sweep + dictionary)

This version sweeps the whole field. On each tile it first checks whether some other plant asked for a companion here. If so, it plants that. Otherwise it plants your main crop and records that plant's own request.

```python
companions = {}  # (x, y) -> entity that should be planted there

def plant_tile(main_crop):
    pos = (get_pos_x(), get_pos_y())
    if can_harvest():
        harvest()
    if pos in companions:
        want = companions.pop(pos)
        if want == Entities.Carrot:
            if get_ground_type() != Grounds.Soil:
                till()
        plant(want)
        return
    if main_crop == Entities.Carrot:
        if get_ground_type() != Grounds.Soil:
            till()
    plant(main_crop)
    result = get_companion()
    if result != None:
        want, target = result
        if target not in companions:
            companions[target] = want

def sweep(main_crop):
    size = get_world_size()
    for i in range(size):
        for j in range(size):
            plant_tile(main_crop)
            move(North)
        move(East)

while True:
    sweep(Entities.Tree)
```

Change `Entities.Tree` to `Entities.Bush`, `Entities.Carrot` or `Entities.Grass` depending on what you want to farm. Grass needs no planting call on grassland, so for a pure hay farm you can skip `plant()` and only read companions.

### Notes on the code

- `companions.pop(pos)` reads the request and removes it, so each request is fulfilled once.
- The `if target not in companions` check stops two plants from fighting over the same tile.
- Carrots need tilled soil, so the code tills before planting a carrot.
- Trees grow slowly next to other trees. Mixing in companions also helps here, which is why trees and polyculture pair so well. See the [tree code](/codes/tree-code/) for spacing.

## Using polyculture with multiple drones

Once you unlock more drones, the same dictionary still works. Each drone sweeps its own columns, and because `companions` is a shared global, a request logged by one drone can be fulfilled by whichever drone reaches that tile next. Give each drone a starting column and let it run the same `plant_tile()` logic.

## Common mistakes

- **Harvesting before the companion is planted.** The bonus only counts if the companion is in place at harvest time.
- **Overwriting a companion with your main crop.** Always check the request dictionary before planting the default crop.
- **Expecting a fixed offset.** Read `(x, y)` every time.
- **Forgetting to till for carrots.** A carrot companion on untilled grass simply fails.

## FAQ

**Which plants use polyculture?** Grass, bushes, trees and carrots. Other crops such as pumpkins, cacti and sunflowers have their own mechanics.

**Does the companion need to be fully grown?** No. Its growth stage does not matter.

**How big is the bonus?** It starts at a 5x multiplier before upgrades and doubles with each polyculture upgrade.

**What should I farm next?** After polyculture, move on to the [pumpkin code](/codes/pumpkin-code/) and the [sunflower code](/codes/sunflower-code/), or browse all [basic codes](/basic-codes/).
