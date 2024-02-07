import { RetirmentExceptionType } from '../../common/types/index.js'
import { ApiService } from '../../utils/ApiService.js'
import {
    RetirementItemResponse,
    RetirementRequest,
    RetirementRequestQueryParams,
    RetirementRequestResponse,
} from './types/index.js'

export class RetirementApi {
    private readonly apiService: ApiService
    private readonly path: string

    constructor(apiService: ApiService) {
        this.apiService = apiService
        this.path = '/api/retirement'
    }

    public async getRetirement(id: string): Promise<RetirementRequest> {
        const response = await this.apiService.getRequest<
            RetirementRequestResponse,
            RetirementRequestQueryParams,
            RetirmentExceptionType
        >(this.path, null, { id })
        const retirement = response.data!
        return {
            id: retirement.id,
            status: retirement.status,
            total_quantity: BigInt(retirement.total_quantity),
            type: retirement.type,
            project_id: retirement.project_id,
            vintage_id: retirement.vintage_id,
            created_at: retirement.created_at,
            updated_at: retirement.updated_at,
            retired_at: retirement.retired_at,
            retired_serial_numbers: retirement.retired_serial_numbers,
            thallo_proof_of_retirement_certificate_url:
                retirement.thallo_proof_of_retirement_certificate_url,
            should_retire_external_customer: retirement.should_retire_external_customer,
            all_invoices_settled: retirement.all_invoices_settled,
            retirement_request_items: retirement.retirement_request_items.map(
                (item: RetirementItemResponse) => {
                    return {
                        id: item.id,
                        quantity: BigInt(item.quantity),
                        created_at: item.created_at,
                        retiree_name: item.retiree_name,
                        retiree_tax_id: item.retiree_tax_id,
                        retiree_country: item.retiree_country,
                        invoice_id: item.invoice_id,
                        trade_id: item.trade_id,
                    }
                },
            ),
        }
    }
}
