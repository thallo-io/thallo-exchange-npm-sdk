import { RequestMarketDataVintage } from './RequestMarketDataVintage'
export interface RequestMarketDataProject {
    project_id: string
    vintages: RequestMarketDataVintage[]
}
