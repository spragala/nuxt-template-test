<template lang="pug">
.page-blog-post
  .page-blog-post__post
    h1.page-blog-post__title(v-html='pageData.blog.title')
    p {{  formatDate(pageData.date) }}
</template>

<script setup>
// TODO: make this a layout, create blog page components: hero, blog header w/ social media, body, previous / next component, 
const { params, path } = useRoute()
const slug = params.slug[0]
// TODO: useNuxtData or useState to load page from fetched blogs, or if doesn't exist fetch from CMS
const { data } = await usePostData(slug)

const pageData = data.value
usePageMeta(pageData, path)

</script>