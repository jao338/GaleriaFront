<template>
  <div id="home" class="container">
    <HeaderComponent class="mB-32"></HeaderComponent>

    <!-- <h3 class="mB-16">Galeria de imagens</h3> -->

    <SearchComponent/>

    <CardsComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import CardsComponent from '@/components/CardsComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    SearchComponent,
    CardsComponent
  }
}
</script>
