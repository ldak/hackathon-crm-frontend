<script setup>
import { Field} from "vee-validate";

const props = defineProps({
    type: String,
    name: String,
})
</script>

<template>
    <Field  v-slot="{field, errorMessage }"
            :name="name">
        <input v-bind="field" class="tail-input w-full" :type="type"/>
        <div class="min-h-2">
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

<style scoped>

</style>