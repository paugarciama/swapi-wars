<template>
  <div class="starships-wrapper">

    <header>
      <h1>Planets List</h1>
      <p>Get lost on this huge galaxy</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="planets.length">
      <PlanetList :planets="displayedPlanets" />
    </div>

    <div v-else>
      <Spinner />
    </div>

    <Pagination 
      :page="page" 
      :pages="pages"
      @sendPage="page = $event"/>

    <BackButton />

  </div>
</template>

<script>
import PlanetList from '@/components/lists/PlanetList'
import Spinner from '@/components/Spinner'
import BackButton from '@/components/BackButton'
import Pagination from '@/components/Pagination'
import getPlanets from '@/composables/getPlanets'
import { ref, computed } from '@vue/runtime-core'

export default {
  components: { 
    PlanetList,
    Spinner,
    BackButton,
    Pagination 
  },
  setup() {
    const page = ref(1)
    const perPage = ref(10)
    const pages = ref([1, 2, 3, 4, 5, 6])

    const { planets, error, load } = getPlanets()

    load()

    const displayedPlanets = computed(() => {
      let from = (page.value * perPage.value) - perPage.value
      let to = (page.value * perPage.value)
      return planets.value.slice(from, to)
    })

    return { planets, error, displayedPlanets, page, pages }
  }
}
</script>
