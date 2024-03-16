import client from "../client";

export default {
    get: {
        getAppointments(start_time: string, end_time: string){
            return client.get('appointments/get?start_date=' + start_time + '&end_date=' + end_time)
        }
    },
    post: {
        store(start_time: string, service_uuid: string, customer_uuid: string, otp: string){
            return client.post('appointments/create', {
                date: start_time,
                service_uuid,
                client_uuid: customer_uuid,
                otp_code: otp
            })
        },
        getCustomer(name: string, phone: string){
            return client.post('/appointments/clients/get', {
                name,
                phone
            })
        }
    }
}