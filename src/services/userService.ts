import client from "../client";
import {AxiosResponse} from "axios";
import {UserI} from "./interfaces";
import {formatDate} from "v-calendar/dist/types/src/utils/date/helpers";


export interface AuthResponseI {
    access_token: string,

}


export default {
    get: {
        authUser(): Promise<AxiosResponse<UserI>>{
            return client.get<UserI>('/users/me');
        },
    },
    post: {
        authenticate(email: string, password: string) : Promise<AxiosResponse<AuthResponseI>>{
            let data = new FormData();
            data.append('password', password);
            data.append('username', email);
            return client.post<AuthResponseI>('/auth/token', data)
        },

    },
    put: {

    },
    delete: {

    }
}