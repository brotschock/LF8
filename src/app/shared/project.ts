export interface ProjectList {
    data: Project[]
}

export interface Project {
    id: number,
    name: string,
    timespan: string,
    budget: number,
    customerId: number
}