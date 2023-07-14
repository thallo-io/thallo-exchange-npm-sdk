import { ApiService } from '../../utils/ApiService.js'
import { GetProjectDataPayload } from './types/GetProjectDataPayload.js'
import { GetProjectDataResponse } from './types/GetProjectDataResponse.js'
import { RequestGetProjectDataResponse } from './types/apiRequest/RequestGetProjectDataResponse.js'
import { RequestProjectDataItem } from './types/apiRequest/RequestProjectDataItem.js'
import { RequestProjectDataVintageDetails } from './types/apiRequest/RequestProjectDataVintageDetails.js'

export class ProjectDataApi {
    private readonly apiService: ApiService
    private readonly path: string

    constructor(apiService: ApiService) {
        this.apiService = apiService
        this.path = '/api/projects'
    }

    public async getProjectData(
        queryParams: GetProjectDataPayload,
    ): Promise<GetProjectDataResponse> {
        const res = await this.apiService.getRequest<RequestGetProjectDataResponse>(
            this.path,
            null,
            { project_ids: queryParams.projectIds },
        )
        return {
            projects: res!.data!.projects.map((project: RequestProjectDataItem) => ({
                projectId: project.project_id,
                projectName: project.project_name,
                type: project.type,
                location: project.location,
                registryProjectUrl: project.registry_project_url,
                registryName: project.registry_name,
                sdgs: project.sdgs,
                description: project.description,
                vintages: project.vintages.map((vintage: RequestProjectDataVintageDetails) => ({
                    vintageId: vintage.vintage_id,
                    vintageYear: vintage.vintage_year,
                    registryVintageUrl: vintage.registry_vintage_url,
                })),
            })),
        }
    }
}
