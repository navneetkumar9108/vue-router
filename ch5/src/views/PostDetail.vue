<script setup>
const props = defineProps(["id"]);
console.log(props);
</script>

<template>
  <!-- Access Params in Template -->
  <div>Post Detail Page Props: {{ props }}</div>
  <div>Post Detail Page ID: {{ props.id }}</div>
</template>

<style scoped></style>
