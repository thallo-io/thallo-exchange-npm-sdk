import { PaginationResponseData } from '../../../common/types/PaginationResponseData.js'
import { InventoryProject } from './InventoryProject.js'

export interface GetInventoryResponse {
    projects: InventoryProject[]
    pagination: PaginationResponseData
}
