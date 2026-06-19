<script setup>
import { useRoute } from "vue-router";

// Accessing Current Route

const route = useRoute();
</script>

<template>
  <!-- Access Params in Template -->
  <div>
    <div>Post Detail Page params object: {{ route.params }}</div>
    <div>Post Detail Page ID: {{ route.params.id }}</div>
  </div>
</template>

<style scoped></style>
