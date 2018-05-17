import Vue from 'vue'
import VueRouter from 'vue-router'
import { InputNumber } from 'element-ui';
import { WSAEINVALIDPROVIDER } from 'constants';
const login = () => import('./components/login.vue')

Vue.use(VueRouter)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

const routers = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes:[
      {
          path: '/login',
          component: login,
          name: 'login',
      },
      {
          path: '',
          component: () => import('./components/home.vue'),
          name: 'home', 
      }
    
    ]
})

export default routers;