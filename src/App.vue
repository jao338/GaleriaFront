<template>
  <router-view/>
</template>

<script>
import { onMounted } from 'vue'

export default{

  setup(){

    onMounted(() => {

        document.title = 'Gallery'
    });

    return {

    }

  }

}

</script>

<style>

</style>
