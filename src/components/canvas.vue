<template>
    <div class="main-container">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script >
import particle from '../assets/js/particle'

export default {
    mounted() {
        particle.initCanvas()
    }
}
</script>

<style scoped>
</style>
