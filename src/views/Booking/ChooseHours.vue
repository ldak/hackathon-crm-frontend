
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
                    <button :disabled="state.weekDate < new Date()" class="p-4" @click="moveBack()" >
                        <ChevronLeftIcon class="w-5 text-blue-400"/>
                    </button>
                    <button :disabled="moment().diff(state.weekDate, 'days') == 25" class="p-4" @click="state.weekDate = state.weekDate.add(5, 'days')" >
                        <ChevronRightIcon class="w-5 text-blue-400"/>
                    </button>
                </div>
            </div>
            <div class="flex" :style="'transition:' + moment().diff(state.weekDate, 'days') / 5 * 100 + '%'">
                <div v-for="i in 30"
                     class="min-w-16 flex flex-col items-center"
                     >
                    <div class="text-sm text-gray-600">
                        {{moment().add(i, 'days').locale('bg').format('ddd')}}
                    </div>
                    <div class="w-9 h-9 flex-center text-md">
                        {{moment().add(i, 'days').format('D')}}
                    </div>
                </div>
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
    weekDate: moment(),
    selectedDate: null,
})

const monthYear = computed(()=>{
    return state.weekDate.locale("bg").format("YYYY MMMM");
})

const moveBack = ()=>{
    state.weekDate = state.weekDate.add(5, 'days')
}
</script>

<style scoped>

</style>