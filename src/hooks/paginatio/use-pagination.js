import { useState } from 'react'

export function usePagination() {
  const [page, setPage] = useState(0)

  function handlePreviousPage() {
    setPage(page => page - 1)
  }

  function handleNextPage() {
    setPage(page => page + 1)
  }

  return {
    page,
    handlePreviousPage,
    handleNextPage
  }
}