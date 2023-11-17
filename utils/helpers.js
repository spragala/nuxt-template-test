export const filterEmptyValues = (obj) => Object.fromEntries(
  Object.entries(obj).filter(([_, v]) => v != null && v !== '')
)

export const formatDate = (isoString) => {
  const date = new Date(isoString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const formatPagination = (currentPage, totalPages, linkNum) => {
  const numPagesToShow = linkNum
  const pagesBeforeCurrentPage = Math.floor((numPagesToShow - 1) / 2)
  const pagesAfterCurrentPage = Math.ceil((numPagesToShow - 1) / 2)
  
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return pages.reduce((formattedPagination, pageNum) => {
      // Remove all but 1st and last page number and pages based on current page
      if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - pagesBeforeCurrentPage && pageNum <= currentPage + pagesAfterCurrentPage)) {
          formattedPagination.push(pageNum)
      } else if (formattedPagination[formattedPagination.length - 1] !== '...') {
          // Add ellipsis if the last element is not already an ellipsis
          formattedPagination.push('...')
      }
      return formattedPagination
  }, [])
}