import { AxiosError } from 'axios'
import { isThalloExceptionResponseData } from './ThalloExceptionResponseError.js'

export class ThalloResponseError<T> extends Error {
    httpStatus: null | number
    httpErrorCode: null | string
    errorMessage: string
    thalloErrorStatus?: T | null
    innerError: Error
    host: string
    endpointUrl: string
    timestamp: string | null

    constructor(error: AxiosError) {
        super()
        let customErrorResponseData: any = {
            endpointUrl: error.config?.url ?? '',
            timestamp: null,
            errorMessage: error.message,
            thalloErrorStatus: null,
        }
        if (isThalloExceptionResponseData(error.response?.data)) {
            customErrorResponseData = {
                endpointUrl: error.response?.data.url ?? '',
                timestamp: error.response?.data.timestamp ?? null,
                errorMessage: error.response?.data.message ?? '',
                thalloErrorStatus: error.response?.data.error ?? null,
            }
        }

        this.httpStatus = error?.response?.status ?? null
        this.host = error.config?.baseURL ?? ''
        this.endpointUrl = customErrorResponseData.endpointUrl
        this.httpErrorCode = error.code ?? null
        this.errorMessage = customErrorResponseData.errorMessage
        this.thalloErrorStatus = customErrorResponseData.thalloErrorStatus
        this.timestamp = customErrorResponseData.timestamp
        this.innerError = error
    }
}
