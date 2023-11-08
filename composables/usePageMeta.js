export default (pageData, path) => {
  const { headTags, seoOgMeta } = setMeta(pageData, path)
  useHead(headTags)
  useSeoMeta(seoOgMeta)
}