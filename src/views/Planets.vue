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

    <BackButton />

  </div>
</template>

<script>
import PlanetList from '@/components/lists/PlanetList'
import Spinner from '@/components/Spinner'
import BackButton from '@/components/BackButton'
import getPlanets from '@/composables/getPlanets'

export default {
  components: { 
    PlanetList,
    Spinner,
    BackButton 
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