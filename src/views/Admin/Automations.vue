<template>
<div class="w-full flex flex-col gap-4 items-center">
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <BellIcon class="w-6"/>
            <div class="">Потвърждение на запазването на час</div>
            <div class="flex-1"></div>
            <BasicToggle v-model:enabled="state.app_conf.enabled"/>
        </div>
        <textarea v-model="state.app_conf.message" rows="5" class="w-full tail-input"/>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="submit(state.app_conf)">
                Запази
            </button>
        </div>
    </div>
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <BellIcon class="w-6"/>
            <div class="">Напомняне за запазен час</div>
            <div class="flex-1"></div>
            <BasicToggle v-model:enabled="state.app_conf.enabled"/>
        </div>
        <textarea v-model="state.app_reminder.message" rows="5" class="w-full tail-input"/>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="submit(state.app_reminder)">
                Запази
            </button>
        </div>
    </div>
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <BellIcon class="w-6"/>
            <div class="">Follow Up</div>
            <div class="flex-1"></div>
            <BasicToggle v-model:enabled="state.follow_up.enabled"/>
        </div>
        <textarea v-model="state.follow_up.message" rows="5" class="w-full tail-input"/>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="submit(state.follow_up)">
                Запази
            </button>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {BellIcon} from "@heroicons/vue/24/outline";
import BasicToggle from "../../components/Forms/BasicToggle.vue";
import {Toast} from "../../swal";

const state = reactive({
    app_conf:{
        enabled: true,
        message: 'Готово, {{customer.first_name}}! Вашият час при {{account.name}} за {{service}} е потвърдена. Ще се видим на {{appointment.date_formatted}}. '
    },
    app_reminder:{
        enabled: false,
        message: 'Здравей, {{appointment.customer.first_name}}! {{account.name}}  с кратко напомняне за часа Ви утре на {{appointment.date_formatted}}.  Ако имате въпроси или трябва да направите актуализации на срещата си, можете да отговорите на това съобщение. 😊 Очакваме Ви с нетърпение!'
    },
    follow_up:{
        enabled: true,
        message: 'Здравей, {{customer.first_name}}. Доволни ли сте от посещението си при нас?'
    },
})

const submit = (automation) =>{
    Toast.fire({icon: 'success', title: 'Успешно запазена автоматизация'});
}


</script>

<style scoped>

</style>