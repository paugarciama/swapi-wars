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
.list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  column-gap: 1.5rem;
  row-gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}
@media only screen and (max-width: 650px) {
  .list-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 450px) {
  .list-grid {
    grid-template-columns: 1fr;
  }
}
</style>