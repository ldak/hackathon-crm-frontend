import {AxiosResponse} from "axios";
import {AccountI, AvailabilityI} from "./interfaces";
import client from "../client";
import * as _moment from "moment/moment";
const moment = _moment;


export default {
    get: {
        show: async (account_id: string) :Promise<AxiosResponse<AccountI>> => {
            return client.get<AccountI>('account/' + account_id);
        },
        getAvailability: async (account_id: string, service_uuid: string):Promise<AxiosResponse<AvailabilityI>> =>{
            return client.get<AvailabilityI>('account/' + account_id + `/availability?start_date=${moment().format('YYYY-MM-DD')}&end_date=${moment().add(1, 'month').format('YYYY-MM-DD')}&service_uuid=${service_uuid}`);
        }
    }
}