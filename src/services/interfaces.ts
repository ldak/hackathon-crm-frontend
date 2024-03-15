export interface UserI {
    id: number,
    account_id: number,
    name: string,
    email: string,
}

export interface AccountI {
    id: number,
    name: string,
}

export interface ServiceI {
    id: number,
    name: string,
    duration: number,
}