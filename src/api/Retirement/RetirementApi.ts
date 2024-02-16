import { RetirementExceptionType } from '../../common/types/index.js'
import { ApiService } from '../../utils/ApiService.js'
import {
    RetirementItem,
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
            RetirementExceptionType
        >(this.path, null, { id })
        const retirement = response.data!
        return {
            id: retirement.id,
            status: retirement.status,
            totalQuantity: BigInt(retirement.total_quantity),
            type: retirement.type,
            projectId: retirement.project_id,
            vintageId: retirement.vintage_id,
            createdAt: new Date(retirement.created_at),
            retiredAt: retirement.retired_at ? new Date(retirement.retired_at) : undefined,
            retiredSerialNumbers: retirement.retired_serial_numbers,
            thalloProofOfRetirementCertificateUrl:
                retirement.thallo_proof_of_retirement_certificate_url,
            shouldRetireExternalCustomer: retirement.should_retire_external_customer,
            allInvoicesSettled: retirement.all_invoices_settled,
            retirementRequestItems: retirement.retirement_request_items.map(
                (item: RetirementItemResponse): RetirementItem => {
                    return {
                        id: item.id,
                        quantity: BigInt(item.quantity),
                        createdAt: new Date(item.created_at),
                        retireeName: item.retiree_name,
                        retireeTaxId: item.retiree_tax_id,
                        retireeCountry: item.retiree_country,
                        invoiceId: item.invoice_id,
                        tradeId: item.trade_id,
                    }
                },
            ),
        }
    }
}
