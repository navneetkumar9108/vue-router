<script setup>
import { RouterLink } from "vue-router";

const posts = [
  { id: "1", title: "How to learn vue js" },
  { id: "2", title: "Learn react in 2 minutes" },
  { id: "3", title: "Learn core java easy way" },
  { id: "4", title: "Python topic you should learn" },
];
</script>

<template>
  <div>Posts Page - All Posts</div>
  <!-- <h1>Post 1</h1>
  <h1>Post 2</h1>
  <h1>Post 3</h1>
  <h1>Post 4</h1> -->

  <div v-for="(post, i) in posts" :key="i">
    <RouterLink :to="`posts/${post.id}`">
      <h2>{{ post.title }}</h2>
    </RouterLink>
  </div>
</template>

<style scoped></style>
