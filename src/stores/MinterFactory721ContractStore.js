import { defineStore } from 'pinia';
import MinterFactory721Data from '@/data/MinterFactory721'
import { toRaw } from 'vue'

export const useMinterFactory721ContractStore = defineStore("MinterFactory721ContractStore", {

	state: ()=>{
		return {
			name: 'MinterFactory721',		
			address: '0xf23092F88425AC7a6c8B39bae755EbCFc22D548d',
			readContract: null,
			writeContract: null,
			createFee: 0,
			mintFee: 0,
			abi: MinterFactory721Data.abi
		}
	},	

	actions: {		
		initContract({ethers, provider, signer}){
			const readContract = new ethers.Contract(this.address, this.abi, provider);
			const writeContract = new ethers.Contract(this.address, this.abi, signer);

			this.readContract = readContract;
			this.writeContract = writeContract;			
		},
		async setCreateFee(ethers){
			const createFee = await this.readContract.createFee()
			this.createFee = ethers.utils.formatUnits(createFee, 18);
		},
		async setMintFee(ethers){		
			const mintFee = await this.readContract.mintFee();
			this.mintFee = ethers.utils.formatUnits(mintFee, 18);
		},
		async createContract({ name, symbol, royalty, creator}){

			const writeContract = toRaw(this.writeContract)

			const tx = await writeContract.populateTransaction.create( name, symbol, +royalty, creator )
			
			const url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}&value=${this.createFee}`;

			window.open(url)

		}
	}

});