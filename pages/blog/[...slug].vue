<template lang="pug">
.page-blog-post
  .page-blog-post__post
    h1.page-blog-post__title(v-html='pageData.title')
</template>

<script setup>
const { params } = useRoute()
const slug = params.slug[0]
const { data } = await usePostData(slug)

const pageData = data.value.blog
</script>