
<template>
<div class="h-full w-full relative">
    <div v-if="bookingStore.getAvailability" class="flex flex-col p-4 gap-4 h-full w-full">
        <div class="font-semibold">Избери час:</div>
        <div class="border p-4 bg-white border-gray-100 flex flex-col gap-5 w-full overflow-x-hidden">
            <div class="flex justify-between">
                <div class="">
                    {{monthYear}}
                </div>
                <div class="flex gap-2">
                    <button :disabled="state.weekDate < new Date()" class=""
                            @click="moveBack()" >
                        <ChevronLeftIcon class="w-5 text-blue-400"/>
                    </button>
                    <button :disabled="moment().diff(state.weekDate, 'days') == -24" class=""
                            @click="moveForward()" >
                        <ChevronRightIcon class="w-5 text-blue-400"/>
                    </button>
                </div>
            </div>
            <div class="flex transition-all duration-500 " :style="transitionComputed">
                <button :disabled="!bookingStore.getAvailability[moment(state.baseDate).format('YYYY-MM-DD')] || moment(state.baseDate).weekday() === 5 ||  moment(state.baseDate).weekday() === 6"
                        class="flex flex-col gap-2 items-center cursor-pointer disabled:opacity-70"
                        style="min-width: 20%"
                        @click="state.selectedDate = moment(state.baseDate).toDate()">
                    <span class="text-sm text-gray-600"
                          :class="{
                            'text-blue-400': moment(state.baseDate).diff(state.selectedDate, 'days')==0,
                        }">
                        {{moment().locale('bg').format('ddd')}}
                    </span>
                    <span class="w-9 h-9 flex-center text-md rounded-md"
                          :class="{'bg-blue-400 text-white': moment(state.baseDate).diff(state.selectedDate, 'days')==0}">
                        {{moment().format('D')}}
                    </span>
                </button>
                <button v-for="i in 30"
                        :disabled="!bookingStore.getAvailability[moment(state.baseDate).add(i, 'days').format('YYYY-MM-DD')]  || moment(state.baseDate).add(i, 'days').weekday() === 5 ||  moment(state.baseDate).add(i, 'days').weekday() === 6"
                        class="flex flex-col gap-2 items-center cursor-pointer disabled:opacity-70"
                        style="min-width: 20%"
                        @click="state.selectedDate = moment(state.baseDate).add(i, 'days').toDate()">
                    <span class="text-sm text-gray-600"
                         :class="{
                            'text-blue-400': moment(state.baseDate).diff(state.selectedDate, 'days')==-i,
                        }">
                        {{moment().add(i, 'days').locale('bg').format('ddd')}}
                    </span>
                    <span class="w-9 h-9 flex-center text-md rounded-md"
                         :class="{'bg-blue-400 text-white': moment(state.baseDate).diff(state.selectedDate, 'days')==-i}">
                        {{moment().add(i, 'days').format('D')}}
                    </span>
                </button>
            </div>
            <div class="h-px w-full bg-gray-100 "></div>
            <div v-if="state.selectedDate" class="grid grid-cols-2 gap-4">
                <button v-for="hour in bookingStore.getAvailability[moment(state.selectedDate).format('YYYY-MM-DD')]"
                        @click="state.selectedHour = hour.start"
                     :class="{
                        'secondary-button' : hour.start !== state.selectedHour,
                        'primary-button' : hour.start === state.selectedHour
                    }">
                    {{moment(hour.start).format('HH:mm')}}
                </button>
            </div>
        </div>
    </div>
     <transition enter-active-class="slide-in-bottom"
                    leave-active-class="slide-out-bottom"
                    mode="out-in">
        <div v-if="state.selectedHour" class="pt-3 px-6 pb-5 w-full border-t bg-white border-gray-250 absolute bottom-0 h-min flex gap-4 items-center justify-around">
            <button @click="state.selectedHour = null" class="secondary-button h-11 flex-1">
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
import {computed, onBeforeMount, onMounted, reactive} from "vue";
import moment from 'moment';
import 'moment/locale/bg'
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/20/solid";
import {useBookingStore} from "../../store/booking";
import {useRouter} from "vue-router";

const bookingStore = useBookingStore();
const router = useRouter()

const state = reactive({
    baseDate: new Date(),
    weekDate: new Date(),
    selectedDate: null,
    selectedHour: null,
})

const monthYear = computed(()=>{
    return moment(state.weekDate).locale("bg").format("YYYY MMMM");
})

const transitionComputed =computed(()=>{
    return {
        translate: Math.floor(moment().diff(state.weekDate, 'days') / 5) * 100 + '%'
    }
})
const moveBack = ()=>{
    console.log(moment(state.weekDate).format())
    state.weekDate = moment(state.weekDate).subtract(5, 'days').toDate();
    console.log(moment(state.weekDate).format());

}
const moveForward = ()=>{
    console.log(moment(state.weekDate).format())
    state.weekDate = moment(state.weekDate).add(5, 'days').toDate()
    console.log(moment(state.weekDate).format())
}

const submit = ()=>{
    bookingStore.setHour(state.selectedHour);
    router.push({name: 'booking.customer'});
}

onBeforeMount(()=>{
   // bookingStore.selectService(bookingStore.getSelectedService);
});
</script>

<style scoped>

</style>