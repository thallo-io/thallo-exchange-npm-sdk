import { RequestRetirementExceptionType } from '../../common/types/RequestRetirementExceptionType.js'
import { ApiService } from '../../utils/ApiService.js'
import { RequestRetirementPayload } from './types/RequestRetirementPayload.js'
import { RequestRetirementResponse } from './types/RequestRetirementResponse.js'
import { RequestRequestRetirementPayload } from './types/apiRequest/RequestRequestRetirementPayload.js'
import { RequestRequestRetirementResponse } from './types/apiRequest/RequestRequestRetirementResponse.js'

export class RequestRetirementApi {
    private readonly apiService: ApiService
    private readonly path: string

    constructor(apiService: ApiService) {
        this.apiService = apiService
        this.path = '/api/caas/request-retirement'
    }

    public async requestRetirement(
        requestRetirementPayload: RequestRetirementPayload,
    ): Promise<RequestRetirementResponse> {
        const res = await this.apiService.postRequest<
            RequestRequestRetirementResponse,
            RequestRequestRetirementPayload,
            RequestRetirementExceptionType
        >(this.path, {
            quantity_grams: requestRetirementPayload.quantityGrams.toString(),
            vintage_id: requestRetirementPayload.vintageId,
            external_retiree_id: requestRetirementPayload.externalRetireeId,
            external_id: requestRetirementPayload.externalId,
            sell_order_id: requestRetirementPayload.sellOrderId,
            expected_price_cents: requestRetirementPayload.expectedPriceCents
                ? requestRetirementPayload.expectedPriceCents.toString()
                : undefined,
            should_retire_external_customer: requestRetirementPayload.shouldRetireExternalCustomer,
            external_retiree_name: requestRetirementPayload.externalRetireeName,
            external_retiree_tax_id: requestRetirementPayload.externalRetireeTaxId,
            external_retiree_location: requestRetirementPayload.externalRetireeLocation,
        })
        return {
            retirementRequestId: res.data!.retirement_request_id,
            externalIdAlreadyProcessed: res.data!.external_id_already_processed,
        }
    }
}
