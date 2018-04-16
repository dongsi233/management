import Vue from 'vue'
import userCenter from './userCenter.vue'
import VueRouter from 'vue-router'
import flex from './component/flex.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	// mode: 'history', //为什么不能两个都设置为一样
	
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

new Vue({
	el: '#app',
	router,
	template: '<userCenter/>',
	components: { userCenter }
})