<template>
    <div class="h-full w-full relative">
        <div class="flex flex-col p-4 gap-4 h-full w-full">
            <div class="font-semibold">Вашата информация:</div>

            <div class="flex flex-col items-start w-full gap-2">
                <label class="label">Име</label>
                <input v-model="state.name" placeholder="Мария Иванова" class="tail-input w-full"/>
            </div>

            <div class="flex flex-col items-start w-full gap-2">
                <label class="label">Телефон</label>
                <input v-model="state.phone" placeholder="+359 89 630 6384" class="tail-input w-full"/>
            </div>

        </div>
         <transition enter-active-class="slide-in-bottom"
                    leave-active-class="slide-out-bottom"
                    mode="out-in">
            <div v-if="state.name && ((state.phone.startsWith('0') && state.phone.length >= 10) || (state.phone.startsWith('+359') && state.phone.length >= 13)) "
                 class="pt-3 px-6 pb-5 w-full border-t bg-white border-gray-250 absolute bottom-0 h-min flex gap-4 items-center justify-around">
                <button @click="state.name = null; state.phone = null" class="secondary-button h-11 flex-1">
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

import {object, string} from "yup";
import {reactive} from "vue";
import {useBookingStore} from "../../store/booking";
import {useRouter} from "vue-router";

const bookingStore = useBookingStore();
const router = useRouter();
const state = reactive({
    name: '',
    phone: '',
})

const submit = ()=>{
    bookingStore.setCustomer(state.name, state.phone);
    router.push({name: 'booking.otp'});
}

</script>

<style scoped>

</style>