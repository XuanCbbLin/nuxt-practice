<script setup>
const callback = (response) => {
  console.log(response)
}
</script>

<template>
  <div class="flex flex-col items-center py-12">
    <ClientOnly>
      <GoogleLogin :callback="callback" />
    </ClientOnly>
  </div>
</template>
