import { api } from '~/utils/api'

export default async (page = '1', per_page = '4') => {
  const { data } = useAsyncData(async () => {
    let response = await $fetch.raw(`${api}/wp/v2/posts`, {
      params: {
        per_page,
        page
      }
    })

    const data = response
    const totalPages = parseInt(data.headers.get('x-wp-totalpages'), 10)
    
    const blogs = data._data.map(blog => ({
      slug: blog.slug,
      author: blog.author,
      categories: blog.categories,
      ...blog.acf
    }))

    return { blogs, totalPages }
  })
  return { blogs: data.value?.blogs, totalPages: data.value?.totalPages }  
}