
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
                     :key="service.id"
                     class="flex items-center gap-2 w-full">
                    <input v-model="service.name" class="w-10/12 tail-input">
                    <div class="w-2/12 flex-center gap-2">
                        <div class="relative flex-center flex-1">
                            <input v-model="service.duration" class="w-full tail-input pr-10">
                            <div class="absolute right-2 text-gray-500">мин.</div>
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
    <div class="p-4 mt-4 relative border-gray-200 border rounded-lg max-w-screen-sm">
        <div class="font-bold mb-1">Работно време</div>
        <div class="h-px bg-gray-200"></div>
        <div class="flex flex-col mt-2 gap-2">
            <div class="grid grid-cols-4 gap-2">
                <div class="col-span-2">Ден</div>
                <div class="">Начало</div>
                <div class="">Край</div>
            </div>
            <div v-for="day in state.days" class="flex items-center w-full gap-2">
                <div class="w-1/2 flex gap-2 items-center">
                    <BasicToggle v-model:enabled="day.enabled"/>
                    <div class="">{{day.title}}</div>
                </div>
                <div class="w-1/4">
                    <input :disabled="!day.enabled"
                           class="tail-input w-full disabled:opacity-60"
                           v-model="day.start"
                           type="text">
                </div>
                <div class="w-1/4">
                    <input :disabled="!day.enabled"
                           class="tail-input w-full disabled:opacity-60"
                           v-model="day.end"
                           type="text">
                </div>
            </div>
        </div>
        <div class="mt-4 flex w-full justify-between">
            <button class="secondary-button" @click="state.services =  { ...state.original_services}">Отказ</button>
            <button class="primary-button" @click="submitDays">Запази</button>
        </div>
    </div>
    <div class="p-4 mt-4 relative border-gray-200 border rounded-lg max-w-screen-sm">
        <div class="font-bold mb-1">Обедна почивка</div>
        <div class="h-px bg-gray-200"></div>
        <div class="flex flex-col mt-2 gap-2">
            <div class="grid grid-cols-4 gap-2">
                <div class="col-span-2">Ден</div>
                <div class="">Начало</div>
                <div class="">Край</div>
            </div>
            <div v-for="day in state.rest" class="flex items-center w-full gap-2">
                <div class="w-1/2 flex gap-2 items-center">
                    <BasicToggle v-model:enabled="day.enabled"/>
                    <div class="">{{day.title}}</div>
                </div>
                <div class="w-1/4">
                    <input :disabled="!day.enabled"
                           class="tail-input w-full disabled:opacity-60"
                           v-model="day.start"
                           type="text">
                </div>
                <div class="w-1/4">
                    <input :disabled="!day.enabled"
                           class="tail-input w-full disabled:opacity-60"
                           v-model="day.end"
                           type="text">
                </div>
            </div>
        </div>
        <div class="mt-4 flex w-full justify-between">
            <button class="secondary-button" @click="state.services =  { ...state.original_services}">Отказ</button>
            <button class="primary-button" @click="submitRest">Запази</button>
        </div>
    </div>
</div>
</template>

<script setup>
import {TrashIcon} from '@heroicons/vue/24/outline'
import {computed, onMounted, reactive} from "vue";
import {Toast} from "../../swal/index.js";
import BasicToggle from "../../components/Forms/BasicToggle.vue";
import serviceService from "../../services/serviceService";
import {useUserStore} from "../../store/user/index";

const userStore = useUserStore();
const state = reactive({
    original_services: null,
    services: null,
    days: [
        {
            title: 'Понеделник',
            enabled: true,
            start: '10:00',
            end: '14:00',
        },
        {
            title: 'Вторник',
            enabled: true,
            start: '10:00',
            end: '14:00',
        },
        {
            title: 'Сряда',
            enabled: true,
            start: '10:00',
            end: '14:00',
        },
        {
            title: 'Четвътък',
            enabled: true,
            start: '10:00',
            end: '14:00',
        },
        {
            title: 'Петък',
            enabled: true,
           start: '10:00',
            end: '14:00',
        },
        {
            title: 'Събота',
            enabled: false,
            start: '8:00',
            end: '12:00',
        },
        {
            title: 'Неделя',
            enabled: false,
            start: '8:00',
            end: '12:00',
        },
    ],
    rest: [
        {
            title: 'Понеделник',
            enabled: false,
            start: '12:00',
            end: '13:00',
        },
        {
            title: 'Вторник',
            enabled: false,
            start: '12:00',
            end: '13:00',
        },
        {
            title: 'Сряда',
            enabled: false,
            start: '12:00',
            end: '13:00',
        },
        {
            title: 'Четвътък',
            enabled: false,
            start: '12:00',
            end: '13:00',
        },
        {
            title: 'Петък',
            enabled: false,
            start: '12:00',
            end: '13:00',
        },
        {
            title: 'Събота',
            enabled: false,
            start: '11:00',
            end: '12:00',
        },
        {
            title: 'Неделя',
            enabled: false,
            start: '12:00',
            end: '12:00',
        },
    ]
});

const add = ()=>{
    state.services.push({name: 'Услуга', uuid: '', id: Math.random() * 100, duration: 2 })
}

const submit = async ()=>{
    state.original_services = {...state.services};
    try {
        await serviceService.patch.save(userStore.getUser.account_uuid,
            state.services.map((service)=>{
                return {
                    uuid: service.uuid,
                    name: service.name,
                    duration: service.duration,
                }
            })
        );
    }catch (e){}
    Toast.fire({
        icon: "success",
        title: 'Успешно запазихте услугите'
    })

}

const submitDays = ()=>{
    Toast.fire({
        icon: "success",
        title: 'Успешно запазихте работното време'
    })

}
const submitRest = ()=>{
    Toast.fire({
        icon: "success",
        title: 'Успешно запазихте обедните почивки'
    })

}

const timesOptions = computed(()=>{
    let times = [];
    for (let hour = 1; hour <= 23; hour++) {
        let time = `${hour}:00`;
        times.push(time);
    }
    return times;
})

onMounted(async ()=>{
    const {
        data: services,
    } = await serviceService.get.index(userStore.getUser.account_uuid);
    state.services = services.map((service)=>{
        service.id = service.uuid;
        return service;
    })
    state.original_services = {...state.services};
})
</script>

<style scoped>

</style>