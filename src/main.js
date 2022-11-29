import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


const app = createApp(App) 

app.directive('test', (el, binding) => { 

    // initiate focus for the element  

    el.style.color = binding.value; 

   },) 

app.mount('#app') 