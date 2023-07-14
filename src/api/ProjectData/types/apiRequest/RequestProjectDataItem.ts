import { ProjectLocation } from '../../../../common/enums/ProjectLocation.js'
import { ProjectType } from '../../../../common/enums/ProjectType.js'
import { SDG } from '../../../../common/enums/SDG.js'
import { RequestProjectDataVintageDetails } from './RequestProjectDataVintageDetails.js'

export interface RequestProjectDataItem {
    project_id: string
    project_name: string
    type: ProjectType
    location: ProjectLocation
    registry_project_url?: string
    registry_name?: string
    sdgs: SDG[]
    description?: string
    vintages: RequestProjectDataVintageDetails[]
}
