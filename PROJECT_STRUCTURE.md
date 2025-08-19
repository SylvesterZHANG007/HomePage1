# 项目文件结构说明

## 📁 项目概述

本项目是张思源（Sylvester Zhang）的个人作品集网站，采用现代化的Web技术构建，具有完整的响应式设计和移动端优化。

## 🗂️ 文件组织结构

### 根目录文件
```
homepage_v3/
├── index.html                    # 主页面 - 个人作品集核心页面
├── styles.css                    # 主样式文件 - 全局样式和响应式设计
├── script.js                     # 主脚本文件 - 交互功能和动画
├── README.md                     # 项目说明文档
├── PROJECT_STRUCTURE.md          # 项目结构说明（本文件）
└── CV of ZSY academic simplified.pdf  # 个人简历PDF
```

### 研究页面目录 (`research-websites/`)
```
research-websites/
├── elephant-trunk.html           # 大象鼻子启发的颗粒物操作策略
├── multimodal-gripper.html       # 多模态夹持器研究
├── rehabilitation-robot.html     # 康复机器人研究
├── self-reproducing-robot.html   # 自复制机器人研究
├── smart-materials.html          # 智能材料研究
├── common-styles.css             # 研究页面通用样式
├── unified-width.css             # 统一宽度设置
├── research-spacing-optimization.css  # 研究页面间距优化
├── university-logos.css          # 大学logo样式
├── navbar-override.css           # 导航栏样式覆盖
└── spacing-fix.css               # 间距修复样式
```

### 项目页面
```
cubesat-crawling-robot.html       # 立方星爬行机器人项目
flapping-wing-robot.html          # 扑翼机器人项目
spherical-space-robot.html        # 球形空间机器人项目
tendon-actuated-robot.html        # 肌腱驱动机器人项目
quadruped-spider-robot.html       # 四足蜘蛛机器人项目
```

### 资源目录
```
images/                           # 图片资源
├── sylvester_robot_icon.svg      # 个人机器人图标
├── hero background.png           # 主页背景图片
├── university-logos/             # 大学logo图片
├── 项目相关图片/                  # 各项目的截图和示意图
└── 其他图片资源/

papers/                           # 学术论文PDF
├── elephant-trunk.pdf            # 大象鼻子研究论文
├── multimodal-gripper.pdf        # 多模态夹持器论文
├── rehabilitation-robot.pdf      # 康复机器人论文
└── 其他研究论文/

nerfies-template/                 # 基于NeRFies的模板
├── static/
│   ├── css/                      # 第三方CSS框架
│   ├── js/                       # 第三方JavaScript库
│   └── images/                   # 模板图片资源
└── index.html                    # 模板示例页面
```

## 🔧 技术架构

### 前端技术栈
- **HTML5**: 语义化标记，良好的可访问性
- **CSS3**: 现代布局技术（Grid、Flexbox）、CSS变量、动画
- **JavaScript ES6+**: 原生JS，无第三方依赖
- **Bulma CSS框架**: 响应式CSS框架
- **Font Awesome**: 图标库
- **Google Fonts**: 字体服务

### 设计原则
- **移动优先**: 响应式设计，完美适配各种设备
- **性能优化**: 轻量级代码，快速加载
- **用户体验**: 平滑动画，直观交互
- **可维护性**: 模块化代码，清晰结构

## 📱 响应式设计

### 断点设置
- **1200px+**: 桌面端大屏幕
- **768px-1199px**: 平板设备
- **480px-767px**: 手机设备
- **360px-479px**: 小屏手机
- **<360px**: 超小屏设备

### 移动端优化
- 触摸友好的交互设计
- 触摸目标最小44px
- 性能优化的滚动和动画
- 移动端特定的样式调整

## 🎯 功能模块

### 1. 导航系统
- 固定顶部导航栏
- 平滑滚动导航
- 移动端汉堡菜单
- 当前页面高亮显示

### 2. 内容展示
- Hero区域：个人问候和姓名
- About区域：个人介绍和联系方式
- Research区域：学术研究展示
- Projects区域：项目作品展示
- Experience区域：工作经验和成就
- Skills区域：技能和工具展示

### 3. 交互功能
- 页面加载动画
- 滚动触发动画
- 悬停交互效果
- 触摸反馈动画

## 📋 文件命名规范

### HTML文件
- 使用描述性的英文名称
- 使用连字符分隔单词
- 小写字母命名

### CSS文件
- 按功能分类命名
- 使用连字符分隔
- 添加版本标识

### JavaScript文件
- 使用驼峰命名法
- 功能描述清晰
- 模块化组织

## 🔄 更新维护

### 版本控制
- 使用Git进行版本管理
- 每次更新都有明确的提交信息
- 保持代码历史的完整性

### 文档维护
- README.md：项目整体说明
- PROJECT_STRUCTURE.md：文件结构说明
- 代码注释：详细的功能说明
- 版本日志：记录重要更新

## 🚀 部署说明

### 本地开发
1. 克隆仓库到本地
2. 使用现代浏览器打开HTML文件
3. 修改后刷新页面查看效果

### 在线部署
- 支持GitHub Pages部署
- 可直接上传到任何Web服务器
- 无需额外的构建步骤

## 📞 联系方式

**作者**: 张思源 (Siyuan Zhang)
**邮箱**: sz3297 at columbia.edu
**GitHub**: [SylvesterZHANG007](https://github.com/SylvesterZHANG007)

---

*最后更新: 2024年12月*
*文档版本: v1.0* 