<template>
  <div><CusDir/></div>
   <!-- <div><globalDir /></div> -->
</template>

<script>
import CusDir from './components/CusDir.vue'
// import globalDir from './components/globalDir.vue'

export default {
  name: 'App',
  components: {
    CusDir
  },
  data(){
return{

}
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
.color {
  background-color: blue ;
}
</style>
