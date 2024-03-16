import {AxiosResponse} from "axios";
import {AccountI, AvailabilityI} from "./interfaces";
import client from "../client";


export default {
    get: {
        show: async (account_id: string) :Promise<AxiosResponse<AccountI>> => {
            return client.get<AccountI>('account/' + account_id);
        },
        getAvailability: async (account_id: string):Promise<AxiosResponse<AvailabilityI>> =>{
            return client.get<AvailabilityI>('account/' + account_id + '/availability');
        }
    }
}