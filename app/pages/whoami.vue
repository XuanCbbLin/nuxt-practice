<script setup>
const userInfo = ref({})
const sendWhoamiRequest = async () => {
  await $fetch('/api/whoami').then((response) => {
    userInfo.value = response
  })
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="my-4 flex max-w-xl flex-col gap-1">
      <template
        v-for="property in Object.keys(userInfo)"
        :key="property"
      >
        <p class="text-xl font-semibold break-words text-sky-500">
          {{ property }}:
          <span class="text-slate-700">
            {{ userInfo[property] }}
          </span>
        </p>
      </template>
    </div>
    <button
      class="rounded bg-sky-500 px-4 py-2 text-white"
      @click="sendWhoamiRequest"
    >
      查詢使用者資訊
    </button>
  </div>
</template>
