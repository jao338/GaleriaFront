<template>
  <div id="home" class="container">
    <HeaderComponent class="mB-32"></HeaderComponent>

    <SearchComponent class="mB-32"></SearchComponent>

    <CardsComponent/>

  <!-- <div v-for="user in users" :key="user.id">
    <span>{{ user.name }}</span>
  </div> -->

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import CardsComponent from '@/components/CardsComponent.vue';

  const users = ref([]);

    onMounted(() => {
      fetch('http://127.0.0.1:8000/api/users')
        .then(response => response.json())
        .then((res) => {
          users.value = res.data;
        });
    });
    
</script>

<script>
export default{
  components: {
    HeaderComponent,
    SearchComponent,
    CardsComponent
  },
}

</script>

<style scoped>

</style>