<template lang="pug">
.page-blog(style="paddingTop: 60px;")
  h2.page-blog__container I have all the blogs
  BaseBlogList(:blogs='blogs')
  BasePagination(v-if='totalPages > 1' :totalPages="totalPages" :currentPage="currentPage")
</template>

<script setup>
const { path } = useRoute()
const currentPage = 1

const { blogs, totalPages } = await usePaginatedPosts(currentPage)

const { data: page } = await usePageData('blog')
usePageMeta(page.value, path)


// TODO: category - need category page like /blog and paginated eg. category/page/2
// Also maybe need pinia (https://pinia.vuejs.org/ssr/nuxt.html) 
// to save category selection to pass to category page from blog page
// or query param? category?cat=1&startdate=10012002&enddate=1023232
// TODO: https://vue3datepicker.com/ for Aces site

// Category fetch with search
// $fetch.raw(`${apiBase}/wp/v2/posts?categories=${slectedCategories}&order=desc&before=${selectedDateInISO8601}&after={selectedDateOrRange}`)
/* or let response = await $fetch.raw(`${apiBase}/wp/v2/posts`, {
  params: {
    categories: selectedCategories,
    before: 'selectedDate[0]',
    after: 'selectedDate[1]',
    order: 'desc'
  }
})*/

// TODO: error handling: totalPages null or undefined

</script>