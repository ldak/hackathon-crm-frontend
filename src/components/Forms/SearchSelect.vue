<template>
    <Combobox as="div" v-model="modelComputed">
        <div class="relative">
            <ComboboxInput
                    autocomplete="off"
                    class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    @change="emits('update:search', $event.target.value)"
                    :display-value="(model) => model?.Name"/>
            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
            </ComboboxButton>

            <ComboboxOptions v-if="options.length > 0"
                             class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="model in options" :key="model.ID" :value="model" as="template"
                                v-slot="{ active, selected }">
                    <li :class="['relative cursor-default select-none py-2 pl-8 pr-4', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                        <span :class="['block truncate', selected && 'font-semibold']">
                          {{ model.Name }}
                        </span>

                        <span v-if="selected"
                              :class="['absolute inset-y-0 left-0 flex items-center pl-1.5', active ? 'text-white' : 'text-indigo-600']">
                          <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                        </span>
                    </li>
                </ComboboxOption>
            </ComboboxOptions>
        </div>
    </Combobox>
</template>

<script setup>
import {computed, ref, watch} from 'vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'
import {Combobox, ComboboxButton, ComboboxInput, ComboboxLabel, ComboboxOption, ComboboxOptions,} from '@headlessui/vue'

const emits = defineEmits(['update:modelValue', 'update:search'])
const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    }
})

const modelComputed = computed({
    get: () => {
        return props.modelValue;
    },
    set: (value) => {
        emits('update:modelValue', value)
    }
})
</script>