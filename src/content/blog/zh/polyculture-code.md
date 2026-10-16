---
title: "混种代码 — 编程农场 get_companion 指南"
description: "可用的混种（polyculture）代码。讲清 get_companion()、如何在正确格子种伴生植物，并提高草、木头和胡萝卜产量。"
date: 2026-10-16
---

混种（polyculture）会让草、灌木、树和胡萝卜在「正确伴生植物长在正确格子」时产量大增。本文说明 `get_companion()` 返回什么、为什么朴素写法会失败，并给出可粘贴扩展的混种代码。

若还在搭第一座农场，先看[基础代码](/zh/basic-codes/)和[树木代码](/zh/codes/tree-code/)。混种建立在这两者之上。

## 混种做什么

每株草、灌木、树和胡萝卜都可能有**伴生偏好**。在它指定的位置种下指定植物，再收割原植物，就能拿高额产量加成。升级前倍率是 5，每次升级翻倍。因此混种是中期干草、木头、胡萝卜最强增益之一。

代码必须遵守的规则：

- 偏好对每株植物随机，不可预测，只能读取。
- 伴生一定是不同类型：草、灌木、树或胡萝卜之一。
- 目标格在 3 步以内，但绝不是植物自身格子。
- 伴生的生长阶段无关。收割时种在那里即可。

## get_companion() 怎么用

把无人机停在植物上调用 `get_companion()`。耗时一个 tick，返回 `None`（无偏好）或元组：想要的实体类型，以及 `(x, y)` 坐标。

```python
companion = get_companion()
if companion != None:
    plant_type, (x, y) = companion
    print("Companion:", plant_type, "at", x, ",", y)
```

例如灌木可能返回 `(Entities.Carrot, (3, 5))`：在 (3, 5) 种胡萝卜，再收这棵灌木，木头更多。

务必拆包坐标。不要假设伴生就在旁边。API 只保证坐标，不保证方向。

## 为什么简单做法会失败

直觉做法：读伴生 → 走过去种 → 走回 → 收。小农场能用，但浪费大量移动。更糟的是目标格可能已有植物，且它自己也有伴生请求，重种会丢掉请求。

更好模式是**用字典记住请求**，正常扫田扫到那格再兑现。无人机保持按行路线，混种几乎白捡。

## 混种代码（扫田 + 字典）

整田扫描。每格先看是否有其他植物请求在此放伴生；有则种伴生，否则种主作物并记录它自己的请求。

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

按目标把 `Entities.Tree` 换成 `Entities.Bush`、`Entities.Carrot` 或 `Entities.Grass`。纯干草农场可跳过 `plant()`，只读伴生。

### 代码注意点

- `companions.pop(pos)` 读取并删除请求，每个请求只兑现一次。
- `if target not in companions` 避免两株植物抢同一格。
- 胡萝卜需要翻地，种胡萝卜前会 `till()`。
- 树邻树生长变慢；混种也有帮助。间距见[树木代码](/zh/codes/tree-code/)。

## 多无人机下的混种

解锁更多无人机后，同一字典仍可用。各机扫自己的列；共享全局 `companions` 时，一台记录的请求可由先到该格的另一台兑现。给每台起始列，跑同一套 `plant_tile()`。Megafarm、`spawn_drone` 与按列模板见[多无人机](/zh/blog/multiple-drones/)。

## 常见错误

- **伴生未种就收割。** 加成只在收割时伴生已就位才算。
- **用主作物盖掉伴生。** 种默认作物前先查请求字典。
- **假设固定偏移。** 每次都读 `(x, y)`。
- **忘记为胡萝卜翻地。** 未翻地草地上种不出胡萝卜伴生。

## FAQ

**哪些植物吃混种？** 草、灌木、树、胡萝卜。南瓜、仙人掌、向日葵另有机制。

**伴生要长熟吗？** 不要。生长阶段无关。

**加成多大？** 升级前 5 倍，每次混种升级翻倍。

**接下来种什么？** 看[南瓜代码](/zh/codes/pumpkin-code/)、[向日葵代码](/zh/codes/sunflower-code/)或全部[基础代码](/zh/basic-codes/)。
