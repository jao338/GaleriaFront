<template>
  
  <div id="login" class="container d-flex flex-column justify-content-center">

    <div class="row">
      
      <div class="d-flex col-md-5">
        <img src="../assets/img/login.svg" alt="" srcset="" class="w-100">
      </div>

      <div class="d-flex col-md-7 align-items-center">
        
        <form @submit.prevent="login" class="d-flex flex-column align-items-center w-100">
          
          <h1 class="mB-32">Login</h1>

          <input type="text" name="login" placeholder="Email" class="form-control w-50 mB-16">
          <input type="text" name="password" placeholder="Password" class="form-control w-50">

          <div class="w-50 d-flex justify-content-between mT-16">

            <div class="mB-32">
              <input type="checkbox" name="remember_token" class="mR-8">
              <label for="remember_token">Remember-me</label>
            </div>

            <routerLink :to="{ name : 'forgot' }">Forgot your password?</routerLink>

          </div>

          <button type="submit" class="btn btn-primary w-50">Login</button>

          <div class="d-flex justify-content-center w-50 mT-16">
            <span class="mR-16">Don't have a registration yet?</span>
            <routerLink :to="{ name : 'register'}">Register!</routerLink>
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

  #login{
    height: 100vh;
  }
</style>