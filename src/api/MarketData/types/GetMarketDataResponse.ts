import { PaginationResponseData } from '../../../common/types/PaginationResponseData'
import { MarketDataProject } from './MarketDataProject'

export interface GetMarketDataResponse {
    projects: MarketDataProject[]
    pagination: PaginationResponseData
}
