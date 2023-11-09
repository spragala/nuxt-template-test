<template lang="pug" src="./index.pug"></template>

<script setup>
const { path } = useRoute()
const { data } = await usePageData('home')
usePageMeta(data.value, path)

</script>