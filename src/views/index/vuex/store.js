import Vue from 'vue'
import Vuex from 'vuex'
import ADD_ROUTES from './moutation_type'
import menufilter from './menufilter'
import router from '../router';

Vue.use(Vuex)


const state = {
	count:0,
	Routers: [],
	routeDatas: [],
	tagArray: []
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
	},
	ADD_VISITED_TAG: (state, view) => {
		if (state.tagArray.some( v => v.path === view.path)) return
		state.tagArray.push(Object.assign({}, view, {
			title: view.name || 'no-name'
		}))
	}
}

const actions = {
	incrementAsync ({ commit }, payload) {
		setTimeout(() => {
			commit('increment', payload.amount)
		}, 1000);
	},
	add_Routesss ({commit}, addrouter) {
		commit('ADD_ROUTES', addrouter);
	},
	addVisitedTag ( {commit}, view ) {
		commit('ADD_VISITED_TAG', view)
	}
}


export default new Vuex.Store({
	state,getters,mutations,actions
})