<template>

  <section class="list-grid">
    <article v-for="starship in starships" :key="starship">
      <SingleStarship :starship="starship" />
    </article>
  </section>

</template>

<script>
import SingleStarship from '@/components/SingleStarship'

export default {
  props: ['starships'],
  components: {
    SingleStarship
  }
}
</script>

<style>
</style>