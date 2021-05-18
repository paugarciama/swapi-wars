<template>
  <div class="starships-wrapper">

    <header>
      <h1>Planets List</h1>
      <p>Get lost through this huge galaxy</p>
    </header>

    <div v-if="error">{{ error }}</div>

    <div v-if="planets">
      <article v-for="planet in planets" :key="planet">
        <h3>{{ planet }}</h3>
      </article>
    </div>

    <div v-else>
      <Spinner />
    </div>

  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
import getPlanets from '@/composables/getPlanets'

export default {
  components: { Spinner },
  setup() {
    const { planets, error, load } = getPlanets()

    load()

    return { planets, error }
  }
}
</script>

<style>

</style>