<template>
  
  <div id="login" class="container d-flex flex-column justify-content-center">

    <div class="row">
      
      <div class="d-flex col-md-5">
        <img src="register.svg" alt="" srcset="" class="w-100">
      </div>

      <div class="d-flex col-md-7 align-items-center">
        
        <form @submit.prevent="register" class="d-flex flex-column align-items-center w-100">
          
          <h1 class="mB-32">Register</h1>

          <input type="text" name="name" placeholder="Name" class="form-control w-50 mB-16">
          <input type="text" name="login" placeholder="Email" class="form-control w-50 mB-16">
          <input type="text" name="password" placeholder="Password" class="form-control w-50 mB-16">
          <input type="text" name="confirm_password" placeholder="Confirm Password" class="form-control w-50">

          <button type="submit" class="btn btn-primary w-50 mT-32">Register</button>

          <div class="d-flex justify-content-center w-50 mT-16">
            <span class="mR-16">Already have a registration?</span>
            <routerLink :to="{ name : 'login'}">Login!</routerLink>
          </div>

        </form>

      </div>

    </div>

    <routerLink :to="{ name : 'home' }" id="btnReturn">

      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
      </svg>

    </routerLink>
  </div>

</template>

<script setup>

</script>

<style>
  #btnReturn{
    position: absolute;
    top: 5%;
    left: 95%;
    color: #0d6efd;
  }
</style>