import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)
  app.use(router)  
app.mount('#app')


// global before guards

router.beforeEach((to,from) => {
  console.log('global - beforeEach called');
  // console.log('from:', from);
  // console.log('to:', to);
  // explicitly return false to cancel the navigation
  // return false

  // redirect
  // if (to.path === '/') {
  //   router.push('/about')
  // }
})

// Global resolve guards

router.beforeResolve((to,from) => {
  console.log('global - beforeResolve called');
  // console.log('from:', from);
  // console.log('to:', to);

})

// // global after hooks
router.afterEach((to,from) => {
  console.log('global - afterEach called');
  // console.log('from:', from);
  // console.log('to:', to);

})