<template>

  <div class="list-card">
    <router-link :to="{ name: 'PlanetDetails', params: { url: planet.url }}">
      <h3>{{ planet.name }}</h3>
    </router-link>
  </div>

</template>

<script>
export default {
  props: ['planet']
}
</script>