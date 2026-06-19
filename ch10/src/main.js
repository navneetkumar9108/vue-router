import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)
  app.use(router)  
app.mount('#app')


// global before guards

// router.beforeEach((to, from) => {
//   console.log('global - beforeEach called');
//   console.log('from:', from);
//   console.log('to:', to)
//   console.log('to.meta:', to.meta);
//   console.log('to.meta.isAuthenticated:',to.meta.isAuthenticated);
// })

// router.beforeEach((to, from) => {
  
//   console.log('to.meta:', to.meta);
//   if (!to.meta.isAuthenticated && to.name !== 'login') {
//     return {name:'login'}
//   }
// })