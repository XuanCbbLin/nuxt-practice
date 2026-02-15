<script setup>
import { googleAuthCodeLogin } from 'vue3-google-login'

const { googleClientId: GOOGLE_CLIENT_ID } = useRuntimeConfig().public

const userInfo = ref({})
const handleGoogleLogin = async () => {
  const authCode = await googleAuthCodeLogin({
    clientId: GOOGLE_CLIENT_ID,
  }).then((response) => response?.code)

  await $fetch('/api/auth/google', {
    method: 'POST',
    body: { authCode },
  }).then((response) => {
    userInfo.value = response
  })
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="my-4 flex max-w-xl flex-col gap-1">
      <template v-for="property in Object.keys(userInfo)" :key="property">
        <p class="text-xl font-semibold break-words text-emerald-500">
          {{ property }}:
          <span class="text-slate-700">
            {{ userInfo[property] }}
          </span>
        </p>
      </template>
    </div>
    <button class="rounded bg-emerald-500 px-4 py-2 text-white" @click="handleGoogleLogin">
      使用 Google 登入
    </button>
  </div>
</template>
