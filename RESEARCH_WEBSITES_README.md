# Research Websites Based on Nerfies Template

基于 [Nerfies](https://github.com/nerfies/nerfies.github.io) 模板创建的5个研究项目详细介绍网页。

## 🌟 Features

- **专业学术网页设计**: 基于知名Nerfies模板，确保专业性和美观性
- **完整内容集成**: 包含所有原始文字内容和图片资源
- **大学Logo集成**: 研究单位前添加对应的大学logo，提升专业性
- **响应式设计**: 支持桌面和移动设备访问
- **交互式导航**: 各研究页面之间可以相互链接跳转
- **学术论文格式**: 包含Abstract、BibTeX引用等标准学术元素

## 📁 项目结构

```
homepage_v3/
├── research-websites/           # 研究项目详细网页目录
│   ├── self-reproducing-robot.html      # 自复制机器人
│   ├── multimodal-gripper.html          # 多模态夹持器
│   ├── smart-materials.html             # 智能材料
│   ├── elephant-trunk.html              # 象鼻灵感抓取
│   ├── rehabilitation-robot.html        # 康复机器人
│   └── university-logos.css             # 大学logo样式文件
├── nerfies-template/           # Nerfies模板资源
├── images/                     # 图片资源
│   └── university-logos/       # 大学logo图片
│       ├── columbia.png        # Columbia University logo
│       ├── sysu.png           # Sun Yat-sen University logo
│       ├── columbia-text.svg   # Columbia文字logo (备用)
│       └── sysu-text.svg      # SYSU文字logo (备用)
├── index.html                  # 主页面（已更新链接）
├── test-logos.html            # Logo测试页面
└── start-demo.sh              # 演示启动脚本
```

## 🚀 快速开始

### 方法1: 使用启动脚本
```bash
./start-demo.sh
```

### 方法2: 手动启动
```bash
# 使用Python启动本地服务器
python -m http.server 8080

# 或者使用Python3
python3 -m http.server 8080

# 或者使用Node.js
npx http-server -p 8080
```

然后在浏览器访问：
- 主页: http://localhost:8080
- 研究页面: http://localhost:8080/research-websites/

## 📊 研究项目详情

### 1. Self-Reproducing Robot
- **文件**: `research-websites/self-reproducing-robot.html`
- **内容**: DNA启发的自复制机器人概念框架
- **特色**: 包含生物启发设计、模块化架构、研发流程等

### 2. Multimodal Gripper
- **文件**: `research-websites/multimodal-gripper.html`
- **内容**: 混合多模态夹持器设计
- **特色**: 四种操作模式、性能数据展示、应用场景

### 3. Smart Materials
- **文件**: `research-websites/smart-materials.html`
- **内容**: 仿生智能响应材料
- **特色**: 生物启发设计理念、性能测试结果、应用前景

### 4. Elephant Trunk
- **文件**: `research-websites/elephant-trunk.html`
- **内容**: 象鼻启发的颗粒抓取策略
- **特色**: 仿生策略分析、压力优化、工业应用

### 5. Rehabilitation Robot
- **文件**: `research-websites/rehabilitation-robot.html`
- **内容**: 3-RRR并联踝关节康复机器人
- **特色**: 运动学建模、控制系统、临床应用

## 🎨 设计特色

### 视觉设计
- **现代化布局**: 清晰的层次结构和信息组织
- **专业配色**: 蓝色主题配色，符合学术风格
- **高质量图片**: 所有原始图片资源完整集成
- **字体优化**: 使用Google Fonts确保跨平台一致性

### 交互功能
- **导航系统**: 顶部导航栏支持研究项目间跳转
- **响应式布局**: 适配不同屏幕尺寸
- **学术格式**: 包含摘要、BibTeX、PDF链接等
- **性能展示**: 统计数据可视化展示

## 🔗 集成说明

### 与主页的链接
主页面 (`index.html`) 中的研究卡片 "website" 链接已更新，点击可直接跳转到对应的详细研究页面。

### 模板资源
使用Nerfies模板的CSS和JavaScript资源，确保专业的学术网页体验。

## 📝 内容来源

所有内容均来自原始研究文档：
- `dna-inspired-self-reproduction.html`
- `hybrid-multimodal-gripper.html`
- `stimuli-responsive-materials.html`
- `elephant-trunk-manipulation.html`
- `rehabilitation-robot.html`

## 🌐 部署建议

### 本地开发
- 使用本地HTTP服务器进行开发和测试
- 确保相对路径正确（特别是图片和CSS路径）

### 生产部署
- 可部署到GitHub Pages、Netlify、Vercel等静态网站托管平台
- 确保所有资源文件（图片、PDF等）正确上传
- 检查跨域资源访问（如Google Fonts）

## 🎨 大学Logo功能

### Logo设计特色
- **自动对齐**: Logo与文字自动垂直居中对齐
- **差异化尺寸**: Columbia University (60px), SYSU (45px)
- **响应式**: 在移动设备上自动调整大小
- **备用方案**: 提供SVG文字logo作为备用

### 页面布局优化
- **简化结构**: 移除了页面开始的描述性内容和图片展示
- **直接进入摘要**: 页面直接从Abstract部分开始，更符合学术论文格式
- **清晰层次**: 保持标题、作者、机构的清晰展示

### 支持的大学
- **Columbia University**: 哥伦比亚大学官方logo
- **Sun Yat-sen University**: 中山大学官方logo
- **备用方案**: SVG文字logo确保兼容性

### Logo测试
访问 `test-logos.html` 查看所有logo的显示效果和样式测试。

## 🔧 自定义说明

### 修改内容
- 更新作者信息：修改各HTML文件中的author部分
- 添加新图片：将图片放入`images/`目录并更新HTML引用
- 修改样式：编辑Nerfies模板的CSS文件
- **添加新Logo**: 将logo图片放入`images/university-logos/`目录

### 添加新大学Logo
1. 将logo图片放入`images/university-logos/`目录
2. 推荐尺寸：高度20-24px，宽度自适应
3. 支持格式：PNG、JPG、SVG
4. 在HTML中使用：
   ```html
   <div class="affiliation-block">
     <img src="../images/university-logos/your-logo.png" alt="University Name" class="university-logo">
     <span class="author-block"><sup>1</sup>University Name</span>
   </div>
   ```

### 添加新页面
1. 在`research-websites/`目录创建新的HTML文件
2. 复制现有页面结构
3. 添加大学logo CSS引用：`<link rel="stylesheet" href="university-logos.css">`
4. 更新导航链接
5. 在主页添加对应的研究卡片

## 📱 浏览器兼容性

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11及以下版本可能存在兼容性问题

## 📄 许可证

本项目基于 [Nerfies](https://github.com/nerfies/nerfies.github.io) 模板创建，遵循 Creative Commons Attribution-ShareAlike 4.0 International License。

---

**更新时间**: 2025年1月
**版本**: 1.0
**作者**: Siyuan Zhang 