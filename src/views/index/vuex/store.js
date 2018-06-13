import Vue from 'vue'
import Vuex from 'vuex'
import SOME_MUTATION from './moutation_type'

Vue.use(Vuex)


const state = {
	count:0,
	Routers: []
}

const getters = {
	getRoutesLength (state) {
		return state.Routers.length
	}
}

const mutations = {

	increment (state, n) {
		state.count += n
	}
}

const actions = {
	incrementAsync ({ commit }, payload) {
		debugger
		setTimeout(() => {
			commit('increment', payload.amount)
		}, 1000);
	}
}


export default new Vuex.Store({
	debug: true,
	state,getters,mutations,actions
})