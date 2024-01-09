<template>

  <div id="profile" class="container">
    
    <HeaderComponent/>
    <SearchComponent class="mB-32 mT-32"></SearchComponent>

    <div class="cards d-flex justify-content-center w-100">

        <form @submit.prevent="save" class="card w-50 pA-32">

            <h4>Profile</h4>
            <p>Update your account's profile information and email address</p>

            <label for="name">Name</label>
            <input type="text" name="name" class="form-control">

            <label for="email">Email</label>
            <input type="text" name="email" class="form-control">

            <button type="submit" class="btn btn-primary">Salvar</button>
            
        </form>

    </div>

  </div>

</template>

<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

</script>

<style>

    #profile{
        padding-top: 32px;
        padding-bottom: 32px;
    }

</style>

<script>

export default{

    components: {
        HeaderComponent,
        SearchComponent,
    }

}

</script>