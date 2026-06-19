<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

onBeforeRouteLeave((to, from) => {
  console.log("About component - onBeforeRouteLeave called");
  // console.log("from:", from);
  // console.log("to:", to);
});
onBeforeRouteUpdate((to, from) => {
  console.log("About component - onBeforeRouteUpdate called");
  // console.log("from:", from);
  // console.log("to:", to);
});
</script>

<template>
  <div>About Page</div>
</template>

<style scoped></style>
