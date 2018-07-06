<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>screen width(Mixin): {{$root.screenWidth}}</p>
      <!-- <p>screen width(Prototype): {{$screenWidth}}</p> -->
      <p>screen width(Prototype): {{$screenWidth() || '在console.log中喊叫'}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
