import { RequestMarketDataSellOrder } from './RequestMarketDataSellOrder.js'

export interface RequestMarketDataVintage {
    vintage_id: string
    vintage_year: number
    sell_orders: RequestMarketDataSellOrder[]
}
