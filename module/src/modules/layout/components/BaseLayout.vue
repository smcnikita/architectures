<template>
  <BaseHeader />

  <BaseMain>
    <slot />
  </BaseMain>

  <BaseFooter />
</template>

<script setup lang="ts">
import BaseHeader from "@/components/header";
import BaseMain from "@/components/main";
import BaseFooter from "@/components/footer";
</script>

<style scoped></style>
