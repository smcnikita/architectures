<template>
  <h1>Home page</h1>

  <section>
    value: {{ value }}

    <br />

    <BaseInputGroup :laber-attrs="{ for: 'test-input' }">
      <template #label>👍 Label</template>

      <BaseInput
        v-model="value"
        :attrs="{
          id: 'test-input',
          disabled: false,
        }"
      />
    </BaseInputGroup>
  </section>

  <br />
  <hr />
  <br />

  <section>
    <h2>Login form</h2>
    <BaseLoginForm />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput, { type TBaseInputValue } from "@/ui/input";
import BaseInputGroup from "@/components/inputGroup";
import BaseLoginForm from "@/modules/loginForm";

const value = ref<TBaseInputValue>(null);
</script>

<style scoped></style>
