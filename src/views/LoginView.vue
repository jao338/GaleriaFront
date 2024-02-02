<template>

  <v-container class="d-flex flex-column justify-center h-100">

    <v-sheet>
      <v-row>
        <v-col cols="5" class="d-flex">
          <img src="login.svg" alt="" srcset="" class="w-100">
        </v-col>

        <v-col cols="7" class="d-flex align-items-center">
          
          <v-form @submit.prevent="login" class="d-flex flex-column align-center w-100">
            
            <h1 class="mb-8">Login</h1>

            <CustomInputText label="Email" type="text" name="email" class="w-50 mb-4" v-model="form.email" :rules="emailRules"></CustomInputText>
            <CustomInputText label="Password" type="password" name="password" class="w-50" v-model="form.password" :rules="passwordRules"></CustomInputText>

            <div class="w-50 d-flex justify-content-between mT-16">

              <div class="mB-32">
                <input type="checkbox" name="remember_token" class="mR-8">
                <label for="remember_token">Remember-me</label>
              </div>

              <routerLink :to="{ name : 'forgot' }">Forgot your password?</routerLink>

            </div>

            <div class="w-50 text-start text-error mb-2">{{ showMessage }}</div>

            <CustomPrimaryButton label="Login" type="submit" class="w-50">Login</CustomPrimaryButton>

            <div class="d-flex justify-center w-50 mt-4">
              <span class="mr-4">Don't have a registration yet?</span>
              <routerLink :to="{ name : 'register'}">Register!</routerLink>
            </div>

          </v-form>

        </v-col>

      </v-row>
    </v-sheet>

    <!-- Botão de voltar para a home -->
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

  const router = useRouter();

  let showMessage = ref('')
    
  const form = reactive({
      email: '',
      password: '',
  });

  const login = () => {

    api.post('login', form)
    .then((response) => {

      localStorage.setItem('token', response.data.token)
      
      router.push({ name: 'home'});

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