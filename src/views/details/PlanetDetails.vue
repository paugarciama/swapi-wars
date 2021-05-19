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
        <p><b>Crew:</b> {{ details.crew }}</p>
        <p><b>Passengers:</b> {{ details.passengers }}</p>
        <p><b>Consumables:</b> {{ details.consumables }}</p>
        <p><b>Cargo Capacity:</b> {{ details.cargo_capacity }}</p> 
        <p><b>Manufacturer:</b> {{ details.manufacturer }}</p>
        <p><b>Model:</b> {{ details.model }}</p>
        <p><b>Hyperdrive Rating:</b> {{ details.hyperdrive_rating }}</p>
      </article>
    </section>
  </div>

  <div v-else>
    <Spinner />
  </div>
  
  
</template>

<script>
import getDetails from '@/composables/getDetails'
import Spinner from '@/components/Spinner'

export default {
  props: ['url'],
  components: {
    Spinner
  },
  setup(props) {
    const { details, error, load } = getDetails(props.url)

    load()

    return { details, error }
  }
}
</script>