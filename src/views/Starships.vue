<template>
  <div class="starships-wrapper">

    <header>
      <h1>Starships List</h1>
      <p>Explore and find your favourite vehicle</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="starships.length">
      <StarshipList :starships="starships" />
    </div>

    <div v-else>
      <Spinner />
    </div>

    <BackButton />

  </div>
</template>

<script>
import StarshipList from '@/components/lists/StarshipList' 
import Spinner from '@/components/Spinner'
import BackButton from '@/components/BackButton'
import getStarships from '@/composables/getStarships'

export default {
  components: { 
    StarshipList,
    Spinner,
    BackButton
  },
  setup() {
    const { starships, error, load } = getStarships()

    load()

    return { starships, error }
  }
}
</script>

<style>

</style>