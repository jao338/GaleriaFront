<template>

    <div class="mb-4 w-100">
        <v-progress-linear
            v-if="isVisible"
            indeterminate
            color="cyan"
        ></v-progress-linear>
    </div>

    <v-row justify="center">
        <v-col v-for="gallery in galleries" :key="gallery.id" cols="12" md="6" lg="3">
            <CustomCard :image="`http://localhost:8000/storage/${gallery.path}`" :title="gallery.name"></CustomCard>
        </v-col>
    </v-row>

</template>

<script setup>

import { onMounted, ref  } from "vue";
import { api } from '@/config/axios'
import CustomCard from '@/components/custom/cards/CustomCard.vue'

    const isVisible = ref(true)
    const galleries = ref('')

    onMounted(() => {
            
        api.get('gallery')
            .then(function(response) {
                galleries.value = response.data.data;
                
                isVisible.value = false
            })
        })
    

</script>

<style scoped>
    

</style>
