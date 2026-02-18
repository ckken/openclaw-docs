import { defineConfig } from 'rspress/config';

export default defineConfig({
  title: 'OpenClaw 使用手册',
  description: 'OpenClaw 配置 Schema 参考文档',
  base: '/openclaw-docs',
  docUrl: {
    htmlSuffix: true,
  },
  themeConfig: {
    logo: 'https://openclaw.ai/logo.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/openclaw/openclaw',
      },
    ],
    nav: [
      {
        text: '指南',
        link: '/guide/getting-started.html',
      },
      {
        text: 'Schema',
        link: '/schema/overview.html',
      },
      {
        text: '参考',
        link: '/reference/cli.html',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started.html' },
            { text: '配置基础', link: '/guide/configuration.html' },
          ],
        },
      ],
      '/schema/': [
        {
          text: 'Schema 参考',
          items: [
            { text: '概述', link: '/schema/overview.html' },
            { text: '完整参考', link: '/schema/full.html' },
            { text: 'agents', link: '/schema/agents.html' },
            { text: 'channels', link: '/schema/channels.html' },
            { text: 'bindings', link: '/schema/bindings.html' },
            { text: 'gateway', link: '/schema/gateway.html' },
            { text: 'models', link: '/schema/models.html' },
            { text: 'tools', link: '/schema/tools.html' },
          ],
        },
      ],
      '/reference/': [
        {
          text: '命令参考',
          items: [
            { text: 'CLI 命令', link: '/reference/cli.html' },
            { text: '环境变量', link: '/reference/env.html' },
          ],
        },
      ],
    },
    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2024 OpenClaw',
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
});
