import Vue from 'vue'
import userCenter from './userCenter.vue'
import VueRouter from 'vue-router'
import flex from './component/flex.vue'

Vue.use(VueRouter)
Vue.config.debug = true;// 开启vue 调试功能

const router = new VueRouter({
	mode: 'history', //为什么不能两个都设置为一样
	base: '/userCenter.html',
	routes: [
		{
		    path: '',
		    // component: () => import('./component/flex.vue'),
		    component: flex,
		    name: 'flex',
		},
		{
			path: '/grid',
			component: () => import('./component/grid.vue'),
			name: 'grid'
		}
	]
})

router.beforeEach((to, from, next) => {
	console.log(to)
})

new Vue({
	el: '#app',
	router,
	template: '<userCenter/>',
	components: { userCenter }
})