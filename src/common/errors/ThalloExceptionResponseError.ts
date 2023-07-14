import { RequestRetirementExceptionType } from '../types/RequestRetirementExceptionType.js'

interface ThalloExceptionResponseData {
    statusCode: number
    url: string
    timestamp: string
    error: RequestRetirementExceptionType
    message: string
}

export function isThalloExceptionResponseData(obj: any): obj is ThalloExceptionResponseData {
    return (
        typeof obj === 'object' &&
        typeof obj.statusCode === 'number' &&
        typeof obj.url === 'string' &&
        typeof obj.timestamp === 'string' &&
        typeof obj.error === 'string' &&
        (typeof obj.message === 'string' || Array.isArray(obj.message))
    )
}
