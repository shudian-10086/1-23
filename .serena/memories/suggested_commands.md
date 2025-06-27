# 建议命令

## 开发命令
```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 运行astro CLI命令
npm run astro
```

## 系统命令 (macOS)
```bash
# 文件操作
ls -la          # 列出详细文件信息
find . -name    # 查找文件
grep -r         # 递归搜索文本

# Git 操作
git status      # 查看仓库状态
git add .       # 添加所有更改
git commit -m   # 提交更改
git push        # 推送到远程

# 目录导航
cd              # 切换目录
pwd             # 显示当前路径
mkdir           # 创建目录
```

## 项目特定命令
```bash
# 检查构建状态
npm run build > build.log 2>&1

# 本地开发
npm run dev -- --host 0.0.0.0  # 允许局域网访问

# 清理缓存
rm -rf dist .astro node_modules
npm install
```

## 调试命令
```bash
# 检查依赖
npm ls

# 检查包版本
npm outdated

# 检查TypeScript类型
npx tsc --noEmit
```

## 部署前检查
```bash
# 构建并检查输出
npm run build && ls -la dist/

# 预览部署效果
npm run preview
```