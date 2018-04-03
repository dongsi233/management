import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './../conponent/login.vue'
import Home from './../conponent/home.vue'
import Detail from './../conponent/detail.vue'

Vue.use(VueRouter)

const routers = new VueRouter({
    routes:[
      {
          path: '/login',
          component: Login,
          name: 'login',
          hidden: true
      },
      {
          path: '/home',
          component: Home,
          name: 'home',
          hidden: true 
      },
      {
          path: '/detail',
          component: Detail,
          name: 'detail',
          hidden: true
      }
    
    ]
})

export default routers;