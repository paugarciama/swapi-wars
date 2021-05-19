import { ref } from 'vue'

const getStarships = () => {
  const starships = ref([])
  const error = ref(null)
  const url = ref('https://swapi.dev/api/starships/')
  
  const load = async () => {
    try {
  
      do {
        let data = await fetch(url.value)
    
        if (!data.ok) {
          throw new Error("Data has been lost in the outer space...")
        }
        
        let response = await data.json()
        url.value = response.next
        starships.value.push(...response.results)
  
      } while(url.value)

    } catch(e) {
      error.value = e.message
      console.log(error.value)
    }
  }

  return { starships, error, load }
}

export default getStarships