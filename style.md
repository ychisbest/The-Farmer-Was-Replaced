# TFWR 游戏资讯站设计风格指南

## 整体设计原则

### 1. 设计理念
- **极简主义**：采用简洁、清晰的界面设计，减少视觉干扰
- **内容为王**：突出内容展示，使用户专注于阅读和获取信息
- **一致性**：保持整个网站的视觉和交互一致性
- **可访问性**：确保所有用户都能方便地访问和使用网站

### 2. 色彩体系
- **主色调**：中性色系（Neutral）
  - 背景：`bg-neutral-50` (浅灰色背景)
  - 主文字：`text-neutral-900` (深灰色文字)
  - 次要文字：`text-neutral-600` (中等灰色文字)
  - 辅助文字：`text-neutral-500` (浅灰色文字)
- **强调色**：`neutral-900` (深灰色) 用于主要按钮和重要元素
- **白色背景**：`bg-white` 用于卡片、导航栏、页脚等组件
- **边框色**：`border-neutral-200` (浅灰色边框)

### 3. 字体系统
- **字体族**：使用系统默认字体栈
- **字体大小层级**：
  - 主标题：`text-4xl md:text-5xl lg:text-6xl font-bold`
  - 区域标题：`text-3xl md:text-4xl font-bold`
  - 卡片标题：`text-xl font-bold` / `text-2xl font-bold`
  - 导航文字：`text-sm font-medium`
  - 正文：`text-lg` / `text-base`
  - 小文字：`text-sm`

## 布局与结构

### 1. 网格系统
- **最大宽度**：`max-w-7xl` (1280px)
- **响应式间距**：`px-4 sm:px-6 lg:px-8`
- **响应式列数**：
  - 移动端：单列布局
  - 平板端：2列布局 (`md:grid-cols-2`)
  - 桌面端：3-4列布局 (`lg:grid-cols-3` / `lg:grid-cols-4`)

### 2. 页面结构
```
Header (粘性导航)
├── Hero Section (可选)
├── Main Content
│   ├── Page Header (标题区)
│   ├── Content Sections (内容区块)
│   └── Sidebars (侧边栏，可选)
└── Footer
```

### 3. 间距规范
- **页面区块间距**：`py-16 md:py-24`
- **卡片间距**：`gap-8`
- **内部间距**：`p-6`, `p-8`
- **标题与内容间距**：`mb-4`, `mb-6`, `mb-8`

## 组件设计规范

### 1. 导航栏 (Header)
```html
<header class="border-b border-neutral-200 bg-white sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo + 导航链接 -->
        </div>
    </nav>
</header>
```

### 2. 卡片组件
- **基础卡片**：
  ```html
  <div class="border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors">
      <!-- 内容 -->
  </div>
  ```
- **图片卡片**：
  ```html
  <article class="group">
      <div class="aspect-video rounded-lg overflow-hidden bg-neutral-100 mb-4">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
      </div>
      <!-- 文字内容 -->
  </article>
  ```

### 3. 按钮设计
- **主要按钮**：
  ```html
  <a class="px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors">
      按钮文字
  </a>
  ```
- **次要按钮**：
  ```html
  <a class="px-6 py-3 border border-neutral-300 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-colors">
      按钮文字
  </a>
  ```

### 4. 代码展示块
```html
<div class="border border-neutral-200 rounded-lg overflow-hidden">
    <div class="bg-neutral-900 text-white px-6 py-4">
        <span class="text-sm font-medium">标题</span>
        <span class="text-xs text-neutral-400">Python</span>
    </div>
    <pre class="p-6 bg-neutral-50 overflow-x-auto">
        <code class="text-sm text-neutral-800">代码内容</code>
    </pre>
</div>
```

## 交互设计

### 1. 悬停效果
- **链接悬停**：`hover:text-neutral-900 transition-colors`
- **按钮悬停**：`hover:bg-neutral-800` / `hover:bg-neutral-50`
- **卡片悬停**：`hover:border-neutral-400 transition-colors`
- **图片悬停**：`group-hover:scale-105 transition-transform duration-300`

### 2. 过渡动画
- **标准过渡**：`transition-colors`
- **图片变换**：`transition-transform duration-300`
- **统一时长**：150-300ms

### 3. 移动端适配
- **汉堡菜单**：移动端显示，桌面端隐藏
- **响应式布局**：使用 Tailwind 的响应式断点
- **触摸友好**：按钮和链接有足够的点击区域

## 内容设计规范

### 1. 文本样式
- **行高**：`leading-relaxed`
- **颜色层次**：
  - 标题：`text-neutral-900`
  - 正文：`text-neutral-600`
  - 辅助信息：`text-neutral-500`
- **字重**：`font-medium` / `font-bold`

### 2. 图片处理
- **比例**：`aspect-video` (16:9)
- **圆角**：`rounded-lg`
- **背景色**：`bg-neutral-100`
- **填充方式**：`object-cover`

### 3. 列表设计
- **无序列表**：使用圆点装饰 `w-1.5 h-1.5 bg-neutral-400 rounded-full`
- **有序列表**：使用数字标记
- **间距**：`space-y-2` / `space-y-3`

## 页面特色功能

### 1. 粘性导航
- `sticky top-0 z-50`
- 背景模糊效果
- 阴影和边框

### 2. 页面头部
- 统一的页面标题设计
- 简洁的描述文字
- 白色背景 + 底部边框

### 3. 内容区域
- 充足的留白
- 清晰的信息层级
- 统一的卡片风格

### 4. 页脚设计
- 4列网格布局
- 简洁的版权信息

## 技术栈要求

### 1. CSS 框架
- **Tailwind CSS**

### 2. JavaScript
- 原生 JavaScript (无需框架)
- 移动端菜单切换功能
- 平滑滚动效果 (可选)

### 3. HTML 语义化
- 使用语义化标签 (header, nav, main, section, article, footer)
- 合理的标题层级 (h1-h6)
- 良好的可访问性支持


这个设计风格指南确保了整个网站的视觉一致性、用户体验的连贯性，以及代码的可维护性。所有新页面和组件都应遵循这些设计原则和规范。