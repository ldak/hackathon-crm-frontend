import client from "../client";

export default {
    get: {
        getCustomer(name: string, phone: string){
            return client.get('/appointments/clients/get', {
                params:{
                    name,
                    phone
                },
            })
        }
    },
    post: {
        store(start_time: string, service_uuid: string, customer_uuid: string, otp: string){
            return client.post('appointments/create', {
                date: start_time,
                service_uuid,
                client_uuid: customer_uuid,
                otp
            })
        }
    }
}