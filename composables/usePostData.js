export default async (slug, postType = 'posts') => {
  return await useAsyncData(slug, () => getData(slug, postType))
}