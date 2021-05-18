<template>
  <div class="people-wrapper">

    <header>
      <h1>People List</h1>
      <p>All characters from the movies in one place</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="people">
      <article v-for="character in people" :key="character">
        <h3>{{ character }}</h3>
      </article>
    </div>

    <div v-else>
      <Spinner />
    </div>

  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
import { ref } from '@vue/reactivity'

export default {
  components: { Spinner },
  setup() {
    const people = ref([])
    const error = ref(null)

    const getPeople = async () => {
      try {

        let response = await fetch('https://swapi.dev/api/people/')

        if (!response.ok) {
          throw new Error("Data it's been lost in the outer space...")
        }

        people.value = await response.json()

      } catch(e) {
        error.value = e.message
        console.log(error.value)
      }
    }

    getPeople()

    console.log(people)

    return { people, error }
  }
}
</script>

<style>

</style>