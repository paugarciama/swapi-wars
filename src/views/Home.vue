<template>

  <h1>Star Wars</h1>
  <p>Don't miss anything</p>

  <CategoryCard>
    <template></template>
  </CategoryCard>

  <CategoryCard>
    <template></template>
  </CategoryCard>

  <CategoryCard>
    <template></template>
  </CategoryCard>

</template>

<script>
import CategoryCard from '@/components/CategoryCard'

export default {
  name: 'Home',
  components: {
    CategoryCard
  }
}
</script>
