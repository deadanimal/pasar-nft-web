import { defineStore } from 'pinia';
import { toRaw } from 'vue'
import { useMinterFactory721ContractStore } from './MinterFactory721ContractStore'

const minterFactory721ContractStore = useMinterFactory721ContractStore();

export const useMyContractStore =  defineStore("MyContractStore", {

	state: ()=>{
		return {
			contracts: []
		}
	},

	getters: {
		contract: state => contractId => {					
			const contractArr = state.contracts.filter( contract => contract.tokenId == contractId);
			return contractArr.at(0);
		}
	},

	actions: {
		
		async loadContracts(myAddress){

			const contract = toRaw(minterFactory721ContractStore.readContract)			

			const logs = await contract.filters.Created();
			const _logs = await contract.queryFilter(logs)  

			const myContracts = _logs.filter((log)=>{          
				return log.args[3] == myAddress
			})	

			this.contracts = myContracts.map((contract)=>{
				const [name, symbol, royalty, creator, tokenAddress, tokenId] = contract.args
				return {name, symbol, 
					royalty: royalty.toNumber() / 100, 
					creator, tokenAddress, 	
					tokenId: tokenId.toNumber()
				}			
			})							
			       
		},

		async mintNewContract({myAddress, metaurl}){
			setTimeout( async()=>{

				const latestContract = toRaw(this.contracts.at(-1));				

				const minterFactoryContract = toRaw( minterFactory721ContractStore.writeContract );

				const mintFee = minterFactory721ContractStore.mintFee;		

				const tx = await minterFactoryContract.populateTransaction.mint( latestContract.tokenId, myAddress, metaurl )			

				const url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}&value=${mintFee}`;
				
				window.open(url)
			}, 2000)

		},


	},

	persist: true



});