export const filterEmptyValues = (obj) => Object.fromEntries(
  Object.entries(obj).filter(([_, v]) => v != null && v !== '')
)

export const formatDate = (isoString) => {
  const date = new Date(isoString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}