import { PaginationQueryParams } from '../../../common/types/PaginationQueryParams.js'
import { TradeTypes } from '../enums/TradeTypes.js'

export interface GetInventoryQueryParams extends PaginationQueryParams {
    tradesPerWallet?: number
    tradeType?: TradeTypes
    walletMinQuantity?: string
}
