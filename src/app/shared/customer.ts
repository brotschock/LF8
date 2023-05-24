export interface CustomerList {
    data: Customer[]
}

export interface Customer {
    id: number,
    name: string,
    iban: string,
}