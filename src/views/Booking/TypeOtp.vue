
<template>
    <div class="h-full w-full relative">
        <div class="flex flex-col p-4 pt-20 items-center gap-4 h-full w-full">
            <div class="font-bold text-xl">Потвърждение</div>
            <div v-if="bookingStore.getCustomer.phone"
                 class="text-sm text-center">Въведете еднократния код изпратен на: {{bookingStore.getCustomer.phone}}</div>
            <input class="tail-input w-full" v-model="state.otp" type="number">
        </div>
         <transition enter-active-class="slide-in-bottom"
                    leave-active-class="slide-out-bottom"
                    mode="out-in">
            <div v-if="state.otp"
                 class="pt-3 px-6 pb-5 w-full border-t border-gray-250 absolute bottom-0 h-min flex gap-4 items-center justify-around">
                <button @click="state.otp= null" class="secondary-button h-11 flex-1">
                    Отказ
                </button>
                <button @click="submit" class="primary-button h-11 flex-1">
                    Напред
                </button>
            </div>
        </transition>
    </div>

</template>

<script setup>

import {useBookingStore} from "../../store/booking";
import {reactive} from "vue";
import {useRouter} from "vue-router";

const bookingStore = useBookingStore();
const router = useRouter();

const state = reactive({
    otp: '',
})

const submit = ()=>{
    bookingStore.bookAppointment(state.otp);
    router.push({name: 'booking.success'});
}
</script>

<style scoped>

</style>