<template>
  <div>
    <div id="color">
      <p v-colorful="'red'">Custom Directive Red</p>
      <p v-colorful="'green'">Custom Directive Green</p>
      <p v-colorful="'blue'">Custom Directive Blue</p>
    </div>
    <div id="text">
       <p v-text="name"></p> <!--here add the content Hello v-text will override element children. -->
    </div>
    <div id="focus">
      <lable>First name</lable>
      <input v-focus name="firstname" placeholder="First name" class="firstname" />
    </div>


    <!--v-model is a directive that creates a two-way data binding between a value in our template and a value in our data properties.
      two-way data binding speed up the development of web application-->


    <div id="model">
      <input id="vmod" v-model="message" type="text" />
      <p>Enter Last name :{{ message }}</p>
    </div>


    <div id="select">
      <div id="vsel">
        Data Structure : {{ category }}</div>
      <br />
      <div>
        <select id="vselect" v-model="category">
          <option value="Array">Array</option>
          <option value="Queue">Queue</option>
          <option value="Priority Queue">Priority Queue</option>
          <option value="Linked List">Linked List</option>
        </select>
      </div>
    </div>
    <div>
      <h2 v-bind:style="headingText">Heading</h2>
    </div>
  </div>
  <!-- <div v-for="test in 100" :key="test">
    <span>{{test}}</span>
    <input :type="getCondition(test)"  :class="color" >
  </div> -->
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
  //local custome directive syntax
  directives: {
    colorful: {
      mounted: function (el, binding) {
        el.style.color = binding.value;
      },
      focus: {
        mounted: (el, binding) => {
          el.style.color = binding.value;
        },
      },
    },
  },
  data() {
    return {
      message: '',
      category: '',

      name: 'batman',

      headingText: {
        color: 'red',
        fontsize: '40px',
        textAlign: 'center'
      }
    }
  },

  //  colorful: {
  //   mounted: (el,binding) => {
  //     if (binding.modifiers.red){
  //       el.style.color ='red'
  //     }
  //     else {
  //       el.style.color = binding.value
  //     }
  //   // el.style.color = binding.value;
  //   }
  //  },
  //  methods: {
  //     getCondition(test) {
  //       if((test >= 1 &&  test <=10)) {
  //         return 'number'
  //       } else if((test >= 20 && test <= 40)) {
  //         return 'text'
  //       }

  //     }
  //   }
}
</script>


<style>
lable {
  padding: 0 5px 0 0;
}

.firstname {
  padding: 3px 5px 3px 5px;

}

#emp {
  margin-top: 15px;
  width: 178px;
  /* margin-left: 80px; */
}

#vmod {
  margin-left: 82px;
  width: 170px;
  margin-top: 15px;
}

#vselect {
  width: 180px;
  margin-left: 80px;
  padding: 3px;
  margin-top: 5px;
}

#vsel {
  margin-left: 75px;
}
.underline{
  text-decoration: underline;
}
</style>
