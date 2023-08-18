import { TradeTypes } from '../enums/TradeTypes.js'

export interface InventoryTrade {
    executionDate: string
    quantityGrams: BigInt
    priceCents: BigInt
    type: TradeTypes
}
