import { Locations } from '../enums/Locations'

export interface RequestRetirementPayload {
    /**
     * @description
     * When `should_retire_external_customer === true`
     * this should be a multiple of 1,000,000 as you can only retire
     * whole tonnes via this mechanism. Otherwise, this can be any valid number.
     */
    quantityGrams: BigInt
    vintageId: string
    externalRetireeId: string
    externalId: string
    sellOrderId?: string
    expectedPriceCents?: BigInt
    shouldRetireExternalCustomer?: boolean
    /**
     * @description
     *  Required when `should_retire_external_customer === true`
     */
    externalRetireeName?: string
    /**
     * @description
     *  Required when `should_retire_external_customer === true`
     */
    externalRetireeTaxId?: string
    /**
     * @description
     *  Required when `should_retire_external_customer === true`
     */
    externalRetireeLocation?: Locations
}
