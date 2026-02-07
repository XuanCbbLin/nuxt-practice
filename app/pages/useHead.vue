<script setup>
const count = ref(0)

if (import.meta.client) {
  setInterval(() => (count.value += 1), 1000)
}

useHead({
  title: count,
})
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="my-12 text-6xl font-semibold text-gray-800">觀察網頁標題</h1>
  </div>
</template>
