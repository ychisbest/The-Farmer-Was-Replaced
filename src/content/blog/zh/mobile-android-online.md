---
title: "编程农场手机版：官方安卓 Google Play、iOS 与 APK 安全指南（2026）"
description: "编程农场（The Farmer Was Replaced）官方安卓（Google Play）与 iOS 下载入口，严防第三方 APK 风险；附触屏键盘长按单括号隐藏技巧、矿场 DLC 新手避坑与手机端常用 API 速查。"
date: 2026-10-16
updatedDate: 2026-11-17
---

**2026-11-02 更新：** 编程农场已正式登陆 **安卓和 iOS**。手机版由 Ateo 移植、Metaroot 发行，并内含首个 DLC [《The Miner Was Replaced》](/zh/blog/the-miner-was-replaced/)。本页以前写的“没有手机版”已经不成立。

## 简短回答

| 平台 | 官方？ | 说明 |
|------|--------|------|
| 安卓 | **有**（2026-11-02 起） | Google Play，触屏代码键盘，含 DLC |
| iPhone / iPad | **有**（2026-11-02 起） | App Store，功能与安卓相同 |
| Windows（Steam） | 有 | 原生 |
| macOS（Steam） | 有 | 2025 年 12 月更新起原生 |
| Linux / Steam Deck | 可玩 | 通过 Proton；建议外接键盘 |
| 网页版 / 在线 | **没有** | 没有官方网页版，本站是攻略 |

## 安卓和 iOS 版

<div class="not-prose grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6 items-start my-5">
  <div class="prose lg:prose-sm dark:prose-invert max-w-none">
    <p>官方手机版页面是 <a href="https://farmer.ateo.ch/">farmer.ateo.ch</a>，从这里跳转到 <a href="https://apps.apple.com/app/the-farmer-was-replaced/id6790322035">App Store</a> 和 <a href="https://play.google.com/store/apps/details?id=com.TheFarmerWasReplaced.TheFarmerWasReplaced">Google Play</a>。只从这两个商店安装。</p>
    <ul>
      <li><strong>电脑版的全部内容</strong>：循环、变量、函数、列表、Megafarm 多无人机、模拟模式、成就和帽子。</li>
      <li><strong>为触屏设计的代码键盘</strong>：所有符号在一屏，括号和引号成对输入，在任意键上滑动即可移动光标。</li>
      <li>支持 <strong>蓝牙键盘和鼠标</strong>。</li>
      <li><strong>内含《The Miner Was Replaced》</strong>：地下采矿、8 种新资源、蘑菇分拣、遗迹和扫雷式谜题。</li>
    </ul>
  </div>
  <figure class="m-0 mx-auto w-56 md:w-full">
    <img src="/images/mobile/mobile-screenshot-2.webp" alt="编程农场手机版竖屏代码与自动收获界面" class="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm" loading="lazy" />
    <figcaption class="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">手机端竖屏代码与农场运行界面</figcaption>
  </figure>
</div>

购买前须知：

- **Steam 版和手机版需要分别购买**，Steam 已购不会解锁 App。
- 发行商公告下有玩家提到手机版有 **免费试玩**，以你设备上的商店页为准。
- **触屏键盘隐藏技巧（输入单个括号）：** 默认会自动成对补全括号，改单个括号时容易误删。**长按括号键** 即可只输入单个 `(` 或 `)`，不必整段删掉重写。
- 手机版客服邮箱：farmer@ateo.ch。

## 新手需要担心内含的《The Miner Was Replaced》DLC 太复杂吗？

<div class="not-prose grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6 items-start my-5">
  <div class="prose lg:prose-sm dark:prose-invert max-w-none">
    <p>不需要。虽然手机版默认捆绑了矿场 DLC（新增煤炭、石英、蘑菇、炸药等 8 种地下资源），但<strong>在科技树里主动解锁采矿升级前，地下采矿机制完全处于关闭状态</strong>。新手可以安心先玩透基础农场循环，等熟练后再解锁矿场。</p>
  </div>
  <figure class="m-0 mx-auto w-56 md:w-full">
    <img src="/images/mobile/mobile-screenshot-1.webp" alt="编程农场手机版地下采矿与蘑菇分拣界面" class="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm" loading="lazy" />
    <figcaption class="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">矿场 DLC（科技树解锁后才启用）</figcaption>
  </figure>
</div>

## 网上的“编程农场 APK”能下载吗？

**不要**从第三方镜像站下载来路不明的 `.apk` 安装包。目前唯一正版安卓渠道是 **Google Play**（包名 `com.TheFarmerWasReplaced.TheFarmerWasReplaced`），可从官网 [farmer.ateo.ch](https://farmer.ateo.ch/) 跳转安装，切勿冒险安装修改版 APK。

## Mac 能玩吗

可以。Steam 版自 2025 年 12 月更新起 **原生支持 macOS**，不再需要 Porting Kit、Wine 或 CrossOver。

## 有网页版吗

没有官方网页版。声称“在线玩”的网站和来路不明的 APK 都是仿冒或不安全下载。本站是独立攻略站，只提供可复制的脚本。

## 手机上写代码的建议

- 先写短程序：`while True:` → `if can_harvest(): harvest()` → `move(North)`。
- 多用函数、保持文件短小。
- 用模拟模式先测试再跑到农场上。
- 在手机上复制本站的[基础代码](/zh/basic-codes/)、[南瓜代码](/zh/codes/pumpkin-code/)，粘贴进 App。

### 手机端常用 API 速查（免切屏翻文档）

- `harvest()` — 收获当前格作物
- `can_harvest()` — 当前格是否成熟（返回 `True`/`False`）
- `till()` — 翻土（种胡萝卜/南瓜前需要）
- `plant(Entities.Carrot)` — 种植指定作物
- `move(North)` / `South` / `East` / `West` — 向指定方向移动一格

## 常见问题

**编程农场有安卓版吗？** 有，2026-11-02 起上架 Google Play。

**iPhone / iPad 能玩吗？** 能，App Store 有 iOS 版。

**手机版包含编程矿场 DLC 吗？** 包含。

**Steam 买过，手机版免费吗？** 不免费，需要单独购买。

**有免费网页版吗？** 没有官方版本。

## 相关页面

- [《The Miner Was Replaced》DLC 介绍](/zh/blog/the-miner-was-replaced/)
- [完整教程](/zh/tutorial/)
- [用 VS Code 写编程农场代码](/zh/blog/vscode-external-editor/)
