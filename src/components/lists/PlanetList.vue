<template>

  <section class="list-grid">
    <article v-for="planet in planets" :key="planet">
      <SinglePlanet :planet="planet" />
    </article>
  </section>

</template>

<script>
import SinglePlanet from '@/components/singletons/SinglePlanet'

export default {
  props: ['planets'],
  components: {
    SinglePlanet
  }
}
</script>

<style>
</style>