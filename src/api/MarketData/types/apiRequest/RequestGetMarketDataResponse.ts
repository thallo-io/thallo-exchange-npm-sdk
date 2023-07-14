import { RequestPaginationResponseData } from '../../../../common/types/RequestPaginationResponseData'
import { RequestMarketDataProject } from './RequestMarketDataProject'

export interface RequestGetMarketDataResponse {
    projects: RequestMarketDataProject[]
    pagination: RequestPaginationResponseData
}
