<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <BaseInputGroup :laber-attrs="{ for: 'email' }">
      <template #label>Email</template>
      <BaseInput
        v-model="email"
        :attrs="{ type: 'email', required: true, id: 'email' }"
      />
    </BaseInputGroup>

    <BaseInputGroup :laber-attrs="{ for: 'pass' }">
      <template #label>Password</template>
      <BaseInput
        v-model="password"
        :attrs="{ type: 'password', required: true, id: 'pass' }"
      />
    </BaseInputGroup>

    <BaseButton :attrs="{ type: 'submit' }">Login</BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseInputGroup from "@/components/inputGroup";
import BaseButton from "@/ui/button";
import BaseInput, { type TBaseInputValue } from "@/ui/input";
import { ref } from "vue";

const email = ref<TBaseInputValue>(null);
const password = ref<TBaseInputValue>(null);

const onSubmit = () => {
  alert("Submitted!");
};
</script>

<style scoped></style>
