<template>
    <div id="home" class="container">
        <HeaderComponent :login="userIsLoggedIn" class="mB-32"></HeaderComponent>

        <SearchComponent class="mB-32"></SearchComponent>

        <CardsComponent />

    </div>
</template>

<script setup>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import SearchComponent from '@/components/SearchComponent.vue';
    import CardsComponent from '@/components/CardsComponent.vue';
    import { useRoute } from "vue-router";
    import { onMounted, ref } from 'vue';

    const route = useRoute();

    const userIsLoggedIn = ref(false);
    
    onMounted(() => {
        // Atualiza o estado de userIsLoggedIn com base no parâmetro de query
        userIsLoggedIn.value = route.query.loggedIn === 'true';

    });

</script>

<style scoped>

</style>
