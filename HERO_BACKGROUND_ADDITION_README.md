# Hero Background 背景图片添加说明

## 概述
已在index页面的hero section中添加了背景图片 `hero background.png`，确保文字颜色和背景保持不变，且该背景仅应用于index页面。

## 技术实现

### 1. 背景图片设置
- **图片文件**: `images/hero background.png`
- **应用范围**: 仅index页面 (`body:has(#home)`)
- **背景属性**: 
  - `background-size: cover` - 覆盖整个区域
  - `background-position: center` - 居中显示
  - `background-repeat: no-repeat` - 不重复
  - `background-attachment: fixed` - 固定背景（桌面端）

### 2. 文字可读性保障
- **半透明背景**: `rgba(255, 255, 255, 0.1)` - 轻微白色半透明
- **毛玻璃效果**: `backdrop-filter: blur(5px)` - 背景模糊效果
- **圆角设计**: `border-radius: 20px` - 现代化圆角
- **内边距**: `padding: 40px` - 确保文字不贴边

### 3. 响应式设计
- **移动端**: `background-attachment: scroll` - 滚动背景
- **移动端背景**: `rgba(255, 255, 255, 0.15)` - 稍强的半透明
- **移动端模糊**: `backdrop-filter: blur(8px)` - 更强的模糊效果
- **移动端内边距**: `padding: 30px 20px` - 适应小屏幕

## CSS代码详情

### 主要样式
```css
/* Hero background image - only for index page */
body:has(#home) .hero {
    background-image: url('images/hero background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

/* Ensure text readability over background image */
body:has(#home) .hero-content-center {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 40px;
}
```

### 响应式样式
```css
@media (max-width: 768px) {
    /* Mobile background image adjustments */
    body:has(#home) .hero {
        background-attachment: scroll;
    }
    
    body:has(#home) .hero-content-center {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(8px);
        padding: 30px 20px;
    }
}
```

## 特性说明

### 1. 页面限制
- ✅ **仅index页面**: 使用 `body:has(#home)` 选择器
- ❌ **其他页面**: 不会应用此背景图片
- 🎯 **精确控制**: 确保背景图片不会影响其他页面

### 2. 文字保护
- ✅ **颜色不变**: 保持原有的渐变色彩
- ✅ **可读性**: 半透明背景确保文字清晰
- ✅ **视觉效果**: 毛玻璃效果增强现代感

### 3. 背景效果
- ✅ **全屏覆盖**: 背景图片覆盖整个hero section
- ✅ **居中显示**: 图片居中，视觉效果最佳
- ✅ **固定背景**: 桌面端滚动时背景保持固定

## 文件结构
```
homepage_v3/
├── index.html                                    # 应用背景图片的页面
├── images/
│   └── hero background.png                      # 背景图片文件
├── styles.css                                   # 包含背景样式的CSS文件
└── [其他页面]                                   # 不应用背景图片
```

## 维护说明

### 更换背景图片
如需更换背景图片，请：
1. 替换 `images/hero background.png` 文件
2. 或修改CSS中的图片路径

### 调整背景效果
- **透明度**: 修改 `rgba(255, 255, 255, 0.1)` 中的最后一个值
- **模糊度**: 修改 `backdrop-filter: blur(5px)` 中的数值
- **圆角**: 修改 `border-radius: 20px` 中的数值

### 应用到其他页面
如需将背景应用到其他页面，请修改选择器：
```css
/* 例如应用到所有页面 */
.hero {
    background-image: url('images/hero background.png');
    /* 其他属性... */
}

/* 或应用到特定页面 */
body:has(#research) .hero {
    background-image: url('images/hero background.png');
    /* 其他属性... */
}
```

## 浏览器兼容性

### 支持的浏览器
- ✅ Chrome 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Edge 88+

### 注意事项
- `:has()` 选择器是较新的CSS特性
- 在不支持的浏览器中，背景图片不会显示
- 文字仍然保持原有的渐变色彩和样式

## 总结

通过这次添加，index页面的hero section现在具有：
- 🖼️ **精美背景**: 使用 `hero background.png` 作为背景
- 🎯 **页面限制**: 仅应用于index页面，不影响其他页面
- ✨ **文字保护**: 保持原有颜色，确保可读性
- 📱 **响应式**: 在不同设备上都有良好的显示效果
- 🎨 **现代设计**: 毛玻璃效果和圆角设计

现在index页面的hero section更加美观，同时保持了原有的文字样式和布局！ 