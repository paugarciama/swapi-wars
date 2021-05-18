import { ref } from 'vue'

const getPlanets = () => {
  const planets = ref([])
  const error = ref(null)
  
  const load = async () => {
    try {
  
      let data = await fetch('https://swapi.dev/api/planets/')
  
      if (!data.ok) {
        throw new Error("Data has been lost in the outer space...")
      }
      
      let response = await data.json()
      planets.value = response.results
  
    } catch(e) {
      error.value = e.message
      console.log(error.value)
    }
  }

  return { planets, error, load }
}

export default getPlanets