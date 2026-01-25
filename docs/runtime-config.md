# Runtime Config 與環境變數

## 概述

Nuxt 使用 `runtimeConfig` 來管理應用程式的設定值，這些值可以透過環境變數覆蓋。

## 設定方式

### nuxt.config.ts

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // 僅 Server 端可存取
    apiSecret: '預設值',
    testEnv: '',

    // Client 端也可存取
    public: {
      apiBase: '/api',
    },
  },
})
```

### .env 檔案

環境變數命名規則：`NUXT_` 前綴 + 大寫蛇形命名

| runtimeConfig 屬性 | 環境變數名稱 |
|-------------------|-------------|
| `apiSecret` | `NUXT_API_SECRET` |
| `testEnv` | `NUXT_TEST_ENV` |
| `public.apiBase` | `NUXT_PUBLIC_API_BASE` |

範例 `.env`：

```
NUXT_API_SECRET=my-secret-key
NUXT_TEST_ENV=production
NUXT_PUBLIC_API_BASE=https://api.example.com
```

## 使用方式

### Server 端 (server/api/*.ts)

```ts
export default defineEventHandler((event) => {
  const { apiSecret, testEnv } = useRuntimeConfig()
  // apiSecret 和 testEnv 只在 Server 端可用
  console.log(apiSecret)
  return 'OK'
})
```

### Client 端 (Vue 元件)

```vue
<script setup>
const config = useRuntimeConfig()
// 只能存取 public 屬性
console.log(config.public.apiBase)
</script>
```

## 存取限制

| 屬性位置 | Server 端 | Client 端 |
|---------|----------|----------|
| `runtimeConfig.*` | ✅ | ❌ |
| `runtimeConfig.public.*` | ✅ | ✅ |

## 範例檔案

- [server/api/hello.get.ts](../server/api/hello.get.ts) - Server API 中使用 runtimeConfig
- [nuxt.config.ts](../nuxt.config.ts) - runtimeConfig 設定

## 官方文件

- [Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config)
- [useRuntimeConfig](https://nuxt.com/docs/4.x/api/composables/use-runtime-config)
- [.env](https://nuxt.com/docs/4.x/directory-structure/env)
