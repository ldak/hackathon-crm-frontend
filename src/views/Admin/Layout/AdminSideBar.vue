<template>
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white"
                 alt="Your Company"/>
        </div>
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                            <router-link :to="item.to"
                                         v-slot="{ isActive }"
                                         active-class="bg-blue-700 text-white"
                                         :class="['text-blue-200 hover:text-white hover:bg-blue-700', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                <component :is="item.icon"
                                           :class="[isActive ? 'text-white' : 'text-blue-200 group-hover:text-white', 'h-6 w-6 shrink-0']"
                                           aria-hidden="true"/>
                                {{ item.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
<!--                <li>-->
<!--                    <div class="text-xs font-semibold leading-6 text-blue-200">Your teams</div>-->
<!--                    <ul role="list" class="-mx-2 mt-2 space-y-1">-->
<!--                        <li v-for="team in teams" :key="team.name">-->
<!--                            <a :href="team.href"-->
<!--                               :class="[team.current ? 'bg-blue-700 text-white' : 'text-blue-200 hover:text-white hover:bg-blue-700', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">-->
<!--                                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">-->
<!--                                            {{ team.initial }}-->
<!--                                        </span>-->
<!--                                <span class="truncate">{{ team.name }}</span>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->
                <li class="mt-auto">
                    <router-link :to="{name: 'admin.settings'}"
                                 v-slot="{ isActive }"
                                 active-class="bg-blue-700 text-white"
                                 :class="['text-blue-200 hover:text-white hover:bg-blue-700', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                        <Cog6ToothIcon :class="[isActive ? 'text-white' : 'text-blue-200 group-hover:text-white', 'h-6 w-6 shrink-0']"
                                       aria-hidden="true"/>
                        Настройки
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import {
    BuildingOfficeIcon, BuildingStorefrontIcon, CalendarIcon,
    Cog6ToothIcon, CubeIcon, PaperAirplaneIcon, PuzzlePieceIcon, ShoppingCartIcon, TagIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'
import {computed} from "vue";

const navigation = computed(()=> [
    {name: 'Календар', to: {name: "admin.calendar"}, icon: CalendarIcon},
    {name: 'Автоматизации', to: {name: "admin.automations"}, icon: PaperAirplaneIcon},
    // {name: 'Производители',  to: {name: "admin.producers"}, icon: BuildingOfficeIcon},
    // {name: 'Продукти',  to: {name: "admin.products"}, icon: CubeIcon},
    // {name: 'Обекти',  to: {name: "admin.stores"}, icon: BuildingStorefrontIcon},
    // {name: 'Отстъпки',  to: {name: "admin.discounts"}, icon: TagIcon},
    // {name: 'Региони',  to: {name: "admin.regions"}, icon: PuzzlePieceIcon},
    // {name: 'Calendar', to: {name: "admin.users"}, icon: CalendarIcon, current: false},
    // {name: 'Documents',  to: {name: "admin.users"}, icon: DocumentDuplicateIcon, current: false},
    // {name: 'Reports',  to: {name: "admin.users"}, icon: ChartPieIcon, current: false},
])

</script>


<style scoped>

</style>