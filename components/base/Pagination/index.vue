<template lang="pug" src="./index.pug"></template>

<script setup>
const props = defineProps({
  totalPages: Number,
  currentPage: Number
})
const emit = defineEmits(['newPage'])

const onPageUpdate = pageNum => {
  emit('newPage', pageNum)
}

</script>