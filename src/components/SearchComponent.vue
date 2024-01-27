<template>

  <form @submit.prevent="search" class="d-flex" id="searchForm">
                
    <CustomInputText label="Search" class="mr-4"></CustomInputText>
    <CustomPrimaryButton type="submit" label="Search" class="test"></CustomPrimaryButton>
  
  </form>

</template>

<script setup>

import CustomInputText from "@/components/custom/inputs/CustomInputText.vue"
import CustomPrimaryButton from '@/components/custom/buttons/CustomPrimaryButton.vue'
  

</script>

<style>

  #searchForm{
    margin-right: 54px !important;
    margin-left: 54px !important;
    /* border: 1px solid; */
  }

  .test{
    height: auto !important;
  }

</style>