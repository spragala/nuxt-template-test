<template lang="pug" src="./index.pug"></template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData('home', async () => {
  const [pageData, globalData] = await Promise.all([getData('home'), getData('global', 'globalData')])
  return { pageData, globalData }
})

const { pageData, globalData } = data.value
const { headTags, seoOgMeta } = setMeta(pageData, route.fullPath)
useHead(headTags)
useSeoMeta(seoOgMeta)
</script>