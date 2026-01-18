<template>
  <div class="flex flex-col items-center">
    <h1 class="my-12 text-6xl font-semibold text-gray-800">這裡是首頁</h1>
    <div class="flex gap-4 text-xl">
      <NuxtLink to="/count/fetch">前往 /count/fetch</NuxtLink>
      <NuxtLink to="/count/useAsyncData">前往 /count/useAsyncData</NuxtLink>
      <NuxtLink to="/about/useFetch">前往 /about/useFetch</NuxtLink>
    </div>
  </div>
</template>
