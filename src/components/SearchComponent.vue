<template>

  <form @submit.prevent="search" class="d-flex" id="searchForm">
                
    <input type="text" class="form-control" placeholder="Search">
    <button type="submit" class="btn btn-outline-dark mL-8">Search</button>
  
  </form>

</template>

<script>
export default {

  setup(){

    const search = () => {

      console.log('Search');

    }

    return {
    
      search,
    
    }  

  }

}
</script>

<style>

  #searchForm{
    margin-right: 54px !important;
    margin-left: 54px !important;
    /* border: 1px solid; */
  }

</style>