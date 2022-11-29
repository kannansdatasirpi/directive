<template>
 <h2 v-focus="'red'">this is a sample text</h2>
 <p v-test="'green'">testing</p>
 <h2 v-colorful.orange>hi this is attached to a new custom directive</h2>
</template>
 
<script>
// import Vue from 'vue'
// Vue.directive('colorful',{
//   inserted(el,binding) {
//     if (binding.modifiers.red){
//       el.style.color ='red'
//     }else {
//       el.style.color = binding.value
//     }
//   el.style.color = binding.value;

//   }
// })
export default {
  name: "CusDir",
  directives: {
  focus: {
   mounted: (el, binding) => {
   // initiate focus for the element 
   el.style.color = binding.value;
  },
 },
 colorful: {
  mounted: (el,binding) => {
    if (binding.modifiers.red){
      el.style.color ='red'
    }
    else {
      el.style.color = binding.value
    }
  // el.style.color = binding.value;
  }
 }
}
}
</script>


<style>

</style>
