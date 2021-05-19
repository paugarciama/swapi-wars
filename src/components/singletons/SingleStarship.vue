<template>

  <div class="list-card">
    <router-link :to="{ name: 'StarshipDetails', params: { url: starship.url }}">
      <h3>{{ starship.name }}</h3>
    </router-link>
  </div>

</template>

<script>
export default {
  props: ['starship']
}
</script>