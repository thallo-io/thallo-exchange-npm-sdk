import { RequestPaginationResponseData } from '../../../../common/types/RequestPaginationResponseData.js'
import { RequestInventoryProject } from './RequestInventoryProject.js'

export interface RequestGetInventoryResponse {
    projects: RequestInventoryProject[]
    pagination: RequestPaginationResponseData
}
