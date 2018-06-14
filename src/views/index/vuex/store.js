import Vue from 'vue'
import Vuex from 'vuex'
import ADD_ROUTES from './moutation_type'
import menufilter from './menufilter'
import router from '../router';

Vue.use(Vuex)


const state = {
	count:0,
	Routers: [],
	routeDatas: []
}

const getters = {
	getRoutesLength (state) {
		return state.Routers.length
	}
}

const mutations = {

	increment (state, n) {
		state.count += n
	},
	ADD_ROUTES (state, addrouter) {
		let routes = [];
		menufilter(routes, addrouter);
		router.addRoutes(routes);
		router.push('/');
	}
}

const actions = {
	incrementAsync ({ commit }, payload) {
		debugger
		setTimeout(() => {
			commit('increment', payload.amount)
		}, 1000);
	},
	add_Routesss ({commit}, addrouter) {
		commit('ADD_ROUTES', addrouter);
	}
}


export default new Vuex.Store({
	state,getters,mutations,actions
})