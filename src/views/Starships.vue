<template>
  <div class="starships-wrapper">

    <header>
      <h1>Starships List</h1>
      <p>Explore and find your favourite vehicle</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="starships.length">
      <StarshipList :starships="displayedStarships" />
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
import StarshipList from '@/components/lists/StarshipList' 
import Spinner from '@/components/Spinner'
import Pagination from '@/components/Pagination'
import BackButton from '@/components/BackButton'
import getStarships from '@/composables/getStarships'
import { ref, computed } from 'vue'

export default {
  components: { 
    StarshipList,
    Spinner,
    Pagination,
    BackButton
  },
  setup() {
    const page = ref(1)
    const perPage = ref(9)
    const pages = ref([1, 2, 3, 4])

    const { starships, error, load } = getStarships()

    load()

    const displayedStarships = computed(() => {
      let from = (page.value * perPage.value) - perPage.value
      let to = (page.value * perPage.value)
      return starships.value.slice(from, to)
    })

    return { starships, error, displayedStarships, page, pages }
  }
}
</script>

<style>

</style>