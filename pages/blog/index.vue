<template lang="pug">
.page-blog
  h2.page-blog__container I have all the blogs
  //- AllBlogs Component(:blogs='data.blogs')
  .page-blog__blogs(v-for="(blog, i) in data.blogs" :key="`blog-${i}`")
    nuxt-link.page-blog__link(:to="`/blog/${blog.slug}`") {{ blog.blog.title }}
  BasePagination(:totalPages="totalPages" :currentPage="currentPage", @newPage="handleNewPage")
</template>

<script setup>
const currentPage = ref(1)
const { path } = useRoute()
const globalData = useAttrs().globalData 

const { data, totalPages, refresh } = await usePaginatedPosts(currentPage)

const { data: page } = await usePageData('blog')
usePageMeta(page.value, path)

const handleNewPage = (newPage) => {
  currentPage.value = newPage
  refresh()
}

//TODO: category drop down - need category fetch, https://vue3datepicker.com/, function to refetch based on new query:
// $fetch.raw(`${apiBase}/wp/v2/posts?categories=${slectedCategory}&order=desc&before=${selectedDateInISO8601}&after={selectedDateOrRange}`)
/* or let response = await $fetch.raw(`${apiBase}/wp/v2/posts`, {
  params: {
    categories: 1,
    before: 'selectedDate[0]',
    after: 'selectedDate[1]',
    order: 'desc'
  }
})*/

</script>