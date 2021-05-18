import { ref } from 'vue'

const getStarships = () => {
  const starships = ref([])
  const error = ref(null)
  
  const load = async () => {
    try {
  
      let data = await fetch('https://swapi.dev/api/starships/')
  
      if (!data.ok) {
        throw new Error("Data has been lost in the outer space...")
      }
  
      let response = await data.json()
      starships.value = response.results

  
    } catch(e) {
      error.value = e.message
      console.log(error.value)
    }
  }

  return { starships, error, load }
}

export default getStarships