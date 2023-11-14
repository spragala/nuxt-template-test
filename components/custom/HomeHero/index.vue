<template lang="pug" src="./index.pug"></template>

<script setup>
const props = defineProps({
  data: Object
})

const activeText = ref(0)

onMounted(()=> {
  setInterval(() => {
    activeText.value = (activeText.value + 1) % props.data.title.changing_text.length
  }, 3000)
})
</script>

<style lang="sass" src="./index.sass"></style>