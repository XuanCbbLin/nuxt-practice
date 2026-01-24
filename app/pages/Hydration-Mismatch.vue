<script setup>
// 不使用 useState 的 Hydration Mismatch
// const number = ref(Math.floor(Math.random() * 1000))

// 使用 useState 後解決 Hydration Mismatch
const number = useState('number', () => Math.floor(Math.random() * 1000))
</script>

<template>
  <div class="flex flex-col items-center">
    <span class="py-24 text-9xl font-semibold text-sky-400">
      {{ number }}
    </span>
  </div>
</template>
