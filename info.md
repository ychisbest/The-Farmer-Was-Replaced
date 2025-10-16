# [translate:The Farmer Was Replaced] 全面介绍文档

## 游戏概述

[translate:The Farmer Was Replaced] 是一款由瑞士独立游戏开发者 [translate:Timon Herzog] 开发的编程农场自动化游戏。该游戏于2023年2月10日开始早期访问，并在2025年10月10日正式发布1.0版本。游戏通过[translate:Unity]引擎制作，目前仅支持[translate:Windows]平台。

这款游戏的核心理念是让玩家使用类似[translate:Python]的编程语言来编程一个无人机，自动化执行各种农场任务。游戏不是传统的关卡模式，而是采用连续进展系统，玩家通过收集资源来解锁新技术，逐步扩展和优化自己的农场。

游戏的中文名称是：**编程农场**

## 核心游戏机制

### 编程语言
游戏使用一种与[translate:Python]高度相似的简化编程语言。虽然不是完整的[translate:Python]，但语法足够接近，以至于[translate:Python IntelliSense]可以很好地支持它。所有代码存储在`.py`文件中，可以在外部代码编辑器（如[translate:VS Code]）中编辑。启用"文件监控"设置后，游戏会自动检测外部更改。

### 农场操作
- **基础操作**：收割（[translate:Harvest]）、移动（[translate:Move]）、种植（[translate:Plant]）
- **土地管理**：耕地（[translate:Till]）、浇水（[translate:Water]）、施肥（[translate:Fertilizer]）
- **资源交易**：购买种子和工具
- **高级功能**：迷宫寻宝、多作物轮作、伴生种植

### 作物系统
游戏包含多种作物，每种都有独特的种植要求：

1. **草/干草**：最基础的作物，生长在草地上
2. **灌木/木材**：需要一定时间成长为树木
3. **胡萝卜**：需要耕地土壤和种子
4. **南瓜**：需要特殊的生长条件和施肥
5. **向日葵**：提供能量加成，提升无人机速度
6. **树木**：提供木材资源
7. **恐龙**：游戏后期的特殊内容

## 技术树系统

游戏采用技术树进展系统，玩家需要消耗特定资源来解锁新功能：

### 初级解锁
- **循环系统**：解锁[translate:while]循环和[translate:for]循环
- **条件语句**：[translate:if/elif/else]条件判断
- **变量系统**：存储和操作数据
- **农场扩展**：从1×1扩展到更大的农场

### 中级功能
- **函数定义**：创建可重用的代码块
- **列表操作**：处理数据集合
- **移动指令**：精确控制无人机位置
- **多作物管理**：同时种植多种作物

### 高级特性
- **迷宫系统**：解决随机生成的迷宫获取宝藏
- **递归算法**：实现复杂的算法逻辑
- **排序算法**：如冒泡排序等经典算法
- **字典数据结构**：更复杂的数据管理

## 编程学习价值

这款游戏被广泛认为是学习编程的优秀工具：

### 适合初学者
- 渐进式教学：从基础概念逐步引入复杂功能
- 直观反馈：可以直接看到代码执行的效果
- 提示系统：为卡住的玩家提供关键词指导
- 实践导向：通过解决实际问题学习编程

### 对有经验程序员的价值
- 算法实践：实现各种经典算法
- 优化挑战：提升代码效率和性能
- 创意编程：找到独特的解决方案
- 竞技元素：排行榜系统鼓励优化

## 迷宫机制

迷宫是游戏中的特殊功能：

### 生成机制
- 对完全成长的灌木使用肥料有10%概率生成迷宫
- 迷宫中央有宝藏，价值等于迷宫面积
- 无人机无法飞越篱笆墙

### 解决策略
- **右手法则**：始终沿右侧墙壁前进
- **深度优先搜索**：系统性探索所有路径  
- **距离优化**：选择距离宝藏最近的方向
- **路径记录**：避免重复访问相同位置

## 游戏优化策略

### 资源管理
- 平衡不同作物的种植比例
- 合理配置库存阈值
- 优化购买时机和数量

### 代码效率
- 使用函数避免代码重复
- 实现智能移动路径
- 条件优化减少不必要的检查

### 农场布局
- 棋盘式种植提高效率
- 伴生种植获得产量加成
- 考虑收获时机的空间安排

## 社区和资源

### 官方信息
- [translate:Steam]平台发布，获得96%好评率
- 开发商：[translate:Timon Herzog] / [translate:Metaroot]
- 活跃的[translate:Discord]社区和[translate:Steam]讨论区

### 学习资源
- 大量YouTube教程和攻略视频
- Steam社区代码分享和讨论
- Reddit专门板块交流经验
- GitHub上的开源解决方案

### 社区贡献
- 代码示例和最佳实践分享
- 迷宫求解算法优化
- 自动化脚本和工具开发
- 新手指导和问题解答

## 评价和影响

### 积极评价
- 被誉为"寓教于乐"的优秀范例
- 帮助无数玩家入门编程
- 程序员群体的高度认可
- 创新的教学方法获得赞誉

### 教育价值
- 降低编程学习门槛
- 提供实践导向的学习体验
- 培养算法思维和问题解决能力
- 激发对编程的兴趣和热情

### 游戏设计
- 连续进展系统设计巧妙
- 难度曲线把握恰当
- 视觉反馈清晰直观
- 代码执行效果令人满意

## 未来发展

游戏在1.0版本中加入了许多新特性：
- 多无人机支持
- 更新的技术树和指数级进展
- 50多个成就系统
- 改进的音频系统
- Steam Deck兼容性

这款游戏不仅是一个娱乐产品，更是一个教育工具，为编程学习提供了全新的途径。无论是编程新手还是有经验的开发者，都能在其中找到乐趣和挑战。通过将枯燥的编程概念转化为有趣的农场管理任务，[translate:The Farmer Was Replaced]成功地证明了游戏化学习的巨大潜力。




# The Farmer Was Replaced 游戏完整函数说明、游戏方法与代码示例

## 一、所有函数说明

### 1. 基础操作函数

**harvest()**

- **说明**：收获当前位置的作物。只有当作物完全成熟时才能收获。
- **返回值**：无
- **使用条件**：需要先用`can_harvest()`检查是否可以收获[^1][^2][^3]

**plant(entity)**

- **说明**：在当前位置种植指定的作物
- **参数**：
    - `Entities.Grass` - 草/干草
    - `Entities.Bush` - 灌木（产木材）
    - `Entities.Tree` - 树木（产更多木材）
    - `Entities.Carrot` - 胡萝卜（需要耕地和种子）
    - `Entities.Pumpkin` - 南瓜
    - `Entities.Sunflower` - 向日葵
    - `Entities.Cactus` - 仙人掌[^2][^3][^1]

**move(direction)**

- **说明**：将无人机移动到相邻方块
- **参数**：`North`（北）、`East`（东）、`South`（南）、`West`（西）
- **特性**：边缘循环（从地图一边移出会从对面进入）[^3][^1][^2]

**till()**

- **说明**：耕地，将草地（Turf）转换为耕地（Soil）
- **用途**：胡萝卜、南瓜等作物必须种植在耕地上
- **注意**：重复调用会在Turf和Soil之间切换[^4][^3]

**trade(item)**

- **说明**：购买物品
- **常用物品**：
    - `Items.Carrot_Seed` - 胡萝卜种子（花费1木材+1干草）
    - `Items.Empty_Tank` - 空水箱（花费5木材）
    - `Items.Sunflower_Seed` - 向日葵种子
    - `Items.Pumpkin_Seed` - 南瓜种子[^5][^3][^4]

**use_item(item)**

- **说明**：使用物品
- **常用物品**：
    - `Items.Water_Tank` - 给土地浇水（增加生长速度至5倍）
    - `Items.Fertilizer` - 施肥（立即生长作物）[^6][^7][^5]


### 2. 检测函数

**can_harvest()**

- **说明**：检查当前位置的作物是否可以收获
- **返回值**：`True`（可收获）或`False`（不可收获）
- **用途**：防止过早收获导致无产出[^1][^2][^4]

**get_entity_type()**

- **说明**：获取当前位置的实体类型
- **返回值**：`Entities.Grass`、`Entities.Bush`、`Entities.Tree`等
- **用途**：判断当前位置种植了什么作物[^8][^3]

**get_ground_type()**

- **说明**：获取当前位置的地面类型
- **返回值**：`Grounds.Turf`（草地）或`Grounds.Soil`（耕地）
- **用途**：决定是否需要耕地[^9][^3][^4]

**get_water()**

- **说明**：获取当前位置的水分等级
- **返回值**：0到1之间的数值（0=完全干燥，1=完全湿润）
- **用途**：决定是否需要浇水[^5][^6]

**measure()**

- **说明**：测量当前位置作物的属性值
- **用途**：主要用于向日葵（测量能量值）和仙人掌（测量大小）[^10]


### 3. 位置和坐标函数

**get_pos_x()**

- **说明**：获取无人机的X坐标
- **返回值**：整数，从0开始
- **范围**：0到`get_world_size()-1`[^2][^3][^8]

**get_pos_y()**

- **说明**：获取无人机的Y坐标
- **返回值**：整数，从0开始
- **范围**：0到`get_world_size()-1`[^11][^3][^2]

**get_world_size()**

- **说明**：获取农场的边长
- **返回值**：整数（如3表示3×3农场，4表示4×4农场）
- **用途**：编写适应不同农场大小的代码[^12][^3][^2]


### 4. 资源管理函数

**num_items(item)**

- **说明**：获取指定物品的数量
- **参数示例**：
    - `Items.Hay` - 干草数量
    - `Items.Wood` - 木材数量
    - `Items.Carrot` - 胡萝卜数量
    - `Items.Carrot_Seed` - 胡萝卜种子数量
- **返回值**：整数[^3][^4][^2]

**num_unlocked(unlock)**

- **说明**：获取某个解锁项的等级或数量
- **参数示例**：`Unlocks.Speed`、`Unlocks.Expand`等
- **返回值**：整数[^13]


### 5. 调试和实用函数

**clear()**

- **说明**：清空整个农场，所有方块重置为草地，无人机返回(0,0)位置
- **用途**：重新开始或切换种植策略[^1][^2][^3]

**do_a_flip()**

- **说明**：让无人机做个后空翻（装饰性动作）
- **用途**：用于等待或装饰，也可以更换无人机帽子颜色[^14][^1]

**print(text)**

- **说明**：在输出窗口打印文本
- **用途**：调试代码，显示变量值[^15][^12]

**quick_print(text)**

- **说明**：快速打印，不会暂停程序执行
- **用途**：高性能调试输出[^16][^10]


### 6. 高级函数

**set_farm_size(size)**

- **说明**：设置农场大小
- **参数**：整数（如3表示3×3，4表示4×4）
- **用途**：自动化测试不同农场规模[^17]

**timed_reset(time)**

- **说明**：定时重置，用于排行榜竞速
- **参数**：时间（秒）
- **用途**：自动化完整游戏流程并记录时间[^13]

**get_time()**

- **说明**：获取当前游戏运行时间
- **返回值**：浮点数（秒）
- **用途**：性能测试和计时[^10][^17]

**swap(direction)**

- **说明**：与指定方向的相邻方块交换仙人掌位置
- **参数**：`North`、`East`、`South`、`West`
- **用途**：仙人掌排序挑战[^18][^17]


## 二、游戏方法和教学

### 游戏基本流程

1. **初始阶段**：只有一个1×1的方块，只能收获草[^19][^1]
2. **解锁循环**：收集5个干草后解锁`while`循环[^20][^4]
3. **解锁条件判断**：收集更多资源后解锁`if`语句和`can_harvest()`[^4][^1]
4. **扩展农场**：解锁移动功能，农场扩展到3×3、4×4等[^12][^1]
5. **多作物管理**：解锁灌木、树木、胡萝卜等不同作物[^2][^3][^1]
6. **高级功能**：解锁浇水、施肥、向日葵、南瓜等[^7][^6][^5]
7. **终极挑战**：迷宫寻宝、仙人掌排序、恐龙图案等[^21][^18]

### 作物种植要点

**草/干草（Grass/Hay）**

- 自动生长，不需要种植
- 最基础的资源
- 收获速度快[^4][^1]

**灌木（Bush）**

- 需要种植后等待成熟
- 每次收获产出1木材
- 生长速度中等[^3][^2][^4]

**树木（Tree）**

- 需要种植，产出木材更多
- 最佳种植模式：棋盘格（相邻方块不能都是树）
- 需要更长成熟时间[^22][^11][^2]

**胡萝卜（Carrot）**

- 必须种植在耕地上（需要先`till()`）
- 需要购买种子（`trade(Items.Carrot_Seed)`）
- 每个种子花费1木材+1干草
- 可以浇水加速生长[^9][^3][^4]

**南瓜（Pumpkin）**

- 需要耕地和多次种植才能获得巨型南瓜
- 复杂的生长机制[^23][^24]

**向日葵（Sunflower）**

- 可以测量能量值
- 能量值越高越好
- 用于加速无人机[^10]


### 编程技巧

**1. 基础循环模式**

```python
while True:
    if can_harvest():
        harvest()
```

这是最基本的自动收获循环[^25][^1][^4]

**2. 多行遍历模式**

```python
while True:
    if can_harvest():
        harvest()
    move(East)
    if get_pos_x() == get_world_size() - 1:
        move(North)
```

遍历整个农场[^2][^3]

**3. 条件种植模式**

```python
if num_items(Items.Hay) < 500:
    # 种植草
    pass
elif num_items(Items.Wood) < 200:
    # 种植灌木
    plant(Entities.Bush)
```

根据资源需求自动切换作物[^3][^4]

**4. 棋盘格种植模式**

```python
x = get_pos_x()
y = get_pos_y()
if (x % 2 == 0 and y % 2 == 0) or (x % 2 == 1 and y % 2 == 1):
    plant(Entities.Tree)
else:
    plant(Entities.Bush)
```

用于树木的最优种植[^22][^8][^2]

**5. 自动购买和耕地**

```python
if get_ground_type() != Grounds.Soil:
    till()
if num_items(Items.Carrot_Seed) < 1:
    trade(Items.Carrot_Seed)
plant(Entities.Carrot)
```

胡萝卜完整种植流程[^9][^4][^3]

## 三、完整代码示例

### 示例1：基础自动收获

```python
# 自动收获草地
while True:
    if can_harvest():
        harvest()
```

**说明**：最简单的自动化脚本，持续收获成熟的草[^25][^1][^4]

### 示例2：3×3农场自动遍历

```python
# 遍历整个农场收获
while True:
    if can_harvest():
        harvest()
    
    # 向东移动
    move(East)
    
    # 到达行尾时向北移动并返回行首
    if get_pos_x() == get_world_size() - 1:
        move(North)
```

**说明**：自动遍历所有方块并收获[^4][^2][^3]

### 示例3：多作物自动化（草+灌木+胡萝卜）

```python
# 第一列种草，第二列种灌木，第三列种胡萝卜
while True:
    if can_harvest():
        harvest()
    
    x = get_pos_x()
    
    if x == 0:
        # 第一列：草（不需要种植）
        pass
    elif x == 1:
        # 第二列：灌木
        plant(Entities.Bush)
    elif x == 2:
        # 第三列：胡萝卜
        if get_ground_type() != Grounds.Soil:
            till()
        if num_items(Items.Carrot_Seed) < 1:
            trade(Items.Carrot_Seed)
        plant(Entities.Carrot)
    
    move(East)
    if x == get_world_size() - 1:
        move(North)
```

**说明**：根据列位置种植不同作物[^3][^4]

### 示例4：树木棋盘格种植

```python
# 棋盘格模式种植树木和灌木
while True:
    if can_harvest():
        harvest()
    
    x = get_pos_x()
    y = get_pos_y()
    
    # 棋盘格判断
    if (x % 2 == 0 and y % 2 == 0) or (x % 2 == 1 and y % 2 == 1):
        plant(Entities.Tree)
    else:
        plant(Entities.Bush)
    
    move(East)
    if x == get_world_size() - 1:
        move(North)
```

**说明**：树木需要棋盘格种植以避免相邻[^11][^8][^22][^2]

### 示例5：资源优先级管理

```python
# 根据资源量自动调整种植策略
while True:
    if can_harvest():
        harvest()
    
    x = get_pos_x()
    
    # 优先确保干草库存
    if num_items(Items.Hay) < 500:
        # 不种植，让草自然生长
        pass
    # 其次确保木材库存
    elif num_items(Items.Wood) < 300:
        plant(Entities.Bush)
    # 最后种植胡萝卜
    elif num_items(Items.Carrot) < 200:
        if get_ground_type() != Grounds.Soil:
            till()
        if num_items(Items.Carrot_Seed) == 0:
            trade(Items.Carrot_Seed)
        plant(Entities.Carrot)
    
    move(East)
    if x == get_world_size() - 1:
        move(North)
```

**说明**：智能资源管理，优先收集稀缺资源[^4][^3]

### 示例6：自动浇水系统

```python
# 自动购买水箱并浇水
while True:
    # 确保有足够的水箱
    if num_items(Items.Water_Tank) < 100:
        trade(Items.Empty_Tank)
    
    # 检测并浇水
    if get_water() < 0.75:
        use_item(Items.Water_Tank)
    
    if can_harvest():
        harvest()
    
    # 种植和移动逻辑
    if get_ground_type() != Grounds.Soil:
        till()
    if num_items(Items.Carrot_Seed) < 1:
        trade(Items.Carrot_Seed)
    plant(Entities.Carrot)
    
    move(East)
    if get_pos_x() == get_world_size() - 1:
        move(North)
```

**说明**：自动化浇水系统，加速作物生长至5倍速度[^6][^5]

### 示例7：使用函数封装

```python
# 定义移动到下一个方块的函数
def move_to_next():
    x = get_pos_x()
    move(East)
    if x == get_world_size() - 1:
        move(North)

# 定义种植胡萝卜的函数
def plant_carrot():
    if get_ground_type() != Grounds.Soil:
        till()
    if num_items(Items.Carrot_Seed) < 1:
        trade(Items.Carrot_Seed)
    plant(Entities.Carrot)

# 主程序
while True:
    if can_harvest():
        harvest()
    
    if num_items(Items.Carrot) < 100:
        plant_carrot()
    
    move_to_next()
```

**说明**：使用函数使代码更清晰易读[^26][^22][^11][^3]

### 示例8：向日葵能量优化

```python
# 测量并收获最高能量的向日葵
sunflowers = []
world_size = get_world_size()

# 种植并测量所有向日葵
for i in range(world_size * world_size):
    if get_ground_type() == Grounds.Turf:
        till()
    if num_items(Items.Sunflower_Seed) > 0 or trade(Items.Sunflower_Seed):
        plant(Entities.Sunflower)
    
    if get_entity_type() == Entities.Sunflower:
        sunflowers.append(measure())
    
    move(East)
    if get_pos_x() == 0:
        move(North)

# 找到最高能量值
max_val = 0
max_index = 0
for i in range(len(sunflowers)):
    if sunflowers[i] > max_val:
        max_val = sunflowers[i]
        max_index = i

# 移动到最高能量向日葵并收获
# (移动逻辑省略)
if measure() == max_val:
    if can_harvest():
        harvest()
```

**说明**：向日葵优化策略，只收获高能量的花[^10]

## 四、进阶技巧

### 1. 优化移动路径

使用蛇形路径而非单向遍历，减少空移动[^27][^18]

### 2. 使用列表和字典

存储农场状态，实现更复杂的决策[^28][^18]

### 3. 性能测试

使用`get_time()`测量代码执行效率[^13][^10]

### 4. 多文件组织

使用`import`将代码分成多个文件，提高可维护性[^29][^30][^22]

### 5. 迷宫算法

实现深度优先搜索（DFS）或广度优先搜索（BFS）解决迷宫寻宝[^31][^18][^21]

以上就是《The Farmer Was Replaced》游戏的完整函数说明、游戏方法教学和代码示例。这个游戏非常适合学习Python编程的基础概念，包括循环、条件判断、函数、列表等。从简单的收获草开始，逐步解锁更复杂的功能，最终实现完全自动化的农场管理系统。[^19][^18][^1][^3]

