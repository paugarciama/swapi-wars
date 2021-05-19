<template>

  <div class="pagination">
    <button v-if="page !== 1" @click="page--, sendPage()">Before</button>
    
    <div class="numbers">
      <button 
        v-for="pageNumber in pages" 
        :key="pageNumber"
        @click="page = pageNumber, sendPage()">
        {{ pageNumber }}
      </button>
    </div>
    
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
  gap: 2rem;
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
}
.pagination button {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
}
.pagination button:focus {
  background-color: #53729e;
}
.numbers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 300px;
}
@media only screen and (max-width: 550px) {
  .pagination {
    flex-direction: column;
    gap: 0rem;
  }
  .numbers {
    display: grid;
    grid-template-columns: repeat(4, 0.5fr);
    row-gap: 0rem;
  }
}
</style>