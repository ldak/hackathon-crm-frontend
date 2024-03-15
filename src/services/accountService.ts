import {AxiosResponse} from "axios";
import {AccountI, ServiceI, UserI} from "./interfaces";

interface InfoI{
    account: AccountI,
    services: ServiceI[],
}
export default {
    get: {
        // getInfo: async () :Promise<AxiosResponse<InfoI>> => {
        getInfo: async (account_id: string) => {
            return {
                data: {
                    account: {
                        uid: 12,
                        name: "Hello Kitty",
                    },
                    services: [
                        {
                            uid: 1323,
                            name: "Купи котка",
                            duration: 234,
                        }
                    ]
                }
            }
        },
        getAvailability: async (account_id: string) =>{
            return {
                data: {
                    '2023-12-23':[ '2023-12-23 12:00', '2023-12-23 12:30']
                }
            }
        }
    }
}