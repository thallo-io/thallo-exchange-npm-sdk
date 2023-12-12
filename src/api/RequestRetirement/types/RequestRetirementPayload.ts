import { Locations } from '../enums/Locations'

export interface RequestRetirementPayload {
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
