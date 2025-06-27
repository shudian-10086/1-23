# 代码风格和约定

## 文件命名规范
- **页面文件**: kebab-case格式 (如 `sprunki-red-sun.astro`)
- **组件文件**: PascalCase格式 (如 `BaseLayout.astro`, `GameList.astro`)
- **数据文件**: camelCase格式 (如 `i18n.ts`, `games.ts`)

## 代码风格
- **语言**: 使用中文注释，变量/函数名用语义化英文
- **TypeScript**: 使用严格模式配置 (`astro/tsconfigs/strict`)
- **导入**: ES6模块导入语法，相对路径引用

## 组件架构
- **布局系统**: 
  - `BaseLayout.astro`: 首页基础布局
  - `GameLayout.astro`: 游戏页面布局
- **组件化**: 可复用组件放在 `src/components/` 目录
- **数据管理**: 配置数据集中在 `src/data/` 目录

## 国际化约定
- **URL结构**: 
  - 英文: `/` (默认)
  - 其他语言: `/zh/`, `/es/`, `/fr/` 等
- **翻译键**: 点分notation (如 `common.popularGames`)
- **Fallback**: 自动回退到英文翻译

## CSS约定
- **全局样式**: 统一在 `/public/main.css`
- **颜色变量**: 使用CSS变量 (如 `--tertiary-dark`)
- **响应式**: 移动优先设计
- **字体**: Poppins字体系列

## SEO约定
- **元数据**: 每页面必须包含title、description、canonical URL
- **结构化数据**: 使用JSON-LD格式
- **图片优化**: 统一使用 `/tw.jpg` 作为默认OpenGraph图片