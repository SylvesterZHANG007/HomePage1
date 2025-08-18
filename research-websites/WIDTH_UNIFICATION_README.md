# 页面宽度统一化说明

## 概述
本项目已将index页面的宽度设置统一应用到所有研究页面，确保整个网站具有一致的布局和响应式设计。

## 已完成的更改

### 1. 创建了统一的宽度CSS文件
- **文件**: `unified-width.css`
- **功能**: 将index页面的宽度设置应用到所有研究页面
- **主要设置**:
  - 主容器最大宽度: 1200px
  - 导航容器最大宽度: 1200px
  - 内容列宽度: 85% (1020px)
  - 响应式断点: 768px, 480px

### 2. 更新的页面
以下研究页面已添加`unified-width.css`引用：

- ✅ `elephant-trunk.html` - 大象鼻子启发式颗粒操作策略
- ✅ `multimodal-gripper.html` - 多模态夹爪增强抓取多样性
- ✅ `rehabilitation-robot.html` - 3-RRR并联踝关节康复机器人
- ✅ `self-reproducing-robot.html` - 智能自复制机器人
- ✅ `smart-materials.html` - 智能刺激响应材料

### 3. 宽度设置详情

#### 桌面端 (>768px)
- 主容器: `max-width: 1200px`
- 内容区域: `width: 85%` (约1020px)
- 左右边距: `padding: 0 40px`

#### 平板端 (≤768px)
- 主容器: `max-width: 1200px`
- 内容区域: `width: 100%`
- 左右边距: `padding: 0 20px`

#### 手机端 (≤480px)
- 主容器: `max-width: 1200px`
- 内容区域: `width: 100%`
- 左右边距: `padding: 0 16px`

## 技术实现

### CSS文件引用顺序
```html
<link rel="stylesheet" href="university-logos.css">
<link rel="stylesheet" href="common-styles.css">
<link rel="stylesheet" href="navbar-override.css">
<link rel="stylesheet" href="spacing-fix.css">
<link rel="stylesheet" href="unified-width.css">  <!-- 新增的统一宽度文件 -->
<link rel="stylesheet" href="../styles.css">
```

### 关键CSS类
- `.container.is-max-desktop` - 主容器宽度控制
- `.nav-container` - 导航栏宽度控制
- `.column.is-85-percent` - 内容列宽度控制

## 响应式设计

### 断点设置
- **768px**: 平板设备布局调整
- **480px**: 手机设备布局优化

### 自适应特性
- 内容宽度根据屏幕尺寸自动调整
- 图片和媒体内容保持比例缩放
- 导航栏在不同设备上保持一致性

## 维护说明

### 添加新页面
1. 在HTML文件的`<head>`部分添加:
   ```html
   <link rel="stylesheet" href="unified-width.css">
   ```

2. 确保使用正确的容器类:
   ```html
   <div class="container is-max-desktop">
     <div class="columns is-centered">
       <div class="column is-85-percent">
         <!-- 页面内容 -->
       </div>
     </div>
   </div>
   ```

### 修改宽度设置
如需调整宽度设置，请修改`unified-width.css`文件中的相应值，所有页面将自动应用新设置。

## 验证方法

### 检查宽度一致性
1. 在不同设备上查看页面
2. 使用浏览器开发者工具检查容器宽度
3. 确认响应式断点正常工作

### 常见问题排查
- 如果页面宽度不一致，检查CSS文件引用顺序
- 如果响应式设计失效，确认媒体查询设置正确
- 如果内容溢出，检查容器最大宽度设置

## 文件结构
```
research-websites/
├── unified-width.css          # 统一宽度设置
├── spacing-fix.css            # 间距修复
├── navbar-override.css        # 导航栏覆盖
├── common-styles.css          # 通用样式
├── university-logos.css       # 大学标志样式
└── [各研究页面HTML文件]
```

## 总结
通过实施统一的宽度设置，所有研究页面现在都具有：
- 一致的视觉布局
- 统一的响应式行为
- 更好的用户体验
- 便于维护的代码结构

这种统一化确保了整个网站的专业性和一致性，同时保持了良好的可维护性。 