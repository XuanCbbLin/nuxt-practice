<script setup>
const { data, status, error, refresh } = await useFetch('/api/about', {
  pick: ['name', 'counter'],
})
</script>

<template>
  <div class="flex flex-col items-center">
    <p class="my-2 text-xl text-gray-600">請求狀態: {{ status }}</p>
    <p v-if="error" class="my-2 text-xl text-rose-600">錯誤資訊: {{ error }}</p>

    <span class="mt-4 text-2xl">回傳資料:</span>
    <p class="my-4 text-3xl font-semibold text-blue-500">
      {{ data }}
    </p>

    <button class="rounded bg-blue-500 px-4 py-2 font-medium text-white" @click="refresh">
      重新獲取資料
    </button>
  </div>
</template>
