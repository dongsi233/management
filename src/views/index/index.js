import Vue from 'vue'
import index from './index.vue'
import router from './router.js'
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
	el: '#app',
	router,
	template: '<index/>',
	components: { index }
})

