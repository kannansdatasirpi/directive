
<template>
  <div>
 <h2 v-focus="'red'">this is a sample text</h2>
 <p v-focus="'green'">testing</p>
</div>
</template>
 
<script>
// import Vue from 'vue'
// Vue.directive('colorful', {
//   inserted(el,binding) {
//     el.style.color = binding.value;

//   }
// })

export default {
  name: "CusDirs",
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
