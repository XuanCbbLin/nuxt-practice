export default defineEventHandler((event) => {
  const { apiSecret } = useRuntimeConfig()

  console.log(`接收到了一個Server API請求: ${event.path}`)
  console.log(`執行時的環境變數[apiSecret]: ${apiSecret}`)

  return 'Hello World!'
})
