import client from "../client";
import moment from 'moment';


export default {
    get: {
        show: async (account_id) => {
            return client.get('account/' + account_id);
        },
        getAvailability: async (account_id, service_uuid) =>{
            return client.get('account/' + account_id + `/availability?start_date=${moment().format('YYYY-MM-DD')}&end_date=${moment().add(1, 'month').format('YYYY-MM-DD')}&service_uuid=${service_uuid}`);
        }
    }
}