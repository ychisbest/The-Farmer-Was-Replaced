---
title: "多无人机代码 — 编程农场 Megafarm 指南"
description: "如何使用多无人机：解锁 Megafarm、spawn_drone、max_drones、wait_for，以及可复制的按列农场模板。"
date: 2026-10-16
---

解锁 **Megafarm** 后，你不再用一台无人机耕田，而是开整支舰队。本页是《The Farmer Was Replaced》的**多无人机**指南：解锁给什么、`spawn_drone` 怎么用，以及可塞进南瓜、树木或混种脚本的复制模板。

## 先解锁 Megafarm

Megafarm 让你拥有一台以上无人机。继续升级会提高上限。未解锁前 `spawn_drone` 不可用，所有作物脚本都是单线程。

解锁后常用函数：

- `spawn_drone(function, *args)` — 生成执行 `function` 的无人机
- `num_drones()` — 当前存活数量
- `max_drones()` — 同时允许的上限
- `wait_for(drone)` — 阻塞直到结束，返回其返回值
- `has_finished(drone)` — 非阻塞检查

## spawn_drone 用法

传入**函数对象**，不要传入调用结果：

```python
# Correct
spawn_drone(harvest_column)

# Wrong — this runs harvest_column immediately on the current drone
spawn_drone(harvest_column())
```

新无人机会出现在父机同一格，立即执行传入函数。函数后的额外参数会拷进该调用。函数返回后无人机消失。无人机之间不碰撞。

已达上限时 `spawn_drone` 什么也不做并返回 `None`。安全写法：

```python
if not spawn_drone(task):
    task()  # parent does the work itself
```

没有特殊「主机」。任何无人机都能再生成，每个存活单位都计入 `max_drones()`。

## 多无人机代码：每列一台

常见 Megafarm 模式：父机向东走过农场，每列生成一个工人。每个工人沿南北耕种（一轮或永久）。

```python
def harvest_column():
    size = get_world_size()
    for i in range(size):
        if can_harvest():
            harvest()
        move(North)

clear()
while True:
    while num_drones() < max_drones():
        if spawn_drone(harvest_column):
            move(East)
        else:
            break
    harvest_column()
    move(East)
```

把 `harvest_column` 换成你要的种植 / 浇水 / 施肥逻辑。南瓜场景下每台应固定若干列并维护**自己的**坏格列表——不要指望像普通 Python 那样随便共享全局。

## 用 wait_for 同步阶段

当必须所有机种完再一起收（巨型南瓜合并、仙人掌排序等），保存句柄并等待：

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

plant_column()

for h in handles:
    wait_for(h)
```

## 省时间的技巧

- **生成之间要移动。** 不移动就狂刷 `spawn_drone`，工人会堆在一格。成功生成后向东走（或做别的事）。
- **南瓜坏格列表不要多机共享。** 给每台自己的扇区。
- **多个小任务常优于一个巨大任务**（迷宫与部分排行榜作物）：多机跑许多小迷宫，而不是一台超大迷宫。
- 配合：[南瓜](/zh/codes/pumpkin-code/)、[树木](/zh/codes/tree-code/)、[混种](/zh/blog/polyculture-code/)、[迷宫](/zh/codes/maze-code/)。

## 与混种、南瓜的关系

[混种](/zh/blog/polyculture-code/)里多机加快扫列；伴生请求字典要小心用参数或分区。[南瓜](/zh/codes/pumpkin-code/)不要共享同一坏格列表。Megafarm 不取消作物规则，只是并行干活。

刚解锁多机时，先用简单列式收干草或木头确认 `spawn_drone` 与上限，再搬到复杂脚本。

## FAQ

**为什么 spawn_drone 返回 None？** 已达 `max_drones()`（含父机）。

**无人机共享变量吗？** 把每台程序当独立。用参数和 `wait_for` 返回值，不要所有人写同一全局列表。

**子机还能再生成吗？** 能。每个存活单位都占上限。

**接下来？** 扩展[南瓜](/zh/codes/pumpkin-code/)与[混种](/zh/blog/polyculture-code/)，或回[教程](/zh/tutorial/)补语言基础。
