
<template>
    <Field v-slot="{ handleChange, value, errorMessage }"
           :name="name">
        <search-select :model-value="value"
                       @update:model-value="(value) => {handleChange(value); emits('update:modelValue', value)}"
                       @update:search="(event)=>emits('update:search', event)"
                       :options="options"
                       class="w-full"/>
        <div class="h-4">
            <Transition enter-active-class="fade-in"
                        leave-active-class="fade-out"
                        mode="out-in">
                <div v-if="errorMessage"
                     :key="errorMessage"
                     class="error-message max-w-full transition-all">{{errorMessage}}</div>
            </Transition>
        </div>
    </Field>
</template>

<script setup>
import { Field} from "vee-validate";
import VSelect from "./VSelect.vue";
import SearchSelect from "./SearchSelect.vue";

const emits = defineEmits(['update:search', 'update:modelValue'])
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    options:{
        type: Array,
        required: true,
    },
})
</script>



<style scoped>

</style>