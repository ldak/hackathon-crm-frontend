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
        async loadInfo(account_id: string){
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
            console.log(service, this.account);
            let account_uuid = this.account.uuid;
            let service_uuid = service.uuid;
            const {
                data: availability
            } = await accountService.get.getAvailability(account_uuid, service_uuid);
            this.availability = availability;
            this.selectedService = service;
        },
        setHour(hour: string){
            const timestamp = (new Date(hour)).toJSON();
            console.log(timestamp);
            this.selectedHour = timestamp;
        },
        async setCustomer(name: string, phone: string){
            const {
                data: customer,
            } = await appointmentService.post.getCustomer(name, phone);
            this.customer = customer;
        },
        async bookAppointment(otp: string) {
            const data = await appointmentService.post.store(
                this.selectedHour,
                this.selectedService.uuid,
                this.customer.uuid,
                String(otp)
            );
        }

    },
})