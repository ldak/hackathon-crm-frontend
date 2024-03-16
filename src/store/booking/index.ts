import {defineStore} from "pinia";
import userService from "../../services/userService";
import client from "../../client/index";
import {AccountI, AvailabilityI, CustomerI, ServiceI} from "../../services/interfaces";
import accountService from "../../services/accountService";
import serviceService from "../../services/serviceService";
import appointmentService from "../../services/appointmentService";


interface BookingStateI {
    account: AccountI,
    services: ServiceI[],
    selectedService: ServiceI,
    availability: AvailabilityI,
    selectedHour: string,
    customer: CustomerI,
}

export const useBookingStore = defineStore('user', {
    state: () :BookingStateI => ({
        account: null,
        services: null,
        selectedService: null,
        availability: null,
        selectedHour: null,
        customer: null,
    }),
    getters: {
        getAccount: (state :BookingStateI):AccountI => state.account,
        getServices: (state :BookingStateI):ServiceI[] => state.services,
        getSelectedService: (state:BookingStateI):ServiceI => state.selectedService,
        getAvailability: (state:BookingStateI):AvailabilityI => state.availability,
        getCustomer: (state): CustomerI => state.customer,
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
        },
        setHour(hour: string){
            this.selectedHour = hour;
        },
        async setCustomer(name: string, phone: string){
            const {
                data: customer,
            } = await appointmentService.get.getCustomer(name, phone);
            this.customer = customer;
        },
        async bookAppointment(otp: string) {
            const data = await appointmentService.post.store(
                this.selectedHour,
                this.selectedService.uuid,
                this.customer.uuid,
                otp
            );
        }

    },
})