<template lang="pug" src="./index.pug"></template>

<script setup>
const props = defineProps({
  totalPages: Number,
  currentPage: Number
})

const paginatedLinks = formatPagination(props.currentPage, props.totalPages, 8)

const setUrl = (pageNum) => {
  if (pageNum === 1) {
    return `/blog`
  } else {
    return `/blog/page/${pageNum}`
  }
}
</script>