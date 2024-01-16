<template>
  
  <div id="login" class="container d-flex flex-column justify-content-center">

    <div class="row">
      
      <div class="d-flex col-md-5">
        <img src="register.svg" alt="" srcset="" class="w-100">
      </div>

      <v-sheet class="d-flex col-md-7 align-items-center">
        <v-form @submit.prevent="register" class="d-flex flex-column align-items-center w-100">
          <h1 class="mB-32">Register</h1>

          <v-text-field type="text" name="name" v-model="form.name" :rules="nameRules" placeholder="Name" class="w-50 mB-16" id="name"></v-text-field>
          <v-text-field type="text" name="login" v-model="form.email" :rules="emailRules" placeholder="Email" class="w-50 mB-16" id="email"></v-text-field>
          <v-text-field type="password" name="password" v-model="form.password" :rules="passwordRules" placeholder="Password" class="w-50 mB-16" id="password"></v-text-field>
          <v-text-field type="password" name="confirm_password" v-model="form.confirmPassword" :rules="confirmPasswordRules" placeholder="Confirm Password" class="w-50" id="confirmPassword"></v-text-field>

          <div class="w-50 text-start text-danger">{{ showMessage }}</div>
          <button type="submit" class="btn btn-primary w-50 mT-16" :loading="loading">Register</button>

          <div class="d-flex justify-content-center w-50 mT-16">
            <span class="mR-16">Already have a registration?</span>
            <routerLink :to="{ name : 'login'}">Login!</routerLink>
          </div>

        </v-form>

      </v-sheet>

    </div>

    <routerLink :to="{ name : 'home' }" id="btnReturn">

      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
      </svg>

    </routerLink>

  </div>

</template>

<script setup>
import { reactive, ref } from "vue";
import { api } from '@/config/axios'
import { useRouter } from 'vue-router'

  const router = useRouter()

  let loading = false

  let showMessage = ref('')

    const form = reactive({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const register = () => {

      loading = true

      api.post('register', form) 
      .then((response) => {

        localStorage.setItem('token', response.data.token)

        router.push({name: 'home'})

      })

      .catch(error => {
        
        if(error.response.status == 422){

          showMessage.value = error.response.data.message

          setTimeout(() => {
            showMessage.value = ''
          }, 2000);

        }
        
      })
      
      loading = false
    }

    

    const nameRules = [
        value => {
          if (value) return true

          return 'You must enter a value.'
        },
    ];

    const emailRules = [
        value => {
          if (value) return true

          return 'You must enter a value.'
        },
        
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        }
    ];

    const passwordRules = [
        value => {
          if (value) return true

          return 'You must enter a value.'
        }

    ];

    const confirmPasswordRules = [
        value => {
          if (value) return true

          return 'You must enter a value.'
        }
    ];

</script>

<style>
  #btnReturn{
    position: absolute;
    top: 5%;
    left: 95%;
    color: #0d6efd;
  }

  #login{
    height: 100vh;
  }
</style>