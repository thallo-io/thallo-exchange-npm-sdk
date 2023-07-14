export interface PaginationResponseData {
    perPage: number
    totalPages: number
    totalItems: number
    currentPage: number
    previousPage: number | null
    nextPage: number | null
}
