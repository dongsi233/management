import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from './components/login.vue'

import Home from './components/home.vue'
import Detail from './components/detail.vue'
const login = () => import('./components/login.vue')

Vue.use(VueRouter)

const routers = new VueRouter({
    routes:[
      {
          path: '/login',
          component: login,
          name: 'login',
      },
      {
          path: '/home',
          component: Home,
          name: 'home', 
      },
      {
          path: '/detail',
          component: Detail,
          name: 'detail',
      }
    
    ]
})

export default routers;