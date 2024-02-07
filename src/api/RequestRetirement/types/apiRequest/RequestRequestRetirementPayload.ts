import { Locations } from '../../../../common/enums/Locations.js'

export interface RequestRequestRetirementPayload {
    /**
     * @description
     * When `should_retire_external_customer === true`
     * this should be a multiple of 1,000,000 as you can only retire
     * whole tonnes via this mechanism. Otherwise, this can be any valid number.
     */
    quantity_grams: string
    vintage_id: string
    external_retiree_id: string
    external_id: string
    sell_order_id?: string
    expected_price_cents?: string
    should_retire_external_customer?: boolean
    /**
     * @description
     *  Required when `should_retire_external_customer === true`
     */
    external_retiree_name?: string
    /**
     * @description
     *  Required when `should_retire_external_customer === true`
     */
    external_retiree_tax_id?: string
    /**
     * @description
     *  Required when `should_retire_external_customer === true`
     */
    external_retiree_location?: Locations
}
