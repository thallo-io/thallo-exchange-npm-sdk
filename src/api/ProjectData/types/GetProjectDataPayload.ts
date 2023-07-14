type NonEmptyArray<T> = [T, ...T[]]

export interface GetProjectDataPayload {
    projectIds: NonEmptyArray<string>
}
