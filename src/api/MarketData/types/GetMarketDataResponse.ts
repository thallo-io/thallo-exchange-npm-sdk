import { PaginationResponseData } from '../../../common/types/PaginationResponseData.js'
import { MarketDataProject } from './MarketDataProject.js'

export interface GetMarketDataResponse {
    projects: MarketDataProject[]
    pagination: PaginationResponseData
}
