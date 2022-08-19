<template>
    <div>
        <div class="welcome-page">
            <h1>Welcome to Quiz App!</h1>
            <router-link to="/quiz"><button class="starting-button">Get Started!</button></router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
    .welcome-page h1{
        width: 100%;
        font-size: 50px;
        margin: auto;
        text-align: center;
        margin-top: 35vh;
    }

    .starting-button{
        margin: 7vh auto auto auto;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;    border-radius: 15px;
        background-color: #6290C8;
        color: white;
        padding: 20px;
        width: 40%;
        border:none;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        border-radius: 15px;
        display: block;
    }
</style>