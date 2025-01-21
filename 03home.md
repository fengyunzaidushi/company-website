# 首页实现文档

## 页面结构

首页采用模块化设计，由以下几个主要部分组成：

1. Hero 区域 (HeroSection)

   - 全屏背景图
   - 主标题和副标题
   - CTA 按钮

2. 课程展示 (CoursesSection)

   - 课程卡片列表
   - 每个课程包含图片、标题、描述、时长和价格

3. 教练团队 (InstructorsSection)

   - 教练信息卡片
   - 圆形头像展示
   - 个人简介

4. 联系方式 (ContactSection)
   - 联系信息
   - 地图展示

## 技术实现

### 1. 基础 UI 组件

#### Button 组件

```typescript
// 支持多种样式变体和尺寸
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}
```

#### Container 组件

- 控制内容最大宽度
- 响应式边距处理
- 居中对齐

### 2. 图片处理

使用 Next.js 的 Image 组件进行优化：

- 自动懒加载
- 自动响应式图片
- 自动优化图片格式和大小

配置：

```javascript
// next.config.js
{
  images: {
    domains: ["placehold.co"];
  }
}
```

### 3. 响应式设计

采用 Tailwind CSS 的响应式类名：

- sm: >= 640px
- md: >= 768px
- lg: >= 1024px
- xl: >= 1280px

示例：

```tsx
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
```

### 4. 性能优化

1. 图片优化

   - 使用 Next.js Image 组件
   - Hero 区域图片添加 priority 属性
   - 使用 fill 属性适配容器

2. 组件优化
   - 静态组件提取
   - 适当的语义化标签
   - 条件渲染优化

## 组件详解

### 1. HeroSection

```typescript
export function HeroSection() {
  return (
    <div className="relative bg-gray-900">
      {/* 背景图片 */}
      <Image fill priority ... />
      {/* 内容区域 */}
      <Container>...</Container>
    </div>
  )
}
```

特点：

- 全屏背景设计
- 图片叠加暗色遮罩
- 响应式文字大小

### 2. CoursesSection

```typescript
const courses = [
  {
    id: 1,
    title: "零基础入门课",
    // ...
  },
];
```

特点：

- 课程数据集中管理
- 响应式网格布局
- 统一的卡片样式

## 注意事项

1. 图片资源

   - 需要准备多个尺寸的图片
   - 图片比例保持一致
   - 合适的图片压缩

2. 响应式设计

   - 文字大小适配
   - 布局结构变化
   - 间距调整

3. 性能考虑
   - 图片懒加载
   - 组件按需渲染
   - 样式优化

## 待优化项

1. 图片处理

   - 添加图片加载状态
   - 添加图片错误处理
   - 优化图片加载体验

2. 交互优化

   - 添加滚动动画
   - 优化按钮点击效果
   - 添加页面过渡效果

3. SEO 优化
   - 完善 meta 信息
   - 添加结构化数据
   - 优化语义化标签
