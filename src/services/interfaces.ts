export interface UserI {
    uuid: number,
    account_id: number,
    name: string,
    email: string,
}

export interface AccountI {
    uuid: number,
    name: string,
}

export interface ServiceI {
    uuid: number,
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