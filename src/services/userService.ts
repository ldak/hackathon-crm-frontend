import client from "../client";
import {AxiosResponse} from "axios";
import {UserI} from "./interfaces";


export interface AuthResponseI {
    Token: string,
    User: UserI
}


export default {
    get: {
        authUser(): Promise<AxiosResponse<UserI>>{
            return client.get<UserI>('/common/authenticated');
        },
    },
    post: {
        authenticate(email: string, password: string) : Promise<AxiosResponse<AuthResponseI>>{
            return client.post<AuthResponseI>('/public/auth/token', {
                Password: password,
                Email: email
            })
        },

    },
    put: {

    },
    delete: {

    }
}