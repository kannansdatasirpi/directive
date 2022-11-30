<!--Global directive-->
<template>
    <div>
   {{greet}} {{name}}
  </div>
  <div v-text="channel"></div>
  <div v-text="name"></div>
  <input v-focus />
  </template>
   
  <script>
  
  export default {
    name: "CusDirs",
    data() {
      return{
        greet: 'hello',
        name:'batman',
        channel:'codeevaluation',
      }
    },
    directives: {
    focus: {
     mounted: (el, binding) => {
     // initiate focus for the element 
     el.style.color = binding.value;
    },
   },

  }
}
  </script>
  
  
  <style>
  
  </style>
  