import Vue from 'vue'
import index from './index.vue'
import router from './router.js'
// import axios from 'axios'
import axios from '../axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'commonCss'
import store from './vuex/store.js'

Vue.use(ElementUI)
Vue.prototype.$http = axios;

//手动刷新时路由会被重置，所以需要从sessionStorage里面拿到路由，并重新新增
if(sessionStorage.getItem('user')){
  let routes = JSON.parse(sessionStorage.getItem('routeDatas'));
  store.dispatch('add_Routesss', routes);
  //router.options.routes = [...router.options.routes,...routes];
  console.log(router.options.routes);
  //router.addRoutes(routes);
  //router.push('/');
}

router.beforeEach((to, from, next) => {
  console.log(to)
  // NProgress.start();
  if (to.path == '/login') {
    //sessionStorage.removeItem('user');
  }
  //let user = JSON.parse(sessionStorage.getItem('user'));
 

  let user = sessionStorage.getItem('user');
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
	el: '#app',
	router,
	store,
	template: '<index/>',
	components: { index }
})

