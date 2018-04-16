import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from './components/login.vue'

import Home from './components/home.vue'
import Detail from './components/detail.vue'
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
    // base: __dirname,
    scrollBehavior,
    routes:[
      {
          path: '/login',
          component: login,
          name: 'login',
      },
      {
          path: '',
          component: Home,
          name: 'home', 
      },
      {
          path: '/detail',
          component: Detail,
          name: 'detail',
          children: [
            {
              path:'',
              name: 'detail1',
              component: () => import('./components/detail1.vue')
            },
            {
              path: 'detail2',
              name: 'detail2',
              component: () => import('./components/detail2.vue')
            }
          ]
      }
    
    ]
})


export default routers;