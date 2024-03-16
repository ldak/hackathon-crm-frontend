<template>
    <transition  enter-active-class="fade-in"
                 leave-active-class="fade-out"
                 mode="out-in">
        <div :key="totalPages" class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden">
                <a href="#"
                   class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Назад</a>
                <a href="#"
                   class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Напред</a>
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p v-if="totalEntities" class="text-sm text-gray-700">
                        Показваме {{ page < totalPages ? 10 : totalEntities - (page - 1) * 10}} от {{ totalEntities }} резултата
                    </p>
                </div>
                <div>
                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button @click="prevPage"
                                class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span class="sr-only">Previous</span>
                            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true"/>
                        </button>
                        <!-- Current: "z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                        <button v-for="link in links"
                                @click="selectPage(link)"
                                :class="{
                                'z-10 bg-blue-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600': link === page,
                                'hover:bg-gray-50 focus:z-20 cursor-pointer': link !== '...' && link !== page,
                                'transition-all relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 min-w-12 flex-center': true,
                                'cursor-default': link === '...',
                            }">
                            {{ link }}
                        </button>

                        <button @click="nextPage"
                                class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span class="sr-only">Next</span>
                            <ChevronRightIcon class="h-5 w-5" aria-hidden="true"/>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/20/solid";
import {computed} from "vue";

const emits = defineEmits(['update:page'])
const props = defineProps({
    page: Number,
    totalPages: Number,
    totalEntities: Number,
})

const prevPage = () => {
    if (props.page > 1) {
        emits('update:page', props.page - 1)
    }
}

const nextPage = () => {
    if (props.page < props.totalPages) {
        emits('update:page', props.page + 1)
    }
}

const selectPage = (link) => {
    if (link === '...')
        return;
    emits('update:page', link)
}

const links = computed(() => {

    const links = Array.from({length: props.totalPages}, (_, index) => index + 1);

    if (links.length <= 9)
        return links;

    const leftLinks = props.page;
    const stack = [];
    stack.push(links[0]);
    stack.push(props.page > 5 ? '...' : links[1]);
    let i;
    if (props.page <= 4) {
        i = 2;
    } else if (links.length - props.page <= 3) {
        i = links.length - 7;
    } else {
        i = props.page - 3;
    }
    for (let j = 0; j < 5; j++) {
        stack.push(links[i++]);
    }
    stack.push(links.length - props.page > 4 ? '...' : links[links.length - 2]);
    stack.push(links[links.length - 1]);
    return stack;
});
</script>
<style scoped>

</style>