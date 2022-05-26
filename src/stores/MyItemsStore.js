/* eslint-disable */

import { defineStore } from 'pinia';

import { useMinterFactory721ContractStore } from './MinterFactory721ContractStore'

const minterFactory721ContractStore = useMinterFactory721ContractStore();

import { toRaw } from 'vue';

export const useMyItemsStore = defineStore("MyItemsStore", {

	state: ()=>{
		return {
			items: []
		}
	},

	actions: {
		async mintItem (contractId, myAddress, metaurl){

			const minterFactoryContract = toRaw( minterFactory721ContractStore.writeContract );

			// minterFactoryContract.on('Minted', (name, symbol, royalty, creator, tokenAddress, tokenId)=>{
   //              console.log({
   //                  name, symbol, royalty, creator, tokenAddress, tokenId
   //              })

   //              store.dispatch('contract/myContract/loadContracts', storage.getStorageSync('address'))
   //          });

			const mintFee = minterFactory721ContractStore.mintFee;

			const tx = await minterFactoryContract.populateTransaction.mint( contractId, myAddress, metaurl )			

			const url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}&value=${mintFee}`;
			
			window.open(url)


		}
	},

	persist: true

});