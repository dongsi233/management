import Vue from 'vue'
import App from './App'
import router from './router/router.js'

// router.beforeEach((to, from, next) => {
//   //NProgress.start();
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })

new Vue({
	router,
	template: '<App/>',
  components: { App }
}).$mount('#app')