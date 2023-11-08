import { InventoryVintage } from './InventoryVintage.js'

export interface InventoryProject {
    projectId: string
    vintages: InventoryVintage[]
}
