<template>
  People List
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const people = ref([])

    const getPeople = async () => {
      try {
        let response = await fetch('https://swapi.dev/api/people/')

        if (!response.ok) {
          throw new Error("Data it's been lost in the outer space...")
        }

        people.value = await response.json()

      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>

</style>