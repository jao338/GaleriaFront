<template>

    <v-container>

        <HeaderComponent class="mb-4"></HeaderComponent>
    
        <SearchComponent class="mb-4"></SearchComponent>
    
        <CardsComponent />

    </v-container>


</template>

<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import CardsComponent from '@/components/CardsComponent.vue';

</script>

<style scoped>

</style>
