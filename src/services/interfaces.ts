export interface UserI {
    uid: number,
    account_id: number,
    name: string,
    email: string,
}

export interface AccountI {
    uid: number,
    name: string,
}

export interface ServiceI {
    uid: number,
    name: string,
    duration: number,
}

export interface AvailabilityI {
    [key: string]: string[];
}