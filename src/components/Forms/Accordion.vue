<template>
    <div class="relative bg-gray-50 shadow ring-1 ring-black ring-opacity-5 rounded-lg px-4 py-4 w-full">
        <div class="flex justify-between items-center">
            <h4 @click="open"
                class="cursor-pointer font-semibold">
                {{ title }}
            </h4>
            <button class="transition-all duration-300"
                    :class="{'-rotate-180': state.expanded}"
                    @click="open">
                <ChevronDownIcon class="w-4 min-w-4"/>
            </button>
        </div>
        <div :style="contentStyle" class="content w-full">
            <div v-if="state.random" ref="info" :style="infoStyle" class="info w-full">
                <div class="h-px absolute left-0 mt-2 right-0 bg-gray-300"></div>
                <slot name="default"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, computed, reactive, nextTick} from "vue";
import {ChevronDownIcon} from "@heroicons/vue/20/solid";

const props = defineProps({
    title: String,
})
const info = ref();

const state = reactive({
    expanded: false,
    random: false,
})

const open = ()=>{
    if(state.expanded){
        state.expanded = false;
        setTimeout(()=>{
            state.random = false;
        }, 300)

    }else{
        state.random = true;
        nextTick(()=>state.expanded = true);
    }
}

const contentStyle = computed(() => {
    console.log(info.value?.offsetHeight)
    return { "max-height": state.expanded ? (info.value?.offsetHeight +"px") : 0 };
});

const infoStyle = computed(() => {
    return { opacity: state.expanded ? 1 : 0 };
});

</script>

<style scoped>

.content {
    max-height: 0;
    transition: max-height 0.3s ease-out;
}
.info {
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-out;
}
</style>
