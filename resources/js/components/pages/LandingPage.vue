<template>
    <div class="lp-container">
        <div class="container">
            <div class="d-flex flex-column justify-content-center content">
                <!-- <h1> this is the landing page</h1> -->
                <a href="/index3.html" class="brand-link align-self-center">
                    <h1 class="text-dark">iGO Admin</h1>
                </a>
                <div class="btn-group d-flex justify-content-center align-items-center">
                     <button type="button" class="btn btn-primary" @click="goToRoute('/login')">Login</button>
                     <button type="button" class="btn btn-secondary" @click="goToRoute('/register')">Register</button>
                </div>

            </div>  
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goToRoute(route){
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
    .lp-container{
        background-color: cornsilk;
        height: 100vh;
    }
    .content{
        height: 100vh;
    }
    .btn-group{
        padding: 20px 18rem 0px 18rem !important;
    }
    .btn-group button{
        margin: 0px 10px 0 10px;
        width: 50% !important;
    }
</style>