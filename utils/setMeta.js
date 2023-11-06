import { urlBase } from './api'
import { filterEmptyValues } from './helpers'

export default (pageData, urlPath) => {
  const seo = pageData.seo
  const og = seo.social_meta.og_meta

  const headTags = {
    link: [ { rel: 'canonical', href: `${urlBase}${urlPath}` } ],
    meta: [ 
      { property: 'og:url', content: `${urlBase}${urlPath}` },
      { property: 'og:type', content: 'Website' }
    ]
  }

  const seoOgMeta = filterEmptyValues({
    title: seo.page_title || pageData.title,
    description: seo.page_description,
    ogTitle: og.title || seo.page_title,
    ogDescription: og.description || seo.page_description,
    ogImage: og.image,
    twitterCard: og.twitter_card
  })

  return { headTags, seoOgMeta }
}