<template>

    <div class="row d-flex justify-content-between mT-32">

        <div class="col-md-6 card">
            <div class="d-flex justify-content-center card-header">Header</div>
            <div class="card-body">Body</div>
        </div>

        <div class="col-md-6 card">
            <div class="d-flex justify-content-center card-header">Header</div>
            <div class="card-body">Body</div>
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

<style>

</style>
