import { defineConfig } from 'rspress/config';

export default defineConfig({
  title: 'OpenClaw 使用手册',
  description: 'OpenClaw 配置 Schema 参考文档',
  base: '/openclaw-docs/',
  docSlugDisallowEvilCharsRegex: 'aaa',
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
        link: '/guide/getting-started',
      },
      {
        text: 'Schema',
        link: '/schema/overview',
      },
      {
        text: '参考',
        link: '/reference/cli',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置基础', link: '/guide/configuration' },
          ],
        },
      ],
      '/schema/': [
        {
          text: 'Schema 参考',
          items: [
            { text: '概述', link: '/schema/overview' },
            { text: 'agents', link: '/schema/agents' },
            { text: 'channels', link: '/schema/channels' },
            { text: 'bindings', link: '/schema/bindings' },
            { text: 'gateway', link: '/schema/gateway' },
            { text: 'models', link: '/schema/models' },
            { text: 'tools', link: '/schema/tools' },
          ],
        },
      ],
      '/reference/': [
        {
          text: '命令参考',
          items: [
            { text: 'CLI 命令', link: '/reference/cli' },
            { text: '环境变量', link: '/reference/env' },
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
