<template>
  
  <header>
    <h1>Planet Details</h1>
    <p>Everything about...</p>
  </header>

  <div v-if="error">{{ error }}</div>

  <div v-if="details">
    <section class="details-container">
      <article class="details-card">
        <h3>{{ details.name }}</h3>
        <p><b>Climate:</b> {{ details.climate }}</p>
        <p><b>Terrain:</b> {{ details.terrain }}</p>
        <p><b>Surface Water:</b> {{ details.surface_water }}</p>
        <p><b>Diameter:</b> {{ details.diameter }}</p> 
        <p><b>Gravity:</b> {{ details.gravity }}</p>
        <p><b>Rotation Period:</b> {{ details.rotation_period }}</p>
        <p><b>Orbital Period:</b> {{ details.orbital_period }}</p>
        <p><b>Population:</b> {{ details.population }}</p>
      </article>
    </section>
  </div>

  <div v-else>
    <Spinner />
  </div>
  
  <BackButton />
  
</template>

<script>
import getDetails from '@/composables/getDetails'
import Spinner from '@/components/Spinner'
import BackButton from '@/components/BackButton'

export default {
  props: ['url'],
  components: {
    Spinner,
    BackButton
  },
  setup(props) {
    const { details, error, load } = getDetails(props.url)

    load()

    return { details, error }
  }
}
</script>