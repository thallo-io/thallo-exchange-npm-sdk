export enum RetirementStatuses {
    OPEN = 'OPEN', // more can be added to this retirement request
    IN_PROGRESS = 'IN_PROGRESS', // we are in the process of reflecting this in the registry/blockchain - cannot add to it
    COMPLETE = 'COMPLETE', // the retirement has been reflecting on the registry/blockchain
    NOTHING_TO_PROCESS = 'NOTHING_TO_PROCESS', // this retirement contained less than one whole credit and so cannot be processed
    CLOSED = 'CLOSED', //  the fraction will have been move to next month's retirement request
}
