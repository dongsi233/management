import Vue from 'vue'
import VueRouter from 'vue-router'
import { InputNumber } from 'element-ui';
import { WSAEINVALIDPROVIDER } from 'constants';
const login = () => import('./components/login.vue')
const home = () => import('./components/home.vue')
const table = () => import('./components/table.vue')
const table1 = () => import('./components/table1.vue')
const table2 = () => import('./components/table2.vue')
const table3 = () => import('./components/table3.vue')


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
          hidden:true
      },
      {
          path: '/',
          component: home,
          name: '设置',
          icon: 'iconfont icon-cart',
          children: [
            {path:'/table', component: table, name: 'Table'},
            {path:'/table1', component: table1, name: 'Table1'}
          ]
      },
      {
          path: '/',
          component: home,
          name: '用户中心',
          icon: 'iconfont icon-accountfilling',
          children: [
            {path:'/table2', component: table2, name: 'Table2'},
            {path:'/table3', component: table3, name: 'Table3'}
          ]
      }
    
    ]
})

export default routers;