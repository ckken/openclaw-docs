# OpenClaw Schema Skill

OpenClaw 配置 Schema 的参考 skill。

## 使用场景

- 查询配置项含义
- 了解配置结构
- 调试配置问题

## 配置查询

### 常用配置路径

| 路径 | 说明 |
|------|------|
| `agents.defaults.model.primary` | 默认模型 |
| `agents.defaults.heartbeat.every` | 心跳间隔 |
| `channels.telegram` | Telegram 配置 |
| `bindings` | 消息绑定规则 |
| `gateway.port` | 网关端口 |
| `gateway.auth.token` | 认证 Token |
| `tools.profile` | 工具配置集 |

## 配置示例

### agents 配置

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "minimax/MiniMax-M2.5"
      },
      "heartbeat": {
        "every": "55m"
      }
    },
    "list": [
      { "id": "main" },
      { "id": "coder" },
      { "id": "watchman" }
    ]
  }
}
```

### channels 配置

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "xxx",
      "dmPolicy": "pairing"
    }
  }
}
```

### bindings 配置

```json
{
  "bindings": [
    {
      "agentId": "main",
      "match": {
        "channel": "telegram",
        "accountId": "default"
      }
    }
  ]
}
```

## 命令参考

```bash
# 查看配置
openclaw config get

# 查看特定路径
openclaw config get agents.defaults

# 设置配置
openclaw config set gateway.port 18789

# 补丁配置
openclaw config.patch '{"gateway": {"port": 18790}}'
```

## 文档链接

- 完整文档: https://openclaw.empjs.dev
- 配置 Schema: https://openclaw.empjs.dev/schema/overview
- CLI 命令: https://openclaw.empjs.dev/reference/cli
