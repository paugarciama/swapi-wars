<template>
  <div class="starships-wrapper">

    <header>
      <h1>Starships List</h1>
      <p>Explore and find your favourite vehicle</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="starships">
      <article v-for="starship in starships" :key="starship">
        <h3>{{ starship }}</h3>
      </article>
    </div>

    <div v-else>
      <Spinner />
    </div>

  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
import getStarships from '@/composables/getStarships'

export default {
  components: { Spinner },
  setup() {
    const { starships, error, load } = getStarships()

    load()

    return { starships, error }
  }
}
</script>

<style>

</style>