import { ApiService } from '../../utils/ApiService.js'
import { GetMarketDataQueryParams } from './types/GetMarketDataQueryParams'
import { GetMarketDataResponse } from './types/GetMarketDataResponse'
import { RequestGetMarketDataResponse } from './types/apiRequest/RequestGetMarketDataResponse.js'

export class MarketDataApi {
    private readonly apiService: ApiService
    private readonly path: string

    constructor(apiService: ApiService) {
        this.apiService = apiService
        this.path = '/api/market'
    }

    public async getMarketData(
        queryParams: GetMarketDataQueryParams = {},
    ): Promise<GetMarketDataResponse> {
        const res = await this.apiService.getRequest<RequestGetMarketDataResponse>(
            this.path,
            null,
            {
                page: queryParams.page,
                per_page: queryParams.perPage,
            },
        )
        return {
            projects:
                res.data?.projects.map((project) => ({
                    projectId: project.project_id,
                    vintages: project.vintages.map((vintage) => ({
                        vintageId: vintage.vintage_id,
                        vintageYear: vintage.vintage_year,
                        sellOrders: vintage.sell_orders.map((sellOrder) => ({
                            sellOrderId: sellOrder.sell_order_id,
                            quantityGrams: BigInt(sellOrder.quantity_grams),
                            priceCents: BigInt(sellOrder.price_cents),
                        })),
                    })),
                })) ?? [],
            pagination: {
                perPage: res.data!.pagination.per_page,
                totalItems: res.data!.pagination.total_items,
                totalPages: res.data!.pagination.total_pages,
                currentPage: res.data!.pagination.current_page,
                previousPage: res.data!.pagination.previous_page,
                nextPage: res.data!.pagination.next_page,
            },
        }
    }
}
