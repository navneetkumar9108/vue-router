<!-- RegEx and Routes matching syntax -->
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    <RouterLink :to="{ name: 'posts' }">Posts</RouterLink>
  </nav>
  <RouterView />
  <RouterView name="sidebar" />
  <RouterView name="postsidebar" />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 24px;
  border-bottom: 1px solid red;
}

nav a {
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  margin: 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  background-color: red;
  color: white;
}
</style>
