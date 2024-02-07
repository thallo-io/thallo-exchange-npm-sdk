import { Locations } from '../../../common/enums/index.js'
import { RetirementStatuses, RetirementType } from '../enums/index.js'

export class RetirementRequest {
    id!: string
    status!: RetirementStatuses
    total_quantity!: BigInt
    type!: RetirementType
    project_id!: string
    vintage_id!: string
    created_at!: string | Date
    updated_at!: string | Date
    retired_at!: string | Date | null
    retired_serial_numbers!: string[] | null
    thallo_proof_of_retirement_certificate_url!: string | null
    should_retire_external_customer!: boolean
    all_invoices_settled!: boolean
    retirement_request_items!: RetirementItem[]
}

export class RetirementItem {
    id!: string
    quantity!: BigInt
    created_at!: string | Date
    retiree_name!: string | null
    retiree_tax_id!: string | null
    retiree_country!: Locations | null
    invoice_id!: string | undefined
    trade_id!: string | undefined
}

export class RetirementRequestResponse {
    id!: string
    status!: RetirementStatuses
    total_quantity!: string
    type!: RetirementType
    project_id!: string
    vintage_id!: string
    created_at!: string | Date
    updated_at!: string | Date
    retired_at!: string | Date | null
    retired_serial_numbers!: string[] | null
    thallo_proof_of_retirement_certificate_url!: string | null
    should_retire_external_customer!: boolean
    all_invoices_settled!: boolean
    retirement_request_items!: RetirementItemResponse[]
}

export class RetirementItemResponse {
    id!: string
    quantity!: string
    created_at!: string | Date
    retiree_name!: string | null
    retiree_tax_id!: string | null
    retiree_country!: Locations | null
    invoice_id!: string | undefined
    trade_id!: string | undefined
}
