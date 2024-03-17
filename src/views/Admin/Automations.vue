<template>
<div class="w-full flex flex-col gap-4">
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <BellIcon class="w-6"/>
            <div class="">Потвърждение на запазването на час</div>
            <div class="flex-1"></div>
            <BasicToggle v-model:enabled="state.app_conf.enabled"/>
        </div>
        <div class="text-sm">
            Когато тази автоматизация е включена, всеки клиент, който си запази час през платформата, ще получи съобщение за потвърждение до 15 минути след завършване на резервацията.
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
            <ClockIcon class="w-6"/>
            <div class="">Напомняне за запазен час</div>
            <div class="flex-1"></div>
            <BasicToggle v-model:enabled="state.app_reminder.enabled"/>
        </div>
        <div class="text-sm">
            Когато тази автоматизация е включена, всеки клиент ще получи напомняне за часа си в избран от Вас интервал.
        </div>
        <textarea v-model="state.app_reminder.message" rows="5" class="w-full tail-input"/>
        <div class="flex gap-2 items-center">
            Това съобщение ще се изпрати
            <div class="relative flex-center">
                <input v-model="state.app_reminder.duration" class="max-w-16 tail-input pr-10">
                <div class="absolute right-2 text-gray-500">часа</div>
            </div>
            преди часа на клиента
        </div>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="submit(state.app_reminder)">
                Запази
            </button>
        </div>
    </div>
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <StarIcon class="w-6"/>
            <div class="">Обротна връзка</div>
            <div class="flex-1"></div>
            <BasicToggle v-model:enabled="state.follow_up.enabled"/>
        </div>
        <div class="text-sm">
            Автоматизацията цели да Ви даде обратна връзка от клиентите Ви и да ги накара да почувстват, че Ви е грижа за тях и услугата, която им предлагате. За оптимални резултати, можете да добавите линк към вашият Google My Business профил, за да оставят клиентите Ви ревю.
        </div>
        <textarea v-model="state.follow_up.message" rows="5" class="w-full tail-input"/>
        <div class="flex gap-2 items-center">
            Това съобщение ще се изпрати
            <div class="relative flex-center">
                <input v-model="state.app_conf.duration" class="max-w-16 tail-input pr-10">
                <div class="absolute right-2 text-gray-500">дни</div>
            </div>
            след часа на клиента
        </div>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="submit(state.follow_up)">
                Запази
            </button>
        </div>
    </div>
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <StarIcon class="w-6"/>
            <div class="">Покана за последващо съобщение</div>
            <div class="flex-1"></div>
            <BasicToggle v-model:enabled="state.canned_service.enabled"/>
        </div>
        <div class="text-sm">
            Изпратете съобщение на клиентите си с напомняне за повторно посещение за дадена услуга. Пример: Изпратете напомняне за смяна на маслото на автомобила 6 месеца след посещението на клиента.
        </div>
        <textarea v-model="state.canned_service.message" rows="5" class="w-full tail-input"/>
        <div class="flex gap-2 items-center">
            Това съобщение ще се изпрати
            <div class="relative flex-center ">
                <input v-model="state.app_reminder.duration" class="max-w-16 tail-input pr-10">
                <div class="absolute right-2 text-gray-500">дни</div>
            </div>
            след часа на клиента
        </div>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="send(state.canned_service)">
                Изпрати
            </button>
        </div>
    </div>
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <StarIcon class="w-6"/>
            <div class="">Закъснение на часовете</div>
            <div class="flex-1"></div>
<!--            <BasicToggle v-model:enabled="state.follow_up.enabled"/>-->
        </div>
        <div class="text-sm">
            Някой час е отнел повече от предвиденото? Уведомете оставащи за деня всички клиенти, че часовете им ще закъснеят само с един клик!
        </div>
        <textarea v-model="state.delay.message" rows="5" class="w-full tail-input"/>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="send(state.delay)">
                Изпрати
            </button>
        </div>
    </div>
    <div class="p-4 border-gray-200 border rounded-lg flex flex-col gap-4 max-w-screen-sm w-full">
        <div class="flex gap-4 items-center">
            <StarIcon class="w-6"/>
            <div class="">Персонализарани съобщения</div>
            <div class="flex-1"></div>
            <!--            <BasicToggle v-model:enabled="state.follow_up.enabled"/>-->
        </div>
        <div class="">
            Изпратете СМС към всички Ваши контакти, запазвали час чрез платформата ни. Ваше лично послание, изпратено ведната, само с един клик!
        </div>
        <textarea v-model="state.campaign.message" rows="5" class="w-full tail-input"/>
        <div class="flex justify-end">
            <button class="primary-button"
                    @click="send(state.campaign)">
                Изпрати
            </button>
        </div>
    </div>

</div>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import {BellIcon, ClockIcon, StarIcon} from "@heroicons/vue/24/outline";
import BasicToggle from "../../components/Forms/BasicToggle.vue";
import {Toast} from "../../swal";

const state = reactive({
    app_conf:{
        enabled: true,
        message: 'Готово, {{customer.first_name}}! Вашият час при {{account.name}} за {{service}} е потвърден. Ще се видим на {{appointment.date_formatted}}. ',
        duration: 2
    },
    app_reminder:{
        enabled: false,
        message: 'Здравей, {{appointment.customer.first_name}}! {{account.name}}  с кратко напомняне за часа Ви утре на {{appointment.date_formatted}}.  Ако имате въпроси или трябва да направите актуализации на срещата си, можете да отговорите на това съобщение. 😊 Очакваме Ви с нетърпение!',
        duration: 2
    },
    follow_up:{
        enabled: true,
        message: 'Здравей, {{customer.first_name}}. Доволни ли сте от посещението си при нас?',
        duration: 2
    },
    canned_service:{
        enabled: true,
        message: 'Здравейте! Минаха 6 месеца от {{last_service}}! Ако искате да си запазите час за смяна на масло, можете да го направите тук - {{Custom.Booking_link}}',
        duration: 2
    },
    delay:{
        enabled: true,
        message: 'Здравейте, {{customer.first_name}}. Днес има забавяне в часовете, налага се да преместим часа Ви с 15 минути напред. Ако това не е удобно за Вас - моля свържете се с нас чрез отговор на това съобщение.',
        duration: 2
    },
    campaign:{
        enabled: true,
        message: 'По случай месеца на жената, дамите, възползвали се от нашите услуги получават 10% отстъпка!',
        duration: 2
    },
})

const submit = (automation) => {
    Toast.fire({icon: 'success', title: 'Успешно запазена автоматизация'});
}

const send = (automation) => {
    Toast.fire({icon: 'success', title: 'Успешно изпратено съобщение'});
}


</script>

<style scoped>

</style>