import { defineStore } from 'pinia';
import _find from 'lodash/find'

import SaifulToken from '@/data/SaifulToken'
import SaifulNft from '@/data/SaifulNft'
import PasarToken from '@/data/PasarToken'
import PasarGovernor from '@/data/PasarGovernor'
import Market721 from '@/data/Market721'
import MinterFactory721 from '@/data/MinterFactory721'

export const useContractStore = defineStore("ContractStore", {
	state: ()=>{
		return {
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
		};
	},

	getters: {
		abi: state => address => _find( state.contracts, {address} ),						
		contract: state => (address, operation) => {
			const contract = _find(state.contracts, {address})
			return operation == 'read' ? contract.readContract : contract.writeContract
		},
		contractByName: state => name => _find(state.contracts, {name})		
	},

	actions : {
		setProvider(provider){		
			this.provider = provider;
		},
		setSigner(signer){
			this.signer = signer
		},
		setContract({address, operation, contract}){
			if(operation == 'read'){
				_find( this.contracts, {address}).readContract = contract
			}
			else if(operation == 'write'){
				_find( this.contracts, {address}).writeContract = contract
			}
		}	
	}


});