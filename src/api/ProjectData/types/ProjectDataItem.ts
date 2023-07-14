import { ProjectLocation } from '../../../common/enums/ProjectLocation.js'
import { ProjectType } from '../../../common/enums/ProjectType.js'
import { SDG } from '../../../common/enums/SDG.js'
import { ProjectDataVintageDetails } from './ProjectDataVintageDetails.js'

export interface ProjectDataItem {
    projectId: string
    projectName: string
    type: ProjectType
    location: ProjectLocation
    registryProjectUrl?: string
    registryName?: string
    sdgs: SDG[]
    description?: string
    vintages: ProjectDataVintageDetails[]
}
