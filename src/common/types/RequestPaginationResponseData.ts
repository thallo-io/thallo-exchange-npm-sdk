export interface RequestPaginationResponseData {
    per_page: number
    total_pages: number
    total_items: number
    current_page: number
    previous_page: number | null
    next_page: number | null
}
