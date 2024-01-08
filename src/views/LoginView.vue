<template>
  
  <div id="login" class="container d-flex flex-column justify-content-center">

    <div class="row">
      
      <div class="d-flex col-md-5">
        <img src="../assets/img/login.svg" alt="" srcset="" class="w-100">
      </div>

      <div class="d-flex col-md-7 align-items-center">
        

        <form @submit.prevent="login" class="d-flex flex-column align-items-center w-100">
          
          <h1 class="mB-32">Login</h1>

          <input type="text" name="login" placeholder="Login" class="form-control w-50 mB-8">
          <input type="text" name="password" placeholder="Senha" class="form-control w-50">

          <div class="w-50 d-flex justify-content-between mT-16">

            <div class="mB-32">
              <input type="checkbox" name="remember_token" class="mR-8">
              <label for="remember_token">Remember-me</label>
            </div>

            <routerLink :to="{ name : 'home' }">Forgot your password?</routerLink>

          </div>

          <button type="submit" class="btn btn-primary w-50">Login</button>

          <div class="d-flex justify-content-center w-50 mT-16">
            <span class="mR-16">Don't have a registration yet?</span>
            <routerLink :to="{ name : 'register'}">Register</routerLink>
          </div>

        </form>

      </div>

    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>