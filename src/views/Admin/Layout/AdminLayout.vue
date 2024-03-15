<template>
    <div>
        <TransitionRoot as="template" :show="state.sidebarOpen">
            <Dialog as="div" class="relative z-50 lg:hidden" @close="state.sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                                 enter-from="opacity-0" enter-to="opacity-100"
                                 leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                                 leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-900/80"/>
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                     enter-from="-translate-x-full" enter-to="translate-x-0"
                                     leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                                     leave-to="-translate-x-full">
                        <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                             enter-to="opacity-100" leave="ease-in-out duration-300"
                                             leave-from="opacity-100" leave-to="opacity-0">
                                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button type="button" class="-m-2.5 p-2.5" @click="state.sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <SideBar/>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <SideBar/>
        </div>
        <div class="lg:pl-72">
            <TopNavBar @open-side-bar="state.sidebarOpen = true"/>

            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <router-view v-slot="{ Component }">
                        <transition
                                enter-active-class="fade-in"
                                leave-active-class="fade-out"
                                mode="out-in"
                        >
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
            </main>
        </div>


    </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import TopNavBar from "./AdminTopBar.vue";
import SideBar from "./AdminSideBar.vue";


const state = reactive({
    sidebarOpen: false,
});

</script>