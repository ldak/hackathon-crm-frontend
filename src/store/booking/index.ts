import {defineStore} from "pinia";
import userService from "../../services/userService";
import client from "../../client/index";
import {AccountI, AvailabilityI, ServiceI} from "../../services/interfaces";
import accountService from "../../services/accountService";
import serviceService from "../../services/serviceService";


interface BookingStateI {
    account: AccountI,
    services: ServiceI[],
    selectedService: ServiceI,
    availability: AvailabilityI,
}

export const useBookingStore = defineStore('user', {
    state: () :BookingStateI => ({
        account: null,
        services: null,
        selectedService: null,
        availability: null,
    }),
    getters: {
        getAccount: (state :BookingStateI):AccountI => state.account,
        getServices: (state :BookingStateI):ServiceI[] => state.services,
        getSelectService: (state:BookingStateI):ServiceI => state.selectedService,
    },
    actions: {
        async loadStore(account_id: string){
            const [
                {
                    data: account
                },
                {
                    data: services,
                }
            ] = await Promise.all([accountService.get.show(account_id), serviceService.get.index(account_id)]);
            this.account = account;
            this.services = services;
        },
        async selectService(service: ServiceI){
            const {
                data: availability
            } = await accountService.get.getAvailability(this.account.uuid);
            this.availability = availability;
        }

    },
})