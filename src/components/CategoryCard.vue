<template>

  <div class="category-container">
    <slot name="category-icon"></slot>
    <slot name="category"></slot>
  </div>
  
</template>

<script>
export default {
  name: 'CategoryCard'
}
</script>

<style>
.category-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #2c3e50;
  background-color: rgb(230, 231, 155);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;
}
.category-container:hover {
  cursor: pointer;
  background-color: rgb(244, 246, 96);
  transform: translateY(-5px);
  transition: 0.3s;
}
.category-container i {
  font-size: 3rem;
}
.category-container h3 {
  font-size: 1.5rem;
}
</style>