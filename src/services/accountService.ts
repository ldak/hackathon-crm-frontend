import {AxiosResponse} from "axios";
import {AccountI, AvailabilityI} from "./interfaces";
import client from "../client";


export default {
    get: {
        show: async (account_id: string) :Promise<AxiosResponse<AccountI>> => {
            return client.get<AccountI>('account/' + account_id);
        },
        getAvailability: async (account_id: string) =>{
            return {
                data: {
                    '2024-03-19' : [
                        {
                            start: '2024-03-16 9:00:00',
                            end: '2024-03-16 10:00:00 UTC',
                        },
                        // {
                        //     start: '2024-03-16 10:00',
                        //     end: '2024-03-16 11:00',
                        // },
                        // {
                        //     start: '2024-03-16 11:00',
                        //     end: '2024-03-16 12:00',
                        // }
                    ],
                    // '2024-03-17' : [
                    //     {
                    //         start: '2024-03-16 9:00',
                    //         end: '2024-03-16 10:00',
                    //     },
                    //     {
                    //         start: '2024-03-16 10:00',
                    //         end: '2024-03-16 11:00',
                    //     },
                    //     {
                    //         start: '2024-03-16 11:00',
                    //         end: '2024-03-16 12:00',
                    //     }
                    // ],
                    // '2024-03-18' : [
                    //     {
                    //         start: '2024-03-16 9:00',
                    //         end: '2024-03-16 10:00',
                    //     },
                    //     {
                    //         start: '2024-03-16 10:00',
                    //         end: '2024-03-16 11:00',
                    //     },
                    //     {
                    //         start: '2024-03-16 11:00',
                    //         end: '2024-03-16 12:00',
                    //     }
                    // ]
                }
            };
        }
    }
}