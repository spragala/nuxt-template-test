<template lang="pug">
main#main-content
  //- BaseNavigation
  NuxtPage(:globalData='globalData')
</template>

<script setup>
const { data: globalData } = await usePostData('global', 'globalData')
// TODO - create layouts: default, blog (multiple?), error
// and move all this to layout
</script>