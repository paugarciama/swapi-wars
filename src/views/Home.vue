<template>

  <header>
    <h1>Star Wars Lore</h1>
    <p>May this wiki be with you</p>
  </header>

  <section class="categories-wrapper">
    <article v-for="category in categories" :key="category">
      <router-link :to="{ path: category.path }">
        <CategoryCard>
          <template v-slot:category-icon>
            <i :class="category.icon"></i>
          </template>
          <template v-slot:category>
            <h3>{{ category.name }}</h3>
          </template>
        </CategoryCard>
      </router-link>
    </article>
  </section>

</template>

<script>
import CategoryCard from '@/components/CategoryCard'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: {
    CategoryCard
  },
  setup() {
    const categories = ref([
      { name: 'People', path: '/people', icon: 'fas fa-users' },
      { name: 'Starships', path: '/starships', icon: 'fas fa-fighter-jet' },
      { name: 'Planets', path: '/planets', icon: 'fas fa-globe-europe' }
    ])

    return { categories }
  }
}
</script>

<style>
header {
  margin-top: 3rem;
  color: white;
}
header h1 {
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
header p {
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-top: -0.5rem;
}
.categories-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 300px;
  margin: 50px auto;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>