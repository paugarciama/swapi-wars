import { ref } from 'vue'

const getPeople = () => {
  const characters = ref([])
  const error = ref(null)
  
  const load = async () => {
    try {
  
      let data = await fetch('https://swapi.dev/api/people/')
  
      if (!data.ok) {
        throw new Error("Data has been lost in the outer space...")
      }
      
      let response = await data.json()

      characters.value = response.results
  
    } catch(e) {
      error.value = e.message
      console.log(error.value)
    }
  }

  return { characters, error, load }
}

export default getPeople