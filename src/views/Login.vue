<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-10 py-12 lg:px-8 w-full">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Добре дошли в Appointmate</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm max-w-2xl">
            <Form :initialValues="state.user" class="flex flex-col gap-4" :validation-schema="schema" @submit="submit">
                <div class="flex flex-col items-start w-full gap-2">
                    <label class="label">Имейл</label>
                    <ValidatedInput name="email" type="email"/>
                </div>

                <div class="flex flex-col items-start w-full gap-2">
                    <label for="password" class="label">Парола</label>
                    <ValidatedInput name="password" type="password"/>
                </div>

                <div>
                    <LoadingButton text="Влез" :loading="state.loading" class="w-full"/>
                </div>
            </Form>

        </div>
    </div>
</template>

<script setup>
import {Field, Form, ErrorMessage} from "vee-validate";
import LoadingButton from "../components/Forms/LoadingButton.vue";
import {reactive} from "vue";
import { object, string } from 'yup';
import {useUserStore} from "../store/user";
import {Toast} from "../swal/index.js";
import ValidatedInput from "../components/Forms/ValidatedInput.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const schema = object({
    email: string().required().email(),
    password: string().required().min(8).max(16)
});

const state = reactive({
    loading: false,
})

const submit = async ({email, password}) => {
    state.loading = true;
    try{
        await userStore.login(email, password);
    }catch (e){
        state.loading = false;
        await Toast.fire({
            icon: "error",
            title: "Грешен имейл или парола"
        });
        return;
    }

    state.loading = false;
    await router.push({name: "admin.calendar"})

}

</script>
