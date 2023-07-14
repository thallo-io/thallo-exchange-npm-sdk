import { RequestPaginationResponseData } from '../../../../common/types/RequestPaginationResponseData.js'
import { RequestMarketDataProject } from './RequestMarketDataProject.js'

export interface RequestGetMarketDataResponse {
    projects: RequestMarketDataProject[]
    pagination: RequestPaginationResponseData
}
