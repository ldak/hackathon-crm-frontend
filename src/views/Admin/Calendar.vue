<template>
    <FullCalendar :options="state.calendarOptions"/>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bgLocale from '@fullcalendar/core/locales/bg';

import appointmentService from "../../services/appointmentService";
import * as moment from "moment/moment";

const handleDateClick = (arg) => {
    alert('date click! ' + arg.dateStr)
}


const state = reactive({
    calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        locale: 'bg',
        firstDay: 1,
        buttonText: {
            today: 'Днес'
        },
        initialView: 'dayGridMonth',
        events: [],
        datesSet: async (arg) => {
            const newEvents = await appointmentService.get.getAppointments(arg.start.toJSON(), arg.end.toJSON());
            state.calendarOptions.events = newEvents.data.map((event) => {
                return {
                    title: event.client.name + " - " + event.service.name,
                    date: event.date,
                    event: event,
                }
            });
        },
        eventContent: (arg) => {
            const [
                client_name, service_name
            ] = arg.event.title.split('-')
            const hour = moment(arg.event.start).format('H:mm')
            return {html :`<div class="w-full bg-blue-400 rounded-md text-white text-bold px-1"> <div>${hour}</div><div>${client_name}</div><div>${service_name}</div></div>`}
        }
    }
})

onMounted(() => {

})
</script>

<style>
.fc-event-title {
    text-wrap: wrap;
}

.fc .fc-button-primary {
    background-color: rgb(37 99 235) !important;
}

.fc-day-today {
    background-color: rgb(191 219 254) !important;
}
</style>