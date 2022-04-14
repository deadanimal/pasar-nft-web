let state = {
	address : null 
}

let mutations = {
	setAddress(state, address){
		state.address = address
	},
	clearAddress(state){
		state.address = null
	}
} 		

let actions = {
	setAddress({commit}, address){
		commit('setAddress', address)
	},
	clearAddress({commit}){
		commit('clearAddress')
	},
	authenticateUser({commit}, {address, timeout, storage}) {
		commit('setAddress', address)
		storage.setStorageSync('address', address)
		storage.setStorageSync('expirationDate', Number.parseInt(new Date().getTime()) + Number.parseInt(timeout) )
	},
	initAuth({commit},storage){

		const address = storage.getStorageSync('address')
		const expirationDate = storage.getStorageSync('expirationDate')

		if (new Date().getTime() > +expirationDate || !address) {
          console.log('No address or invalid address');
          commit('clearToken');
          return;
        }
        
        commit("setAddress", address);
	},
	logout({commit}){
		commit('clearAddress')
	}



}

export const auth = {
	state,
	mutations,
	actions,
	namespaced: true
}