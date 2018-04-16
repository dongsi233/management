import Vue from 'vue'
import index from './index.vue'
import router from './router.js'


router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
	el: '#app',
	router,
	template: '<index/>',
	components: { index }
})

