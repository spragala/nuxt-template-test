<template lang="pug" src="./index.pug"></template>

<script setup>
import { router } from '~/utils/router'
const props = defineProps({
  globalData: Object
})
const pages = router.filter(page => page.navigation)
</script>

<style lang="sass" src="./index.sass"></style>