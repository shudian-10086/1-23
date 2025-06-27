# 代码库结构

## 根目录结构
```
fiddlebops/
├── src/                    # 源代码目录
├── public/                 # 静态资源目录
├── dist/                   # 构建输出目录
├── astro.config.mjs        # Astro配置文件
├── package.json            # 项目依赖和脚本
├── tsconfig.json           # TypeScript配置
└── CLAUDE.md              # AI助手项目说明
```

## 源代码结构 (src/)
```
src/
├── components/             # 可复用组件
│   ├── HomeNavigation.astro    # 首页简洁导航
│   ├── Header.astro           # 游戏页面Header
│   ├── Navigation.astro       # 完整导航组件
│   ├── LanguageSelector.astro # 语言选择器
│   ├── GameList.astro         # 游戏列表组件
│   └── TrendingGames.astro    # 趋势游戏组件
├── layouts/                # 布局模板
│   ├── BaseLayout.astro       # 基础布局（首页用）
│   └── GameLayout.astro       # 游戏页面布局
├── data/                   # 数据管理
│   ├── i18n.ts               # 国际化翻译
│   └── games.ts              # 游戏数据配置
└── pages/                  # 页面文件
    ├── index.astro            # 英文首页
    ├── [game-name].astro      # 各种游戏页面
    └── [lang]/                # 多语言页面目录
```

## 静态资源结构 (public/)
```
public/
├── main.css               # 全局样式文件
├── favicon.ico            # 网站图标
├── sitemap.xml            # 自动生成的网站地图
├── robots.txt             # 搜索引擎规则
├── ads.txt                # 广告商验证
├── *.png, *.jpg           # 游戏封面图片
└── *.wav                  # 音频文件
```

## 页面组织架构

### 布局层次
1. **BaseLayout** → 首页 (包含完整导航)
2. **GameLayout** → 游戏页面 (使用Header组件)

### 国际化架构
- 默认语言(en): `/pages/`
- 其他语言: `/pages/zh/`, `/pages/es/` 等

### 游戏页面数量
- **总页面**: 105个
- **游戏页面**: 65个线上游戏
- **首页**: 英文+中文 = 2个
- **其他页面**: 隐私政策、服务条款等

## 数据流架构
```
用户请求 → Astro路由 → 页面组件 → 布局模板 → 数据配置 → 渲染输出
```