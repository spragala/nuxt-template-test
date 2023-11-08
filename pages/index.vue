<template lang="pug" src="./index.pug"></template>

<script setup>
const { path } = useRoute()
const { data } = await usePageData('home')

const pageData = data.value
usePageMeta(pageData, path)

</script>