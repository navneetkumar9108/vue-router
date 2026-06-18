<script setup>
import { useRoute, useRouter } from "vue-router";

// Accessing Current Route

const route = useRoute();
console.log("Route", route);
console.log(route.params);
// const {
//   fullPath,
//   hash,
//   matched,
//   meta,
//   name,
//   params,
//   path,
//   query,
//   redirectedFrom,
// } = useRoute();

// console.log("fullPath", fullPath);
// console.log("hash", hash);
// console.log("matched", matched);
// console.log("meta", meta);
// console.log("name", name);
// console.log("params", params);
// console.log("params.id", params.id);
// console.log("path", path);
// console.log("query", query);
// console.log("query.tag", query.tag);
// console.log("redirectedFrom", redirectedFrom);

// Access Router

const router = useRouter();
console.log("Router:", router);

function goBack() {
  router.back();
}
function goForward() {
  router.forward();
}
</script>

<template>
  <!-- <div>Post Detail Page</div> -->
  <div>Post Detail Page params object: {{ route.params }}</div>
  <div>Post Detail Page ID: {{ route.params.id }}</div>

  <!-- Access Query -->

  <div>Post Detail Page query object: {{ route.query }}</div>
  <div>Post Detail Page query: {{ route.query.tag }}</div>

  <!-- Access Hash -->

  <div>Post Detail Page hash object: {{ route.hash }}</div>

  <!-- Back And Forward Button -->
  <button @click="goBack">Back</button>
  <button @click="goForward">Forward</button>
</template>

<style scoped></style>
