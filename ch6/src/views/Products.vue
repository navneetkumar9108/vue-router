<script setup></script>

<template>
  <div>
    <h1>Products Page</h1>
    <RouterLink :to="{ name: 'products', params: { prod: [12, 444, 5555] } }">
      <h2>Mobile</h2>
    </RouterLink>
  </div>
</template>

<style scoped></style>
