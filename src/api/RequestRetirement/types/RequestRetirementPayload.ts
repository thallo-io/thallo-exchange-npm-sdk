export interface RequestRetirementPayload {
    quantityGrams: BigInt
    vintageId: string
    externalRetireeId: string
    externalId: string
    sellOrderId?: string
    expectedPriceCents?: BigInt
}
