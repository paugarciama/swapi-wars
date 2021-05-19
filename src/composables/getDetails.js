import { ref } from 'vue'

const getDetails = (url) => {
  const details = ref([])
  const error = ref(null)
  
  const load = async () => {
    try {
  
      let data = await fetch(`${url}`)
  
      if (!data.ok) {
        throw new Error("Data has been lost in the outer space...")
      }
      
      details.value = await data.json()
  
    } catch(e) {
      error.value = e.message
      console.log(error.value)
    }
  }

  return { details, error, load }
}

export default getDetails