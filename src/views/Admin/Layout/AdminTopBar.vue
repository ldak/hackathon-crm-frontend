<template>
    <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="emits('openSideBar')">
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"/>

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div class="flex-1 font-bold text-lg flex items-center">
                <div class="">
                    {{route.meta.title}}
                </div>
            </div>
            <div class="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">View notifications</span>
                    <BellIcon class="h-6 w-6" aria-hidden="true"/>
                </button>

                <!-- Separator -->
                <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"/>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative">
                    <MenuButton class="-m-1.5 flex items-center p-1.5">
                        <span class="sr-only">Open user menu</span>
<!--                        Avatar Icon-->
                        <div class="h-8 w-8 rounded-full bg-blue-600 flex-center">
                            <div class="font-bold text-white text-xs">
                                {{userStore.getInitials}}
                            </div>
                        </div>

                        <span class="hidden lg:flex lg:items-center">
                                  <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                      {{userStore.getUser?.Name}}
                                  </span>
                                  <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                </span>
                    </MenuButton>
                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                                class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <MenuItem>
                                <button @click="logOut" class="block px-3 py-1 text-sm leading-6 text-gray-900">
                                    Изход
                                </button>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </div>

</template>

<script setup>

import {ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/vue/20/solid";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import {Bars3Icon, BellIcon} from "@heroicons/vue/24/outline";
import {useUserStore} from "../../../store/user/index.ts";
import {useRoute, useRouter} from "vue-router";

const emits = defineEmits(['openSideBar'])
const router = useRouter();
const route = useRoute();

const userStore = useUserStore();

const logOut = async ()=>{
    //wait to go to login before removing user
    await router.push({name: "login"})
    userStore.user = null;
    localStorage.removeItem("authorization");
}


</script>

<style scoped>

</style>