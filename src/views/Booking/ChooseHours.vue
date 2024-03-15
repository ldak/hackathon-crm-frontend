
<template>
<div class="h-full w-full relative">
    <div class="flex flex-col p-4 gap-4 h-full w-full">
        <div class="font-semibold">Избери час:</div>
        <div class="border p-4 bg-white border-gray-100 flex flex-col gap-5 w-full overflow-x-hidden">
            <div class="flex justify-between">
                <div class="">
                    {{monthYear}}
                </div>
                <div class="flex gap-2">
                    <button :disabled="state.weekDate < new Date()" class="p-4"
                            @click="moveBack()" >
                        <ChevronLeftIcon class="w-5 text-blue-400"/>
                    </button>
                    <button :disabled="moment().diff(state.weekDate, 'days') == -24" class="p-4"
                            @click="moveForward()" >
                        <ChevronRightIcon class="w-5 text-blue-400"/>
                    </button>
                </div>
            </div>
            <div class="flex transition-all duration-500 " :style="transitionComputed">
                <button v-for="i in 30"
                     class="flex flex-col gap-2 items-center cursor-pointer"
                     style="min-width: 20%"
                     @click="state.selectedDate = moment(state.baseDate).add(i, 'days').toDate()"
                     >
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
            <div class="grid">

            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import * as moment from "moment/moment";
import 'moment/locale/bg'
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/20/solid";
import {useBookingStore} from "../../store/booking";

const bookingStore = useBookingStore();

const state = reactive({
    baseDate: new Date(),
    weekDate: new Date(),
    selectedDate: null,
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
</script>

<style scoped>

</style>