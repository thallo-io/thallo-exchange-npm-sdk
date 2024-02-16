import { InventoryApi } from './api/Inventory/InventoryApi.js'
import { MarketDataApi } from './api/MarketData/index.js'
import { ProjectDataApi } from './api/ProjectData/index.js'
import { RequestRetirementApi } from './api/RequestRetirement/index.js'
import { RetirementApi } from './api/Retirement/index.js'
import { InitLibraryParams } from './common/types/InitLibraryParams.js'
import { ApiService } from './utils/ApiService.js'

export class ThalloApiSdk {
    private readonly apiService: ApiService
    public requestRetirement: RequestRetirementApi
    public marketData: MarketDataApi
    public projectData: ProjectDataApi
    public inventory: InventoryApi
    public retirement: RetirementApi

    constructor(initLibraryParams: InitLibraryParams) {
        this.apiService = new ApiService({
            apiKey: initLibraryParams.apiKey,
            baseUrl: initLibraryParams.baseUrl,
        })
        this.requestRetirement = new RequestRetirementApi(this.apiService)
        this.marketData = new MarketDataApi(this.apiService)
        this.projectData = new ProjectDataApi(this.apiService)
        this.inventory = new InventoryApi(this.apiService)
        this.retirement = new RetirementApi(this.apiService)
    }
}
