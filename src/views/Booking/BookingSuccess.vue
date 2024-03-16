
<template>
    <div class="h-full w-full relative">
        <div class="flex flex-col p-4 pt-32 h-full w-full items-center">
            <div class="">
                <CheckCircleIcon class="min-w-32 text-green-500"/>
            </div>
            <div class="font-bold text-lg mt-4">Благодарим,</div>
            <div class="font-bold text-lg">че запазихте при нас</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {CheckCircleIcon} from "@heroicons/vue/24/outline";
import {onMounted} from "vue";

onMounted(()=>{
    const jsConfetti = new JSConfetti();

    setTimeout(() => {
        jsConfetti.addConfetti({
            emojis: ['🎉', '🔧']
        });
    }, 2500);
})

</script>

<style scoped>

</style>