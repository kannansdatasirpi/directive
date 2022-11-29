<template>
 <h2 v-focus="'red'">this is a sample text</h2>
 <p v-test="'green'">testing</p>
</template>
 
<script>

export default {
  name: "CusDir",
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
