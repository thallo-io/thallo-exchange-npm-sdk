import { MarketDataSellOrder } from './MarketDataSellOrder'

export interface MarketDataVintage {
    vintageId: string
    vintageYear: number
    sellOrders: MarketDataSellOrder[]
}
