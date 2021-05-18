<template>
  <div class="people-wrapper">

    <header>
      <h1>People List</h1>
      <p>All characters from the movies in one place</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="characters">
      <article v-for="character in characters" :key="character">
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
import getPeople from '@/composables/getPeople'

export default {
  components: { Spinner },
  setup() {
    const { characters, error, load } = getPeople()

    load()

    return { characters, error }
  }
}
</script>

<style>

</style>