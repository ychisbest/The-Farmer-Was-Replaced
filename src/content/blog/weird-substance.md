---
title: "Weird Substance Code & Farm – The Farmer Was Replaced"
description: "How to farm Weird Substance in The Farmer Was Replaced: fertilizer infection, use_item toggle, a starter weird substance code loop, and how mazes spend it."
date: 2026-10-16
---

**Weird Substance** is the item you need to grow hedge mazes and a useful mid-game resource on its own. This page covers **weird substance code**, how to farm it, and how it ties into mazes — without mixing it into the [maze code](/codes/maze-code/) page that currently catches some of these searches by accident.

## What Weird Substance is

When a plant is **infected** and you harvest it, half of its normal yield turns into `Items.Weird_Substance`. Infection comes from fertilizer (and from using Weird Substance itself). You spend the item later with `use_item(Items.Weird_Substance, amount)` on a bush to spawn a maze.

Key facts from the game rules:

- `use_item(Items.Fertilizer)` cuts remaining grow time by 2 seconds **and infects** the plant under the drone.
- Harvesting an infected plant converts half the yield into Weird Substance.
- `use_item(Items.Weird_Substance)` on a plant **toggles** infection on that plant and its adjacent plants (infect healthy, cure infected, and flip neighbors).
- Mazes: plant a bush, then `use_item(Items.Weird_Substance, n)` to grow an n×n hedge maze (amount scales with maze upgrades).

## Starter weird substance farm (fertilizer loop)

Fertilizer regenerates over time (1 every 10 seconds at base, doubling with upgrades). A simple hay loop spends fertilizer to infect crops and harvest substance:

```python
def farm_weird_substance(target):
    while num_items(Items.Weird_Substance) < target:
        if get_ground_type() != Grounds.Soil:
            till()
        if can_harvest():
            harvest()
        plant(Entities.Grass)
        if num_items(Items.Fertilizer) > 0:
            use_item(Items.Fertilizer)
        # Wait until grown — fertilized plants still need to finish
        while not can_harvest():
            if get_water() < 0.5:
                use_item(Items.Water)
        harvest()  # half yield becomes Weird_Substance
        move(North)

farm_weird_substance(200)
```

Use grass/hay when you can: planting cost is low, so you can burn fertilizer into substance without spending wood or carrots. Trees also work if you already run a [tree farm](/codes/tree-code/) — infect before harvest and half the wood becomes substance.

## Faster pattern: seed infection, then spread

Fertilizer income is slow. Many players:

1. Fertilize and harvest a small batch to get a starter pile of Weird Substance.
2. On a large hay or tree field, call `use_item(Items.Weird_Substance)` on selected healthy plants so infection spreads to neighbors.
3. Harvest the whole field — half of each infected plant becomes more substance.

On a big farm you can infect most tiles with far fewer fertilizer ticks this way. Plan the placement so infected tiles form a covering pattern instead of wasting substance on already-infected plants.

## Weird Substance and mazes

To spawn a maze you need a bush under the drone:

```python
plant(Entities.Bush)
# Full-field maze cost grows with maze upgrades
n = get_world_size() * 2 ** (num_unlocked(Unlocks.Mazes) - 1)
use_item(Items.Weird_Substance, n)
```

For the left-wall solver and `measure()` treasure pathing, use the dedicated [maze code](/codes/maze-code/) page. This page stays focused on **farming** the item.

## Common mistakes

- Harvesting immediately after fertilize before the plant finishes growing.
- Spending all substance on mazes before you have a reliable farm loop.
- Looking for "weird substance code" on maze pages that never explain the fertilizer infection loop.
- Curing plants by accident: using Weird Substance on an infected plant flips it back to healthy.

## FAQ

**Do I need Weird Substance for pumpkins or polyculture?**  
No. Those systems have their own rules. See [pumpkin code](/codes/pumpkin-code/) and [polyculture code](/blog/polyculture-code/).

**Why does fertilizer matter?**  
It is the reliable way to create the first infections. Without fertilizer (or spreading with substance you already have), you do not generate Weird Substance.

**Where next?**  
Once you can bank substance steadily, open [maze code](/codes/maze-code/) and [multiple drones](/blog/multiple-drones/) to farm gold faster.
