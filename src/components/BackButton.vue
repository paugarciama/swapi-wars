<template>

  <button @click="goBack">Go Back</button>
  
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'BackButton',
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }

    return { goBack }
  }
}
</script>

<style>
button {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  background-color: #151e29;
  padding: 0.8rem 1.5rem;
  border: 0px solid black;
  border-radius: 0.5rem;
  outline: none;
  margin: 3rem auto;
  transition: 0.3s;
}
button:hover {
  cursor: pointer;
  background-color: #53729e;
  box-shadow: 5px 5px 10px #151e2962;
  transition: 0.3s;
}
</style>