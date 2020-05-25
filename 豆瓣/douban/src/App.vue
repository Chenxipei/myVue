<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from './components/Tabbar'
import {obj} from './utils'
export default {
  mounted() {
    obj.setRem()
  },
  components:{
    tabbar
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
}
*{
  margin: 0;
  padding: 0;
}
body{
  font-size: 16px;
}
</style>
