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
                        id: 12,
                        name: "Hello Kitty",
                    },
                    services: [
                        {
                            id: 1323,
                            name: "Купи котка",
                            duration: 234,
                        }
                    ]
                }
            }
        }
    }
}