<template>
    <ContainerGlobal>
        <template #title>{{ fullName }}</template>
    </ContainerGlobal>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/user";
import {computed} from "vue";
import ContainerGlobal from "@/components/ContainerGlobal.vue";

const {$getUser, user} = useUserStore()
$getUser()

const fullName = computed(() => `${user.firstname} - ${user.lastname}`)
</script>
