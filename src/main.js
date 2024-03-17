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
import * as _moment from "moment/moment";
const moment = _moment;


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
app.use(router);
app.use(moment);
app.use(pinia);


app.component(Skeletor.name, Skeletor);
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker);

(async ()=>{
    const token = localStorage.getItem("authorization");
    if(!token){
        await app.mount('#app');
        return;
    }
    try{
        const userStore = useUserStore();
        await userStore.loginToken(token)
    }catch (e){
        localStorage.removeItem("authorization")
    }
    await app.mount('#app');


})()