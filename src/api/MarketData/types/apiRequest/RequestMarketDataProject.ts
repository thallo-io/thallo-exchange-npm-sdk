import { RequestMarketDataVintage } from './RequestMarketDataVintage.js'
export interface RequestMarketDataProject {
    project_id: string
    vintages: RequestMarketDataVintage[]
}
