/* eslint-disable */

import { toRaw } from 'vue'
import { ethers } from 'ethers'

let state = {
	contracts: []	
}

let getters = {
	contracts: state => {
		const contracts = state.contracts		

		return contracts.map((contract)=>{
			const [name, symbol, royalty, creator, tokenAddress, tokenId] = contract.args
			return {name, symbol, 
				royalty: royalty.toNumber() / 100, 
				creator, tokenAddress, 
				tokenId: tokenId.toNumber()
			}			
		})
	}
}

let mutations = {
	setContracts(state, contracts){		
		state.contracts = contracts
	}
}

let actions = {
	async loadContracts({commit, rootGetters}, myAddress){

		const contract = toRaw(rootGetters['contract/MinterFactory721Contract/readContract'])
		const logs = await contract.filters.Created();
		const _logs = await contract.queryFilter(logs)  

		const myContracts = _logs.filter((log)=>{          
			return log.args[3] == myAddress
		})		

		commit('setContracts', myContracts)
		       
	},
	async mintNewContract({state, rootGetters}, {myAddress, metaurl}){
		setTimeout( async()=>{

			const latestContract = toRaw(state.contracts[state.contracts.length - 1]);

			const contractId = parseInt(latestContract.args[5], 16)

			const minterFactoryContract = toRaw( rootGetters['contract/MinterFactory721Contract/writeContract'] );

			const mintFee = rootGetters['contract/MinterFactory721Contract/mintFee'];		

			const tx = await minterFactoryContract.populateTransaction.mint( contractId, myAddress, metaurl )			

			const url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}&value=${mintFee}`;

// window.open(url)
}, 2000)

	},
	async loadMintedContracts(){
		const contract = toRaw(rootGetters['contract/MinterFactory721Contract/readContract'])

	}

}


// contract/myContract
export const myContract = {
	state,
	getters,
	mutations,
	actions,
	namespaced:true
}