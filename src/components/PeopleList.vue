<template>

  <section class="list-grid">
    <article v-for="character in characters" :key="character">
      <SingleCharacter :character="character" />
    </article>
  </section>

</template>

<script>
import SingleCharacter from '@/components/SingleCharacter'

export default {
  props: ['characters'],
  components: {
    SingleCharacter
  }
}
</script>

<style>
</style>