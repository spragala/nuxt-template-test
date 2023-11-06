<template lang="pug" src="./index.pug"></template>

<script setup>
const { data } = defineProps({
  data: Object
})
const activeText = ref(0)

onMounted(()=> {
  setInterval(() => {
    activeText.value = (activeText.value + 1) % data.title.changing_text.length
  }, 3000)
})
const iloaded = () => {
  console.log('I loaded')
}
</script>

<style lang="sass" src="./index.sass"></style>