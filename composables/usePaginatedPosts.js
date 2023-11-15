import { apiBase } from '~/utils/api'

export default async (page) => {

  const { data } = useLazyAsyncData(`posts-${page.value}`, async () => {
    let response = await $fetch.raw(`${apiBase}/wp/v2/posts`, {
      params: {
        per_page: "6",
        page: page
      }
    })

    const data = response
    const totalPages = parseInt(data.headers.get('x-wp-totalpages'), 10)
    
    const blogs = data._data.map(blog => ({
      slug: blog.slug,
      author: blog.author, // Probably don't need since not querying for it, maybe better to add to acf
      categories: blog.categories,
      date: blog.date,
      ...blog.acf
    }))

    return { blogs, totalPages }
  })
  return { blogs: computed(() => data.value?.blogs), totalPages: computed(() => data.value?.totalPages) }
}