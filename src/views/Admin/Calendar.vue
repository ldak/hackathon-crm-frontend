
<template>
    <FullCalendar :options="state.calendarOptions" />
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bgLocale from '@fullcalendar/core/locales/bg';

import appointmentService from "../../services/appointmentService";

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
            console.log(newEvents.data);
            state.calendarOptions.events = newEvents.data.map((event) => {
                return {
                    title: event.client.name + " - " + event.service.name,
                    date: event.date
                }
            });
        }
    }
})

onMounted(()=>{
    
})
</script>

<style>
.fc-event-title {
    text-wrap: wrap;
}

.fc .fc-button-primary{
    background-color: rgb(37 99 235 ) !important;
}
.fc-day-today {
    background-color: rgb(191 219 254) !important;
}
</style>