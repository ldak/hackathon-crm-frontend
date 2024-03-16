import {AxiosResponse} from "axios/index";
import {ServiceI} from "./interfaces";
import client from "../client";

export default {
    get:{
        index: async (account_id: string): Promise<AxiosResponse<ServiceI[]>> =>{
            return client.get<ServiceI[]>('account/'+account_id+ '/services');
        }
    }
}