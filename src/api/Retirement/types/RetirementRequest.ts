import { Locations } from '../../../common/enums/index.js'
import { RetirementStatuses, RetirementType } from '../enums/index.js'

export type RetirementRequest = {
    id: string
    status: RetirementStatuses
    totalQuantity: BigInt
    type: RetirementType
    projectId: string
    vintageId: string
    createdAt: Date
    retiredAt?: Date
    retiredSerialNumbers?: string[]
    thalloProofOfRetirementCertificateUrl?: string
    shouldRetireExternalCustomer: boolean
    allInvoicesSettled: boolean
    retirementRequestItems: RetirementItem[]
}

export type RetirementItem = {
    id: string
    quantity: BigInt
    createdAt: Date
    retireeName?: string
    retireeTaxId?: string
    retireeCountry?: Locations
    invoiceId?: string
    tradeId?: string
}

export type RetirementRequestResponse = {
    id: string
    status: RetirementStatuses
    total_quantity: string
    type: RetirementType
    project_id: string
    vintage_id: string
    created_at: string
    retired_at?: string
    retired_serial_numbers?: string[]
    thallo_proof_of_retirement_certificate_url?: string
    should_retire_external_customer: boolean
    all_invoices_settled: boolean
    retirement_request_items: RetirementItemResponse[]
}

export type RetirementItemResponse = {
    id: string
    quantity: string
    created_at: string
    retiree_name?: string
    retiree_tax_id?: string
    retiree_country?: Locations
    invoice_id?: string
    trade_id?: string
}
