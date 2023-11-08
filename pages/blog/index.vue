<template lang="pug">
.page-blog
  client-only
    h2.page-blog__container I have all the blogs
    .page-blog__blogs(v-for="(blog, i) in blogs" :key="`blog-${i}`")
      nuxt-link.page-blog__link(:to="`/blog/${blog.slug}`") {{ blog.blog.title }}
    button.page-blog__button(@click='getMoreBlogs(2)') Get new Blogs
    .page-blog__pages Total Pages: {{ totalPages }}, Current Page: {{ currentPage }}
</template>

<script setup>
const currentPage = ref(1)
const { blogs, totalPages } = await useAllPosts()
const globalData = useAttrs().globalData 

const getMoreBlogs = (newPage) => {
  currentPage.value = newPage
  useAllPosts(newPage)
}

</script>