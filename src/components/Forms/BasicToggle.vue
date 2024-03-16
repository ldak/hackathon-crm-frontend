
<template>
    <Switch v-model="enabledComp" :class="[enabledComp ? 'bg-blue-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2']">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" :class="[enabledComp ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
    </Switch>
</template>

<script setup>
import {computed, ref} from 'vue'
import { Switch } from '@headlessui/vue'

const props = defineProps({
    enabled: Boolean,
})

const emits = defineEmits(['update:enabled'])

const enabledComp = computed({
    get: ()=>{
        return props.enabled;
    },
    set: (value)=>{
        emits('update:enabled', value);
    }
})

</script>

<style scoped>

</style>