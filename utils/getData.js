import { apiBase } from './api'

export default async (slug, customPostType = 'pages') => {
 const response = await $fetch(`${apiBase}/wp/v2/${customPostType}?slug=${slug}`)

 const data = {
    title: response[0].title.rendered,
    slug: response[0].slug, // may not need
    ...response[0].acf
  }

  if (customPostType = 'posts') {
    data.date = response[0].date
    data.categories = response[0].categories
  }

  return data
}