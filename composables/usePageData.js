export default async (page) => {
  return useAsyncData(page, () => getData(page, 'pages'))
}