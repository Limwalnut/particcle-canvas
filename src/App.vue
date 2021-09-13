<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ParticleCanvas from './components/canvas.vue'
</script>

<template>
    <p class="text">Just have a little faith</p>
    <ParticleCanvas />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600');
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
}

.text {
    font-family: 'Montserrat';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 5vw;
    text-shadow: 0 0 10px #1c68e5, 0 0 20px #1c68e5, 0 0 30px #1c68e5,
        0 0 40px #1c68e5, 0 0 70px #1c68e5, 0 0 80px #1c68e5, 0 0 100px #1c68e5,
        0 0 150px #1c68e5;
}
</style>
