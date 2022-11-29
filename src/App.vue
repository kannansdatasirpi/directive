<template>
  <div><CusDir/>
  <div v-for="test in 100" :key="test">
    <span>{{test}}</span>
    <input :type="getCondition(test)"  :class="color" >
    
  </div>
  </div>
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
  },
  methods: {
    getCondition(test) {
      if((test >= 1 &&  test <=10)) {
        return 'number'
      } else if((test >= 20 && test <= 40)) {
        return 'text'
      }
       
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
