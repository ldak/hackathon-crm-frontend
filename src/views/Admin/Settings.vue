
<template>
<div class="w-full">
    <div class="p-4 relative border-gray-200 border rounded-lg max-w-screen-sm">
        <div class="font-bold mb-1">Услуги</div>
        <div class="text-sm mb-2">Услугите, които добавите тук, ще могат да се запазват през онлайн инструмента за резервация.</div>
        <div class="h-px bg-gray-200"></div>

        <div class="flex flex-col gap-2 items-start mt-4 w-full">
            <div class="flex gap-4 w-full">
                <div class="w-10/12">Услуги</div>
                <div class="w-2/12">Времетраене</div>
            </div>
            <transition-group name="fade">
                <div v-for="service in state.services"
                     :key="service.uuid"
                     class="flex items-center gap-2 w-full">
                    <input v-model="service.name" class="w-10/12 tail-input">
                    <div class="w-2/12 flex-center gap-2">
                        <div class="relative flex-center flex-1">
                            <input v-model="service.duration" class="w-full tail-input pr-10">
                            <div class="absolute right-2 text-gray-500">часа</div>
                        </div>
                        <button @click="state.services = state.services.filter((s) => s.uuid!=service.uuid);">
                            <TrashIcon class="w-4 text-red-600"/>
                        </button>
                    </div>
                </div>
            </transition-group>
            <button class="soft-button" @click="add" >Добави услуга +</button>

        </div>
        <div class="mt-4 flex w-full justify-between">
            <button class="secondary-button" @click="state.services =  { ...state.original_services}">Отказ</button>
            <button class="primary-button" @click="submit">Запази</button>
        </div>
    </div>
</div>
</template>

<script setup>
import {TrashIcon} from '@heroicons/vue/24/outline'
import {onMounted, reactive} from "vue";
import {Toast} from "../../swal/index.js";

const state = reactive({
    original_services: null,
    services: [
        {
            uuid: 213,
            name: "Купи котка",
            duration: 12
        },
        {
            uuid: 214,
            name: "Купи котка",
            duration: 12
        }
    ]
});

const add = ()=>{
    state.services.push({name: 'Услуга', uuid: Math.random() * 100, duration: 2 })
}

const submit = ()=>{
    state.original_services = {...state.services};
    Toast.fire({
        icon: "success",
        title: 'Успешно запазихте услугите'
    })

}

onMounted(()=>{
    state.original_services = {...state.services};
})
</script>

<style scoped>

</style>