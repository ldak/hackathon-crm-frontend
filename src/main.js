import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import { createPinia } from 'pinia'
import 'vue-skeletor/dist/vue-skeletor.css';
import {useUserStore} from "./store/user";
import { Skeletor } from 'vue-skeletor';
import * as Yup from 'yup';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import {UserType} from "./services/interfaces.ts";
import {useTripStore} from "./store/trip/index.ts";

Yup.setLocale({
    mixed: {
        required: 'Полето е задължително',
        min: ({min}) => "Трябва да е поне " + min + " символа",
        max: ({max}) => "Трябва да е по-малко от " + max + " символа"
    },
});
const pinia = createPinia()

const app = createApp(App)

app.use(setupCalendar, {})
app.use(router)
app.use(pinia);


app.component(Skeletor.name, Skeletor);
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker);

(async ()=>{
    const token = localStorage.getItem("authorization");
    if(!token){
        await app.mount('#app');
        router.push({name: "login"})
        return;
    }

    const userStore = useUserStore()
    try{
        await userStore.loginToken(token)
        if(userStore.user.Type === UserType.Driver){
            const tripStore = useTripStore();
            await tripStore.loadTrip();
            await app.mount('#app');
            if(tripStore.isTripStarted){
                await router.push({name: 'driver.store', params:{index: 0}})
                return;
            }
            await router.push({name: 'driver.trip.start', params:{index: 0}})
            return;
        }
        await app.mount('#app');

    }catch (e){
        await app.mount('#app');
        localStorage.removeItem('authorization')
        await router.push({name: "login"})
    }

})()