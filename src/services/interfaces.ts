export interface UserI {
    uuid: string,
    account_id: number,
    name: string,
    email: string,
}

export interface AccountI {
    uuid: string,
    name: string,
}

export interface ServiceI {
    uuid: string,
    name: string,
    duration: number,
}

interface IntervalI{
    start: string,
    end: string,
}
export interface AvailabilityI {
    [key: string]: IntervalI[];
}

export interface CustomerI{
    uuid: string,
    name: string,
    phone: string,
}