<template lang="pug">
NuxtLayout(:globalData='globalData')
  NuxtPage(:globalData='globalData')
</template>

<script setup>
const { data: globalData } = await usePostData('global', 'globalData')
</script>