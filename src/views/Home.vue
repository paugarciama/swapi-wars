<template>

  <h1>Star Wars</h1>
  <p>Don't miss anything</p>

  <CategoryCard v-for="category in categories" :key="category">
    <template v-slot:category-icon>
      <i :class="category.icon"></i>
    </template>
    <template v-slot:category>
      <h3>{{ category.name }}</h3>
    </template>
  </CategoryCard>

</template>

<script>
import CategoryCard from '@/components/CategoryCard'

export default {
  name: 'Home',
  components: {
    CategoryCard
  },
  setup() {
    const categories = [
      { icon: 'fas fa-users', name: 'People'},
      { icon: 'fas fa-fighter-jet', name: 'Starships'},
      { icon: 'fas fa-globe-europe', name: 'Planets'}
    ]

    return { categories }
  }
}
</script>
