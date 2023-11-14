<template lang="pug">
.page-blog
  h2.page-blog__container I have all the blogs
  //- pre {{ data.blogs }}
  BaseBlogList(:blogs='data.blogs')
  BasePagination(:totalPages="totalPages" :currentPage="currentPage", @newPage="handleNewPage")
</template>

<script setup>
const currentPage = ref(1)
const { path } = useRoute()

// TODO: Data caching, save blogs in ref object && only fetch un-fetched posts - maybe handled by nuxt natively?
// https://nuxt.com/docs/getting-started/data-fetching#caching-and-refetching
// TODO: Add lazy to navigate to the page while fetching posts. Need to handle "loading" state with 
// "pending" or "status" return values

const { data, totalPages, refresh } = await usePaginatedPosts(currentPage, "3")

const { data: page } = await usePageData('blog')
usePageMeta(page.value, path)

const handleNewPage = (newPage) => {
  currentPage.value = newPage
  refresh()
}

// TODO: category drop down - need category fetch - update PagPosts composable to fetch with cat params, 
// https://vue3datepicker.com/, function to refetch based on new query:
// $fetch.raw(`${apiBase}/wp/v2/posts?categories=${slectedCategory}&order=desc&before=${selectedDateInISO8601}&after={selectedDateOrRange}`)
/* or let response = await $fetch.raw(`${apiBase}/wp/v2/posts`, {
  params: {
    categories: 1,
    before: 'selectedDate[0]',
    after: 'selectedDate[1]',
    order: 'desc'
  }
})*/

// TODO: back button will bring you back to page 1 should bring you back to page you were on, 
// update to save place (maybe url query: ?page=2 (also good for seo))
// TODO: Pagination - only show if totalPages > 1, error handling: totalPages null or undefined

</script>