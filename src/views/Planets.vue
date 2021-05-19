<template>
  <div class="starships-wrapper">

    <header>
      <h1>Planets List</h1>
      <p>Get lost on this huge galaxy</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="planets.length">
      <PlanetList :planets="planets" />
    </div>

    <div v-else>
      <Spinner />
    </div>

  </div>
</template>

<script>
import PlanetList from '@/components/PlanetList'
import Spinner from '@/components/Spinner'
import getPlanets from '@/composables/getPlanets'

export default {
  components: { 
    PlanetList,
    Spinner 
  },
  setup() {
    const { planets, error, load } = getPlanets()

    load()

    return { planets, error }
  }
}
</script>

<style>

</style>