<script setup>
import { RouterView } from "vue-router";
import CabeceraPrincipal from "@/components/CabeceraPrincipal.vue";
</script>

<template>
  <div>
    <CabeceraPrincipal titulo="Domotica" />
    <RouterView />
  </div>
</template>

<style scoped></style>
