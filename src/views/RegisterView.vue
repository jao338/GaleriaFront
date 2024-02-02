<template>
  
  <v-container class="d-flex flex-column justify-center h-100">

    <v-row>
      
      <v-col cols="5" class="d-flex">
        <img src="register.svg" alt="" srcset="" class="w-100">
      </v-col>

      <v-sheet class="d-flex col-md-7 align-items-center">
        <v-form @submit.prevent="register" class="d-flex flex-column align-center w-100">
          <h1 class="mb-8">Register</h1>

          <CustomInputText type="text" name="name" v-model="form.name" :rules="nameRules" class="w-50 mb-4" id="name" label="Nome"></CustomInputText>
          <CustomInputText type="text" name="email" v-model="form.email" :rules="emailRules" class="w-50 mb-4" id="email" label="Email"></CustomInputText>
          <CustomInputText type="password" name="password" v-model="form.password" :rules="passwordRules" class="w-50 mb-4" id="password" label="Password"></CustomInputText>
          <CustomInputText type="password" name="confirm_password" v-model="form.confirmPassword" :rules="passwordRules" class="w-50 mb-4" id="confirm_password" label="Confirm Password"></CustomInputText>

          <div class="w-50 text-start text-error">{{ showMessage }}</div>
          <CustomPrimaryButton type="submit" class="w-50 mt-4" label="Register"></CustomPrimaryButton>

          <div class="d-flex justify-center w-50 mt-4">
            <span class="mR-16">Already have a registration?</span>
            <routerLink :to="{ name : 'login'}">Login!</routerLink>
          </div>

        </v-form>

      </v-sheet>

    </v-row>

    <routerLink :to="{ name: 'home' }" id="btnReturn">
      <CustomIconButton icon="mdi-arrow-left"></CustomIconButton>
    </routerLink>

  </v-container>

</template>

<script setup>
import { reactive, ref } from "vue";
import { api } from '@/config/axios'
import { useRouter } from 'vue-router'

import CustomPrimaryButton from '@/components/custom/buttons/CustomPrimaryButton.vue'
import CustomIconButton from '@/components/custom/buttons/CustomIconButton.vue'
import CustomInputText from '@/components/custom/inputs/CustomInputText.vue'

  const router = useRouter()

  const showMessage = ref('')

    const form = reactive({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const register = () => {

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

</script>

<style>
  #btnReturn{
    position: absolute;
    top: 5%;
    left: 95%;
    color: #0d6efd;
  }

</style>