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
    }
}