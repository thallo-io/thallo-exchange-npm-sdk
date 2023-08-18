import { RequestInventoryVintage } from './RequestInventoryVintage.js'

export interface RequestInventoryProject {
    project_id: string
    vintages: RequestInventoryVintage[]
}
