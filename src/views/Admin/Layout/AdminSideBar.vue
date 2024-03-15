<template>
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
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
                                         active-class="bg-indigo-700 text-white"
                                         :class="['text-indigo-200 hover:text-white hover:bg-indigo-700', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                <component :is="item.icon"
                                           :class="[isActive ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'h-6 w-6 shrink-0']"
                                           aria-hidden="true"/>
                                {{ item.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
<!--                <li>-->
<!--                    <div class="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>-->
<!--                    <ul role="list" class="-mx-2 mt-2 space-y-1">-->
<!--                        <li v-for="team in teams" :key="team.name">-->
<!--                            <a :href="team.href"-->
<!--                               :class="[team.current ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-indigo-700', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">-->
<!--                                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">-->
<!--                                            {{ team.initial }}-->
<!--                                        </span>-->
<!--                                <span class="truncate">{{ team.name }}</span>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->
                <li class="mt-auto">
                    <a href="#"
                       class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
                        <Cog6ToothIcon class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                       aria-hidden="true"/>
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import {
    BuildingOfficeIcon, BuildingStorefrontIcon,
    Cog6ToothIcon, CubeIcon, PuzzlePieceIcon, ShoppingCartIcon, TagIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'
import {computed} from "vue";

const navigation = computed(()=> [
    // {name: 'Поръчки', to: {name: "admin.orders"}, icon: ShoppingCartIcon},
    // {name: 'Потребители', to: {name: "admin.users"}, icon: UsersIcon},
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