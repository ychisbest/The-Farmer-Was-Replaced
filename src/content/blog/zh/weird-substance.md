---
title: "Weird Substance 代码与农场 — 编程农场"
description: "如何刷 Weird Substance：肥料感染、use_item、起步循环，以及迷宫如何消耗它。"
date: 2026-10-16
---

**Weird Substance** 是生成树篱迷宫所需物品，也是中期有用资源。本页讲 **Weird Substance 代码与刷取**、如何囤积，以及和迷宫的关系——不和目前误吸部分流量的[迷宫代码](/zh/codes/maze-code/)页混在一起。

## Weird Substance 是什么

植物被**感染**后收割，一半正常产量会变成 `Items.Weird_Substance`。感染来自肥料（以及 Weird Substance 本身）。之后对灌木使用 `use_item(Items.Weird_Substance, amount)` 可生成迷宫。

关键规则：

- `use_item(Items.Fertilizer)` 把剩余生长时间砍 2 秒，**并感染**脚下植物。
- 收割感染植物：一半产量变 Weird Substance。
- 对植物 `use_item(Items.Weird_Substance)` 会**切换**自身与邻格感染状态（健康变感染、感染变健康，并翻转邻居）。
- 迷宫：种灌木，再 `use_item(Items.Weird_Substance, n)` 生成 n×n 树篱迷宫（用量随迷宫升级放大）。

## 起步刷取（肥料循环）

肥料会随时间回复（基础约每 10 秒 1 个，升级翻倍）。简单干草循环用肥料感染再收物质：

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
        while not can_harvest():
            if get_water() < 0.5:
                use_item(Items.Water)
        harvest()
        move(North)

farm_weird_substance(200)
```

尽量用草/干草：种植成本低，可不花木头胡萝卜就把肥料烧成物质。若已有[树木农场](/zh/codes/tree-code/)，收前感染也能把一半木头变成物质。

## 更快：先种感染，再扩散

肥料收入慢。常见做法：

1. 先肥料收一小批，攒启动用 Weird Substance。
2. 在大片干草或树木田对健康植株 `use_item(Items.Weird_Substance)`，让感染传到邻居。
3. 整田收割——每株感染植物一半产量再变物质。

大田上可用少得多的肥料 tick 感染大部分格子。规划放置，让感染格覆盖田，而不是把物质浪费在已感染株上。

## Weird Substance 与迷宫

生成迷宫需要脚下有灌木：

```python
plant(Entities.Bush)
n = get_world_size() * 2 ** (num_unlocked(Unlocks.Mazes) - 1)
use_item(Items.Weird_Substance, n)
```

左墙求解与 `measure()` 寻宝见[迷宫代码](/zh/codes/maze-code/)。本页专注**刷取**物品。

## 进迷宫前先囤多少

实用规则：先稳定刷取循环，再花钱。若每个迷宫把库存掏空，你会一直缺 Weird Substance、打断刷金。先攒缓冲（起步可用数百为单位，具体看世界大小与迷宫升级），再批量刷树篱。

与[多无人机](/zh/blog/multiple-drones/)很搭：多个小迷宫常优于一个超大迷宫。先确保物质产出跟得上消耗。

## 生成迷宫前小清单

1. 脚下有灌木。
2. 库存够这次尺寸。
3. 明确用左墙还是 `measure()` 路径。
4. 刷完金再开感染循环，别把田放空。

## 常见错误

- 施肥后立刻收、植物还没长完。
- 还没稳定刷取就全花在迷宫上。
- 在从不讲肥料感染的迷宫页搜「weird substance code」。
- 误治疗：对已感染株再用 Weird Substance 会翻回健康。

## FAQ

**南瓜或混种需要吗？** 不需要。见[南瓜代码](/zh/codes/pumpkin-code/)与[混种代码](/zh/blog/polyculture-code/)。

**为什么要肥料？** 它是制造首批感染的可靠方式。没有肥料（或用已有物质扩散）就刷不出 Weird Substance。

**接下来？** 物质稳定后看[迷宫代码](/zh/codes/maze-code/)与[多无人机](/zh/blog/multiple-drones/)加快刷金。
