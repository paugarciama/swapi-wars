<template>
  
  <header>
    <h1>Character Details</h1>
    <p>Everything about...</p>
  </header>

  <div v-if="error">{{ error }}</div>

  <div v-if="details">
    <section class="details-container">
      <article class="details-card">
        <h3>{{ details.name }}</h3>
        <p><b>Gender:</b> {{ details.gender }}</p> 
        <p><b>Birth Year:</b> {{ details.birth_year }}</p>
        <p><b>Eye Color:</b> {{ details.eye_color }}</p>
        <p><b>Hair Color:</b> {{ details.hair_color }}</p>
        <p><b>Skin Color:</b> {{ details.skin_color }}</p>
        <p><b>Height:</b> {{ details.height}}</p>
        <p><b>Mass:</b> {{ details.mass}}</p>
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

<style>
.details-container {
  max-width: 300px;
  margin: 3rem auto;
}
.details-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #2c3e50;
  background-color: rgb(230, 231, 155);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px #1c2731;
  text-align: left;
}
.details-card h3 {
  font-size: 1.2rem;
  color: white;
  background-color: #2c3e50;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px #34435294;
}
</style>