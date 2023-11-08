import { TradeTypes } from '../../enums/TradeTypes.js'

export interface RequestInventoryTrade {
    execution_date: string
    quantity_grams: string
    price_cents: string
    type: TradeTypes
}
