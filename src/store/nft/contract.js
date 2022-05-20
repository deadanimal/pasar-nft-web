import _find from 'lodash/find'
import { MinterFactory721Contract } from './MinterFactory721Contract'
import { myContract } from './myContract'

import SaifulToken from '@/data/SaifulToken'
import SaifulNft from '@/data/SaifulNft'
import PasarToken from '@/data/PasarToken'
import PasarGovernor from '@/data/PasarGovernor'
import Market721 from '@/data/Market721'
import MinterFactory721 from '@/data/MinterFactory721'

let state = {
	provider: {},
	signer: '',	
	createFee: 0,
	contracts: [
		SaifulToken,
		SaifulNft,
		PasarToken,
		PasarGovernor,
		Market721,
		MinterFactory721
	]
}

let getters = {
	abi: state => address => _find( state.contracts, {address} ),
	provider: state => state.provider,
	signer: state => state.signer,
	contracts: state => state.contracts,
	contract: state => (address, operation) => {
		const contract = _find(state.contracts, {address})
		return operation == 'read' ? contract.readContract : contract.writeContract
	},
	contractByName: state => name => _find(state.contracts, {name}),
	userAddress: state => state.userAddress
}

let mutations = {
	setProvider(state, provider){		
		state.provider = provider
	},
	setSigner(state, signer){
		state.signer = signer
	},
	setContract(state, {address, operation, contract}){	
		if(operation == 'read'){
			_find( state.contracts, {address}).readContract = contract
		}
		else if(operation == 'write'){
			_find( state.contracts, {address}).writeContract = contract
		}
		
	}	
}

let actions = {
	setProvider({commit}, provider){		
		commit('setProvider', provider);
	},
	setSigner({commit}, signer){
		commit('setSigner', signer)
	},
	setContract({commit}, contractData){
		commit('setContract', contractData)
	}	
}

export const contract = {
	state,
	getters,
	mutations,
	actions,
	namespaced: true,
	modules: {
		MinterFactory721Contract,
		myContract
	}
}