export interface RequestRequestRetirementPayload {
    quantity_grams: string
    vintage_id: string
    external_retiree_id: string
    external_id: string
    sell_order_id?: string
    expected_price_cents?: string
}
