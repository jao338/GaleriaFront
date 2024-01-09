<template>

    <div id="cards" class="row d-flex justify-content-center">

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">Paraguaio</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="../assets/img/paraguaio.jpeg" class="card-img-bottom" alt="">
            </div>
        </div>

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">Macaco</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="../assets/img/macaco.jpg" class="card-img-bottom" alt="">
            </div>
        </div>

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">Palhaço</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="../assets/img/palhaço.jpg" class="card-img-bottom" alt="">
            </div>
        </div>

        <div class="col-md-5 card">
            <div class="d-flex justify-content-center card-header">sei lá, man kkkkkk</div>
            <div class="card-body d-flex justify-content-center align-items-center p-0">
                <img src="../assets/img/sei_la.jpg" class="card-img-bottom" alt="">
            </div>
        </div>
        
    </div>

</template>

<script>
    export default {

    data() {
        return {
            users: [],    
        }
    },

    mounted() {
        fetch('http://127.0.0.1:8000/api/users')
        .then(response => response.json())
        .then((res) => {

            this.users = res.data;

        });
    }
}
</script>

<style scoped>

    .card{
        margin-left: 54px !important;
        margin-right: 54px !important;
        margin-bottom: 64px !important;
    }

    .card-body{
        max-height: 320px !important;
        overflow: hidden;
    }

</style>
