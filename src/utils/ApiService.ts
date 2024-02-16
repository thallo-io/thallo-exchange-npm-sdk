import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ThalloResponseError } from '../common/errors/ThalloResponseError.js'

interface ApiServiceParams {
    apiKey: string
    baseUrl: string
}

interface AxiosPostResponseWrapper<TData> {
    axiosResponse: AxiosResponse<TData>
    data?: TData
}

export class ApiService {
    private readonly hostUrl: string
    private readonly apiKey: string
    private readonly axiosInstance: AxiosInstance

    constructor(apiServiceParams: ApiServiceParams) {
        this.apiKey = apiServiceParams.apiKey
        this.hostUrl = apiServiceParams.baseUrl
        this.axiosInstance = axios.create({
            baseURL: this.hostUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`,
            },
        })
    }

    public async getRequest<ResponseType, QueryParamsType = any, ResponseErrorType = any>(
        path: string,
        id: string | null = null,
        queryParams: QueryParamsType | {} = {},
        config: AxiosRequestConfig<any> = {},
    ): Promise<AxiosPostResponseWrapper<ResponseType>> {
        try {
            const mergeConfig: AxiosRequestConfig<any> = {
                headers: {
                    'Content-Type': 'application/json',
                },
                ...config,
                params: queryParams,
            }
            if (id) {
                path += '/' + id
            }

            const response: AxiosResponse<ResponseType> =
                await this.axiosInstance.get<ResponseType>(path, mergeConfig)
            return {
                axiosResponse: response,
                data: response.data as ResponseType,
            }
        } catch (e: unknown) {
            if (axios.isAxiosError(e) && e instanceof AxiosError) {
                throw new ThalloResponseError(e)
            } else {
                throw e
            }
        }
    }

    public async postRequest<ResponseType, RequestType = any, ResponseErrorType = any>(
        path: string,
        payload?: RequestType,
        config?: AxiosRequestConfig<any>,
    ): Promise<AxiosPostResponseWrapper<ResponseType>> {
        try {
            const mergeConfig: AxiosRequestConfig<any> = {
                headers: {
                    'Content-Type': 'application/json',
                },
                ...config,
            }
            const response: AxiosResponse<ResponseType> =
                await this.axiosInstance.post<ResponseType>(path, payload, mergeConfig)
            return {
                axiosResponse: response,
                data: response.data as ResponseType,
            }
        } catch (e) {
            if (axios.isAxiosError(e) && e instanceof AxiosError) {
                throw new ThalloResponseError(e)
            } else {
                throw e
            }
        }
    }
}
