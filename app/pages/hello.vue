<script setup>
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public

console.log(runtimeConfig)

const { data, refresh } = await useFetch(
  `${apiBase}/hello`,
  {
    immediate: false,
  },
)
</script>

<template>
  <div class="flex flex-col items-center">
    <span class="mt-4 text-2xl">回傳資料:</span>
    <p class="my-4 text-3xl font-semibold text-blue-500">
      {{ data }}
    </p>
    <button
      class="rounded bg-blue-500 px-4 py-2 font-medium text-white"
      @click="refresh"
    >
      獲取資料
    </button>
  </div>
</template>
