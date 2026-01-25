<template>
  <div class="flex flex-col items-center">
    <h1 class="my-12 text-6xl font-semibold text-gray-800">這裡是首頁</h1>
    <div class="flex gap-4 text-xl flex-col">
      <NuxtLink to="/count/fetch">前往 /count/fetch</NuxtLink>
      <NuxtLink to="/count/useAsyncData">前往 /count/useAsyncData</NuxtLink>
      <NuxtLink to="/about/useFetch">前往 /about/useFetch</NuxtLink>
      <NuxtLink to="/Hydration-Mismatch">前往 /Hydration Mismatch 範例</NuxtLink>
      <NuxtLink to="/hello">建立前後端都能存取的 Runtime Config</NuxtLink>
    </div>
  </div>
</template>
