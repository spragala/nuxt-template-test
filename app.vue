<template lang="pug">
main#main-content
  //- BaseNavigation
  NuxtPage(:globalData='globalData')
</template>

<script setup>
const { data: globalData } = await usePostData('global', 'globalData')
</script>