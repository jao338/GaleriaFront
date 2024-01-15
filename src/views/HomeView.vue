<template>
    <div id="home" class="container">
        <HeaderComponent class="mB-32"></HeaderComponent>

        <SearchComponent class="mB-32"></SearchComponent>

        <CardsComponent />

    </div>
</template>

<script setup>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import SearchComponent from '@/components/SearchComponent.vue';
    import CardsComponent from '@/components/CardsComponent.vue';
    
</script>

<style scoped>

</style>
