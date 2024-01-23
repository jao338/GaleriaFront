<template>

    <div id="cards" class="row d-flex justify-content-center">
        
        <div class="col-md-5 card" v-for="gallery in galleries" :key="gallery.id">
            <div class="d-flex justify-content-center card-header">{{ gallery.name }}</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img :src="`http://localhost:8000/storage/${gallery.path}`" class="card-img-bottom" alt="">
            </div>
        </div>
        
    </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from '@/config/axios'

    const galleries = ref('')

    onMounted(() => {
            
        api.get('gallery')
            .then(function(r) {
                galleries.value = r.data.data;
            })
        })
    

</script>

<style scoped>
    .card {
        margin-left: 54px !important;
        margin-right: 54px !important;
        margin-bottom: 64px !important;
    }

    .card-body {
        max-height: 320px !important;
        overflow: hidden;
    }
</style>
