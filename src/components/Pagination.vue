<template>

  <div class="pagination">
    <button v-if="page !== 1" @click="page--, sendPage()">Before</button>
    
    <button 
      v-for="pageNumber in pages" 
      :key="pageNumber"
      @click="page = pageNumber, sendPage()">
      {{ pageNumber }}
    </button>
    
    <button v-if="page < pages.length" @click="page++, sendPage()">Next</button>
  </div>

</template>

<script>
export default {
  name: 'Pagination',
  props: ['page', 'pages'],
  setup( props, { emit }) {
    
    const sendPage = () => {
      emit('sendPage', props.page)
    }

    return { sendPage }
  }
}
</script>

<style>
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 300px;
  margin: 0 auto;
}
.pagination button {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
}
.pagination button:focus {
  background-color: #53729e;
}
</style>