
<template>
    <div class="flex-center md:p-10 h-full w-full bg-gray-100">
        <div v-if="!!bookingStore.getAccount" class="flex flex-col max-w-sm w-full sm:rounded-lg bg-gray-50 drop-shadow-lg overflow-hidden h-full sm:border bor">
            <div class="bg-white relative">
                <div class="flex items-center">
                    <div class="p-4" @click="goBack">
                        <ChevronLeftIcon class="w-10"/>
                    </div>
                    <p class="text-lg font-bold">{{bookingStore.getAccount.name}}</p>
                </div>
                <div class="w-full h-0.5 bg-gray-100">
                    <div :class="{'w-1/4': route.name === 'booking.service',
                                    'w-2/4' : route.name === 'booking.hours',
                                    'w-3/4': route.name === 'booking.customer',
                                    'w-7/8' : route.name === 'booking.otp'}"
                         class="bg-blue-400 h-full"></div>
                </div>
            </div>
            <div class="no-scroll overflow-clip flex-1 relative">
                <router-view v-slot="{ Component }">
                    <transition
                        :enter-active-class="state.enterClass"
                        :leave-active-class="state.leaveClass"
                    >
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ChevronLeftIcon} from "@heroicons/vue/20/solid";
import {useBookingStore} from "../../store/booking/index.ts";
import {nextTick, onMounted, reactive} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const bookingStore = useBookingStore();

const state = reactive({
    enterClass: 'slide-in-right',
    leaveClass: 'slide-out-left',
    goingBack: false,
})

const goBack = async ()=>{
    state.goingBack = true;
    state.enterClass = 'slide-in-left';
    state.leaveClass = 'slide-out-right';
    await nextTick();
    await router.go(-1);
    await new Promise(resolve => setTimeout(resolve, 500));
    state.enterClass = 'slide-in-right';
    state.leaveClass = 'slide-out-left';
    state.goingBack = false;

}

onMounted(async ()=>{
    await bookingStore.loadInfo(route.params.account);

})
</script>


<style scoped>


.slide-in-right {
    position: absolute;
    top: 0px;
    z-index: 100;
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2024-2-13 16:14:46
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@-webkit-keyframes slide-in-right{0%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slide-in-right{0%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}

.slide-out-left{
    -webkit-animation:slide-out-left .5s cubic-bezier(.55,.085,.68,.53) both;
    animation:slide-out-left .5s cubic-bezier(.55,.085,.68,.53) both}
/* ----------------------------------------------
 * Generated by Animista on 2024-2-13 16:15:23
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@-webkit-keyframes slide-out-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}}@keyframes slide-out-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}}

.slide-out-right{-webkit-animation:slide-out-right .5s cubic-bezier(.55,.085,.68,.53) both;animation:slide-out-right .5s cubic-bezier(.55,.085,.68,.53) both}
/* ----------------------------------------------
 * Generated by Animista on 2024-2-13 16:44:24
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@-webkit-keyframes slide-out-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}}@keyframes slide-out-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}}

.slide-in-left{
    position: absolute;
    top: 0px;
    -webkit-animation:slide-in-left .5s cubic-bezier(.25,.46,.45,.94) both;
    animation:slide-in-left .5s cubic-bezier(.25,.46,.45,.94) both
}
/* ----------------------------------------------
 * Generated by Animista on 2024-2-13 16:44:55
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@-webkit-keyframes slide-in-left{0%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slide-in-left{0%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
</style>