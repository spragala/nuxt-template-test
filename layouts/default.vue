<template lang="pug">
main#main-content
  BaseNavigation(:globalData="globalData")
  slot 
</template>

<script setup>
const props = defineProps({
  globalData: Object
})
</script>