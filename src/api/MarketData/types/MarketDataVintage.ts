import { MarketDataSellOrder } from './MarketDataSellOrder.js'

export interface MarketDataVintage {
    vintageId: string
    vintageYear: number
    sellOrders: MarketDataSellOrder[]
}
