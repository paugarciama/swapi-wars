<template>

  <div class="list-card">
    <router-link :to="{ name: 'PeopleDetails', params: { id: character.url }}">
      <h3>{{ character.name }}</h3>
    </router-link>
  </div>

</template>

<script>
export default {
  props: ['character']
}
</script>

<style>
.list-card {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  background-color: rgb(230, 231, 155);
  height: 100%;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;
}
.list-card:hover {
  cursor: pointer;
  background-color: rgb(244, 246, 96);
  transform: translateY(-5px);
  transition: 0.3s;
}
</style>