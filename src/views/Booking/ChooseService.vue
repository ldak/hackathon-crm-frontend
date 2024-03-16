
<template>
    <div class="h-full w-full relative">
        <div class="flex flex-col p-4 gap-4 h-full">
            <div class="font-semibold">Избери услуга:</div>

            <div v-for="service in bookingStore.getServices"
                 @click="selectService(service)"
                 class="border rounded-md border-gray-250 w-full px-4 py-3 bg-white flex items-center gap-4"
                 :class="{'border-blue-400 text-blue-500 bg-blue-100': service.uuid === state.selectedService?.uuid}">
                <CalendarIcon class="w-8"/>
                <div class="">
                    {{service.name}}
                </div>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div v-if="state.selectedService" class="pt-3 px-6 pb-5 w-full border-t border-gray-250 absolute bottom-0 h-min flex gap-4 items-center justify-around">
                <button @click="state.selectedService = null" class="secondary-button h-11 flex-1">
                    Отказ
                </button>
                <button @click="submit" class="primary-button h-11 flex-1">
                    Напред
                </button>
            </div>
        </transition>

    </div>
</template>

<script setup lang="ts">

import {useBookingStore} from "../../store/booking";
import {reactive} from "vue";
import {ServiceI} from "../../services/interfaces";
import {CalendarIcon} from "@heroicons/vue/24/outline";
import {useRouter} from "vue-router";

const bookingStore = useBookingStore();
const router = useRouter();

const state = reactive({
    selectedService: bookingStore.getSelectService,
})

const selectService = (service: ServiceI)=>{
    if(state.selectedService?.uuid === service.uuid){
        state.selectedService = null;
        return;
    }
    state.selectedService = service;
}

const submit = () =>{
    bookingStore.selectService(state.selectedService);
    router.push({name: 'booking.hours'})
}
</script>

<style scoped>

</style>