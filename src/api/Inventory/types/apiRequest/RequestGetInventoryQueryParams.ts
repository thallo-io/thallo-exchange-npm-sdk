import { RequestPaginationQueryParams } from '../../../../common/types/RequestPaginationQueryParams.js'

export interface RequestGetInventoryQueryParams extends RequestPaginationQueryParams {
    trades_per_wallet?: string
    trade_type?: string
    wallet_min_quantity?: string
}
