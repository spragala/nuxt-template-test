<template lang="pug" src="./index.pug"></template>

<script setup>
const { data } = await useAsyncData('navigation', () => getData('global', 'globalData'))

const props = data.value
</script>