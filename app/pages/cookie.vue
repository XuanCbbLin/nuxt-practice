<script setup>
const name = useCookie('name')
const counter = useCookie('counter', { maxAge: 60 })

const setNameCookie = () => {
  name.value = 'Ryan'
}

const setCounterCookie = () => {
  counter.value = Math.floor(Math.random() * 1000)
}

const sendRequest = () => {
  $fetch('/api/cookie')
}
</script>

<template>
  <div class="flex flex-col items-center">
    <p class="my-6 text-center text-3xl font-bold text-gray-700">Cookie</p>
    <button class="rounded bg-emerald-500 px-4 py-2 text-white" @click="setNameCookie">
      設置 name
    </button>
    <p class="my-2 text-xl font-semibold text-emerald-500">
      name: <span class="text-slate-700">{{ name }}</span>
    </p>
    <button class="rounded bg-emerald-500 px-4 py-2 text-white" @click="setCounterCookie">
      設置 counter
    </button>
    <p class="my-2 text-xl font-semibold text-emerald-500">
      counter: <span class="text-slate-700">{{ counter }}</span>
    </p>

    <button class="rounded bg-emerald-500 px-4 py-2 text-white" @click="sendRequest">
      打 /api/cookie API
    </button>
  </div>
</template>
