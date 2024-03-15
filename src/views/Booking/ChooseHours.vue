
<template>
<div class="h-full w-full relative">
    <div class="flex flex-col p-4 gap-4 h-full">
        <div class="font-semibold">Избери час:</div>
        <div class="border p-4 bg-white border-gray-100 flex flex-col gap-5">
            <div class="flex justify-between">
                <div class="">
                    {{monthYear}}
                </div>
                <div class="flex gap-6">
                    <ChevronLeftIcon @click="state.weekDate = state.weekDate.add(5, 'days')" class="w-5 text-blue-400"/>
                    <ChevronRightIcon @click="state.weekDate = state.weekDate.subtract(5, 'days')" class="w-5 text-blue-400"/>
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

const state = reactive({
    weekDate: moment(),
    selectedDate: null,
})

const monthYear = computed(()=>{
    return state.weekDate.locale("bg").format("MM YYYY");
})
</script>

<style scoped>

</style>