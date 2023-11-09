import { apiBase } from './api'

export default async (slug, customPostType = 'pages') => {
 const response = await $fetch(`${apiBase}/wp/v2/${customPostType}?slug=${slug}`)
 const data = response

 const result = {
    title: data[0].title.rendered,
    slug: data[0].slug, // may not need
    ...data[0].acf
  }

  if (customPostType = 'posts') {
    result.date = data[0].date
  }

  return result

}