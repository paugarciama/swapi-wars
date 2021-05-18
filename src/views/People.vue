<template>

  <div class="people-wrapper">

    <header>
      <h1>People List</h1>
      <p>All characters from the movies in one place</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="characters">
      <PeopleList :characters="characters" />
    </div>

    <div v-else>
      <Spinner />
    </div>

  </div>
  
</template>

<script>
import PeopleList from '@/components/PeopleList'
import Spinner from '@/components/Spinner'
import getPeople from '@/composables/getPeople'

export default {
  components: { 
    PeopleList,
    Spinner 
  },
  setup() {
    const { characters, error, load } = getPeople()

    load()

    return { characters, error }
  }
}
</script>

<style>

</style>