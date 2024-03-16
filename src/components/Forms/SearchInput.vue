<template>
    <div class="relative w-min">
        <input v-model="model"
               type="text"
               name="search"
               placeholder="Tърси..."
               class="block pl-5 pr-10 rounded-full border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-0" />
        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-3 text-gray-600">
                <MagnifyingGlassIcon/>
        </div>
    </div>
</template>

<script setup>
import {MagnifyingGlassIcon} from "@heroicons/vue/20/solid";
import {computed} from "vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: String,
})

const model = computed({
    get: ()=> props.modelValue,
    set: (value) => emits('update:modelValue', value)
})

</script>

<style scoped>

</style>