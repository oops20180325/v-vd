<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>点击下发播放视频</p>
    <div style="text-align: center; cursor: pointer;">
      <span v-vd src='https://www.w3school.com.cn/i/video/shanghai.mp4'> 播放 ▶ </span>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
