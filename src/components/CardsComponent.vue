<template>

    <div id="cards" class="row d-flex justify-content-center">

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">Macaco</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="macaco.jpg" class="card-img-bottom" alt="">
            </div>
        </div>

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">Paraguaio</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="macaco.jpg" class="card-img-bottom" alt="">
            </div>
        </div>

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">Paraguaio</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="macaco.jpg" class="card-img-bottom" alt="">
            </div>
        </div>

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">Paraguaio</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="macaco.jpg" class="card-img-bottom" alt="">
            </div>
        </div>

        {{ users }}

    </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from '@/config/axios'

    const users = ref([])

    onMounted(() => {
        api.get('users').then(function(r) {
            users.value = r.data.data;
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
