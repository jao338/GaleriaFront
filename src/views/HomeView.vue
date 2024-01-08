<template>
  <div id="home" class="container">
    <HeaderComponent class="mB-32"></HeaderComponent>

    <!-- <h3 class="mB-16">Galeria de imagens</h3> -->

    <SearchComponent/>

    <CardsComponent/>

  <div v-for="user in users" :key="user.id">
    <span>{{ user.name }}</span>
  </div>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import CardsComponent from '@/components/CardsComponent.vue';

export default {

  components: {
    HeaderComponent,
    SearchComponent,
    CardsComponent
  },

  setup(){

  const users = ref([]);

    onMounted(() => {
      fetch('http://127.0.0.1:8000/api/users')
        .then(response => response.json())
        .then((res) => {
          users.value = res.data;
        });
    });

    return {
      users,
    };
    
  }

  // data() {
  //   return {
  //     users: [],    
  //     }
  // },

  // mounted() {
  //   fetch('http://127.0.0.1:8000/api/users')
  //   .then(response => response.json())
  //   .then((res) => {
  //     this.users = res.data;
  //   });
  // }
}
</script>