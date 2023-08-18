import { ApiService } from '../../utils/ApiService.js'
import { GetInventoryQueryParams } from './types/GetInventoryQueryParams.js'
import { GetInventoryResponse } from './types/GetInventoryResponse.js'
import { RequestGetInventoryQueryParams } from './types/apiRequest/RequestGetInventoryQueryParams.js'
import { RequestGetInventoryResponse } from './types/apiRequest/RequestGetInventoryResponse.js'

export class InventoryApi {
    private readonly apiService: ApiService
    private readonly path: string

    constructor(apiService: ApiService) {
        this.apiService = apiService
        this.path = '/api/inventory'
    }

    public async getInventory(
        queryParams: GetInventoryQueryParams = {},
    ): Promise<GetInventoryResponse> {
        const res = await this.apiService.getRequest<
            RequestGetInventoryResponse,
            RequestGetInventoryQueryParams
        >(this.path, null, {
            page: queryParams.page,
            per_page: queryParams.perPage,
            trades_per_wallet: queryParams.tradesPerWallet,
            trade_type: queryParams.tradeType,
            wallet_min_quantity: queryParams.walletMinQuantity,
        })

        return {
            projects:
                res.data?.projects.map((project) => ({
                    projectId: project.project_id,
                    vintages: project.vintages.map((vintage) => ({
                        vintageId: vintage.vintage_id,
                        wallets: vintage.wallets.map((wallet) => ({
                            type: wallet.type,
                            quantityGrams: BigInt(wallet.quantity_grams),
                            trades: wallet.trades.map((trade) => ({
                                executionDate: trade.execution_date,
                                quantityGrams: BigInt(trade.quantity_grams),
                                priceCents: BigInt(trade.price_cents),
                                type: trade.type,
                            })),
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
