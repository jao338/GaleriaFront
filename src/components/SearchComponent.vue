<template>

  <form @submit.prevent="search" class="d-flex">
                
    <input type="text" class="form-control" placeholder="Search">
    <button type="submit" class="btn btn-outline-dark mL-8">Search</button>
  
  </form>

</template>

<script>
export default {

  setup(){

    function search(){

      console.log('Hello World');

    }

    return {
    
      search,
    
    }  

  }

}
</script>

<style>

</style>