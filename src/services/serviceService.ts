import {AxiosResponse} from "axios/index";
import {ServiceI} from "./interfaces";
import client from "../client";

export default {
    get:{
        index: async (account_id: string): Promise<AxiosResponse<ServiceI[]>> =>{
            return client.get<ServiceI[]>('account/'+account_id+ '/services');
        }
    },
    patch:{
        save: async (account_id: string, services): Promise<AxiosResponse<ServiceI[]>> =>{
            return client.patch<ServiceI[]>('account/'+account_id+ '/services', {
                services
            });
        }
    }
}