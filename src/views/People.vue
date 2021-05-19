<template>

  <div class="people-wrapper">

    <header>
      <h1>People List</h1>
      <p>All characters from the movies in one place</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="characters.length">
      <PeopleList :characters="displayedCharacters" />
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
import PeopleList from '@/components/lists/PeopleList'
import Spinner from '@/components/Spinner'
import Pagination from '@/components/Pagination'
import BackButton from '@/components/BackButton'
import getPeople from '@/composables/getPeople'
import { ref, computed } from 'vue'

export default {
  components: { 
    PeopleList,
    Spinner,
    Pagination,
    BackButton 
  },
  setup() {
    const page = ref(1)
    const perPage = ref(12)
    const pages = ref([1, 2, 3, 4, 5, 6, 7])

    const { characters, error, load } = getPeople()

    load()

    console.log(characters)

    const displayedCharacters = computed(() => {
      let from = (page.value * perPage.value) - perPage.value
      let to = (page.value * perPage.value)
      return characters.value.slice(from, to)
    })
    
    return { characters, error, displayedCharacters, page, pages }
  }
}
</script>

<style>

</style>