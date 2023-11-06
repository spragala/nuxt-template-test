import { api } from './api'

export default async (slug, customPostType = 'pages') => {
 const response = await $fetch(`${api}/wp/v2/${customPostType}?slug=${slug}`)
 const data = await response

 return {
    title: data[0].title.rendered,
    slug: data[0].slug, // may not need
    ...data[0].acf
  }

}