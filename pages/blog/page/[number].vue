<template lang="pug">
.page-paginated-blog(style="paddingTop: 60px;") I'm a paginated page.
  BaseBlogList(:blogs='blogs')
  BasePagination(:totalPages='totalPages' :currentPage='currentPage')
</template>

<script setup>
const { params, path } = useRoute()
const currentPage = Number(params.number)
const { blogs, totalPages } = await usePaginatedPosts(currentPage)

// TODO: how are you going to do SEO?
// Should have a unique title at least, eg: Blog - Page 2
</script>