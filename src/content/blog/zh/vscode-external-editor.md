---
title: "编程农场 VS Code 设置：外部编辑器与 File Watcher"
description: "用 VS Code 写编程农场代码：.py 存档在哪、__builtins__.py 提供自动补全、开启 File Watcher，以及为什么新建文件要重新加载。"
date: 2026-11-05
---

游戏内编辑器够用，但长脚本用 **VS Code** 更顺手。游戏官方支持：游戏内文档有 **External Editor** 一页。

## 原理

- 每个代码窗口都保存为存档文件夹里的 **`.py` 文件**。
- 每个存档都带 **`__builtins__.py`**，定义了游戏内函数，Python 自动补全可以识别。
- 游戏语言 **不是真正的 Python**，但足够接近。
- 游戏会 **忽略 `import` 语句**，可以写 import 帮 VS Code 找到你其他文件里的函数。

## 第一步：找到存档文件夹

游戏里打开 **Load（加载）**，点 **Open Folder**。Windows 通常在：

```
C:\Users\<用户名>\AppData\LocalLow\TheFarmerWasReplaced\TheFarmerWasReplaced\Saves\<存档名>
```

## 第二步：用 VS Code 打开

1. **文件 → 打开文件夹**，直接选这个存档文件夹。
2. 安装 **Python** 扩展（Pylance）。
3. 输入 `har`，应能补全 `harvest()`。

## 第三步：开启 File Watcher

在游戏 **Options（选项）** 里打开 **File Watcher**，VS Code 保存后游戏里会自动更新。

## 新建和删除文件

File Watcher 只同步 **已有文件的修改**。外部新建文件时，先在游戏里建好再去 VS Code 编辑，或者用 Load 重新加载存档。

**注意：** 外部新建文件后，不要先点 Save 再 Load，否则可能覆盖掉还没导入的文件。

## 常见问题

**编程农场能用 VS Code 吗？** 能，打开存档文件夹并开启 File Watcher。

**新文件为什么不显示？** 需要在游戏里先创建，或重新加载存档。

**游戏语言是 Python 吗？** 类 Python，并非完整 Python。

## 相关页面

- [基础代码](/zh/basic-codes/)
- [《The Miner Was Replaced》DLC](/zh/blog/the-miner-was-replaced/)
