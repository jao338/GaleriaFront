<template>

    <v-row justify="center">
        <v-col v-for="gallery in galleries" :key="gallery.id" cols="12" sm="2" md="3" lg="5" class="card-vue">
            <CustomCard :image="`http://localhost:8000/storage/${gallery.path}`" :title="gallery.name"></CustomCard>
        </v-col>
    </v-row>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from '@/config/axios'

import CustomCard from '@/components/custom/cards/CustomCard.vue'

    const galleries = ref('')

    onMounted(() => {
            
        api.get('gallery')
            .then(function(response) {
                galleries.value = response.data.data;
            })
        })
    

</script>

<style scoped>

    .card-vue {
        margin-left: 54px !important;
        margin-right: 54px !important;
        margin-bottom: 64px !important;
    }

</style>
