# OpenClaw 文档

OpenClaw 使用手册和配置 Schema 参考文档。

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

### 预览

```bash
pnpm preview
```

## 部署

### Cloudflare Pages

```bash
pnpm deploy
```

## 文档结构

```
docs/
├── index.mdx           # 首页
├── guide/              # 指南
│   ├── getting-started.mdx
│   └── configuration.mdx
├── schema/             # Schema 参考
│   ├── overview.mdx
│   ├── agents.mdx
│   ├── channels.mdx
│   ├── bindings.mdx
│   ├── gateway.mdx
│   ├── models.mdx
│   └── tools.mdx
└── reference/          # 命令参考
    ├── cli.mdx
    └── env.mdx
```

## 在线访问

- 文档站点: https://openclaw.empjs.dev
- 官方文档: https://docs.openclaw.ai
- GitHub: https://github.com/openclaw/openclaw

## License

MIT
