import {defineStore} from "pinia";
import userService from "../../services/userService";
import client from "../../client/index";
import {AccountI, ServiceI} from "../../services/interfaces";
import accountService from "../../services/accountService";

interface BookingStateI {
    account: AccountI,
    services: ServiceI[],
}

export const useBookingStore = defineStore('user', {
    state: () :BookingStateI => ({
        account: null,
        services: null,
    }),
    getters: {
        getAccount: (state :BookingStateI):AccountI => state.account,
    },
    actions: {
        async loadStore(account_id: string){
            const {
                data: {
                    account,
                    services,
                }
            } = await accountService.get.getInfo(account_id);
            this.account = account;
            this.services = services;
        }
    },
})