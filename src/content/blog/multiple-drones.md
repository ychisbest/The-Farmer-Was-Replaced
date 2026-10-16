---
title: "Multiple Drones Code – The Farmer Was Replaced Megafarm Guide"
description: "How to use multiple drones in The Farmer Was Replaced: unlock Megafarm, spawn_drone, max_drones, wait_for, and a copy-paste column farm pattern that scales your scripts."
date: 2026-10-16
---

Once you unlock **Megafarm**, you stop farming with one drone and start running a fleet. This page is the **multiple drones** guide for *The Farmer Was Replaced*: what the unlock gives you, how `spawn_drone` works, and a copy-paste pattern you can drop into pumpkin, tree, or polyculture scripts.

## Unlock Megafarm first

Megafarm is the unlock that enables more than one drone. Upgrading it raises the drone cap further. Until you unlock it, `spawn_drone` is not available and every crop script stays single-threaded.

Useful helpers after the unlock:

- `spawn_drone(function, *args)` — spawn a drone that runs `function`
- `num_drones()` — how many drones are alive now
- `max_drones()` — how many are allowed at once
- `wait_for(drone)` — block until that drone finishes; returns its return value
- `has_finished(drone)` — non-blocking check

## How spawn_drone works

Pass the **function object**, not a call:

```python
# Correct
spawn_drone(harvest_column)

# Wrong — this runs harvest_column immediately on the current drone
spawn_drone(harvest_column())
```

The new drone appears on the same tile as the parent and starts running the function you passed. Extra arguments after the function are copied into that call. When the function returns, the drone disappears. Drones do not collide with each other.

If you are already at the cap, `spawn_drone` does nothing and returns `None`. A safe pattern is:

```python
if not spawn_drone(task):
    task()  # parent does the work itself
```

There is no special "main" drone. Any drone can spawn others, and every living drone counts toward `max_drones()`.

## Multiple drones code: one column each

A common Megafarm pattern: the parent walks east across the farm, spawning one worker per column. Each worker farms north–south forever (or for one pass).

```python
def harvest_column():
    size = get_world_size()
    for i in range(size):
        if can_harvest():
            harvest()
        move(North)

clear()
while True:
    # Fill the farm with column workers
    while num_drones() < max_drones():
        if spawn_drone(harvest_column):
            move(East)
        else:
            break
    # Parent also works a column while the fleet runs
    harvest_column()
    move(East)
```

Replace the body of `harvest_column` with plant / water / fertilize logic for the crop you care about. For pumpkins, each drone should own a fixed set of columns and keep its **own** bad-tile list — drones do not share globals the way you might expect from normal Python.

## Syncing phases with wait_for

When every drone must finish planting before anyone harvests (giant pumpkin merge, cactus sort, and similar), keep the handles and wait:

```python
def plant_column():
    size = get_world_size()
    for i in range(size):
        if get_ground_type() != Grounds.Soil:
            till()
        plant(Entities.Pumpkin)
        move(North)

handles = []
size = get_world_size()
for x in range(size - 1):
    h = spawn_drone(plant_column)
    if h:
        handles.append(h)
    else:
        plant_column()
    move(East)

plant_column()  # last column on the parent

for h in handles:
    wait_for(h)

# Now the field is planted — patch / measure / harvest on the parent
```

## Tips that save hours

- **Move between spawns.** If you spam `spawn_drone` without moving, workers stack on one tile. Move East (or do other work) between successful spawns.
- **Do not share one list across drones** for pumpkin dead tiles. Give each drone its sector.
- **Many small jobs beat one giant job** for mazes and some leaderboard crops: spawn several drones on small mazes instead of one huge maze.
- Pair this page with crop guides: [pumpkin code](/codes/pumpkin-code/), [tree code](/codes/tree-code/), [polyculture code](/blog/polyculture-code/), [maze code](/codes/maze-code/).

## FAQ

**Why does spawn_drone return None?**  
You already have `max_drones()` living drones, including the parent.

**Do drones share variables?**  
Treat each drone's program as separate. Design with arguments and return values via `wait_for`, not one global list written by everyone.

**Can spawned drones spawn more drones?**  
Yes. Every living drone counts toward the cap.

**Where do I go after this?**  
Scale your [pumpkin](/codes/pumpkin-code/) and [polyculture](/blog/polyculture-code/) scripts, or read the [tutorial](/tutorial/) if you are still learning the language basics.
