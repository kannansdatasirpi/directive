<!--Global directive-->
<template>
    <div>
   <h2 v-test="'red'">this is a sample text</h2>
   <p v-test="'green'">testing</p>
   <!-- <p v-test="'orange'">testing2</p> -->
  </div>
  </template>
   
  <script>
  
  export default {
    name: "CusDirs",
    directives: {
//     focus: {
//      mounted: (el, binding) => {
//      // initiate focus for the element 
//      el.style.color = binding.value;
//     },
//    },
  }
  }
  </script>
  
  
  <style>
  
  </style>
  