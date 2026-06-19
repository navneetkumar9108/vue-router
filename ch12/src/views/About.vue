<script setup></script>

<template>
  <div>
    <h1>About Page</h1>
    <p v-for="n in 50">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
      voluptatem amet. Aut aspernatur et minima in. Voluptate quos architecto
      dolores autem voluptatibus fugiat alias explicabo suscipit error.
      Explicabo assumenda corporis voluptatibus doloribus, perspiciatis corrupti
      officia provident, earum voluptas totam facere necessitatibus quasi
      quaerat enim? Rerum aperiam laboriosam neque quas soluta ratione inventore
      ullam libero mollitia debitis, tempora sint vitae at. Saepe odit
      voluptatum vero excepturi expedita eligendi neque minima quibusdam aliquam
      eum culpa, dolor natus quo eveniet optio maiores sapiente quasi quod iure
      enim impedit nesciunt assumenda possimus quam. Voluptas fugiat tempora eum
      dolor excepturi? Perspiciatis fugiat aliquid officiis atque.
    </p>
    <p id="abt">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab, totam
      maxime facilis alias tempore dolorum dolorem. Eligendi molestias
      temporibus sint fugiat? Ut quidem, fuga vitae nemo quis aliquid tenetur
      voluptatum eveniet accusamus dolorem obcaecati quae dolores dolore
      voluptates dolor? Consectetur iusto dolor illum qui iste impedit amet
      repellat nisi!
    </p>
    <RouterLink :to="{ name: 'home' }"><h3>Go to Home</h3></RouterLink>
  </div>
</template>

<style scoped></style>
