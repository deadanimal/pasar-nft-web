<template>
	
	<div data-component="views.tests.contract.ERC20">

		<h1 class="font-semibold text-gray-500 mb-4 text-3xl">Read</h1>

		<p class="text-sm mb-2">Codes can be found in view/tests/contract/ERC20.vue</p>
		
		<div class="border rounded p-4 w-full h-full">
			
			<table class="table-auto w-full border-collapse">
				<thead>
					<tr class="bg-sky-200">
						<th class="text-left border px-2">Prop</th>
						<th class="text-left border px-2">Value</th>
						<th class="text-left border px-2">Remarks</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border px-2">Name</td>
						<td class="border px-2">{{name}}</td>						
						<td class="border px-2"></td>
					</tr>
					<tr>
						<td class="border px-2">Owner</td>
						<td class="border px-2">{{owner}}</td>						
						<td class="border px-2"></td>
					</tr>
					<tr>
						<td class="border px-2">Paused</td>
						<td class="border px-2">{{paused}}</td>						
						<td class="border px-2"></td>
					</tr>
					<tr>
						<td class="border px-2">BalanceOf</td>
						<td class="border px-2">{{balanceOf}}</td>						
						<td class="border px-2"></td>
					</tr>
					<tr>
						<td class="border px-2">Symbol</td>
						<td class="border px-2">{{symbol}}</td>						
						<td class="border px-2"></td>
					</tr>
					<tr>
						<td class="border px-2">Allowance</td>
						<td class="border px-2">{{allowance}}</td>						
						<td class="border px-2"></td>
					</tr>
					<tr>
						<td class="border px-2">TotalSupply</td>
						<td class="border px-2">{{totalSupply}}</td>						
						<td class="border px-2"></td>
					</tr>
					<tr>
						<td class="border px-2">Decimals</td>
						<td class="border px-2">{{decimals}}</td>						
						<td class="border px-2">Don't know what is the meaning of decimal</td>
					</tr>
				</tbody>
			</table>


		</div>

		<h1 class="font-semibold text-gray-500 my-4 text-3xl">Write</h1>

		<p class="text-sm mb-2 p-2 bg-orange-500 text-white" v-if="processing">Processing. Please wait...</p>

		<div class="border rounded p-4 w-full h-full">

			<!-- Approve -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="approve">Approve</button>

				<input type="text" v-model="formModel.approve.spenderAddress" placeholder="Spender Address" class="mx-2 border">	
				<input type="text" v-model="formModel.approve.value" placeholder="Value" class="mx-2 border">	
			</div>

			<!-- Burn -->
			<div class="border-b p-4 mb-4"	>							
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="burn">Burn</button>

				<input type="text" v-model="formModel.burnValue" placeholder="Burn Value" class="mx-2 border">		
			</div>

			<!-- BurnFrom -->
			<div class="border-b p-4 mb-4"	>			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="burnFrom">Burn From</button>

				<input type="text" v-model="formModel.burnFromAddress" placeholder="Address" class="mx-2 border">		
				<input type="text" v-model="formModel.burnFromValue" placeholder="Value" class="mx-2 border">		
			</div>

			<!-- Transfer -->
			<div class="border-b p-4 mb-4"	>							
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="transfer">Transfer</button>

				<input type="text" v-model="formModel.transfer.toAddress" placeholder="To Address" class="mx-2 border">		
				<input type="text" v-model="formModel.transfer.value" placeholder="Value" class="mx-2 border">		
			</div>

			<!-- TransferFrom -->
			<div class="border-b p-4 mb-4"	>			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="transferFrom">Transfer From</button>

				<input type="text" v-model="formModel.transferFrom.fromAddress" placeholder="From Address" class="mx-2 border">		
				<input type="text" v-model="formModel.transferFrom.toAddress" placeholder="To Address" class="mx-2 border">		
				<input type="text" v-model="formModel.transferFrom.value" placeholder="Value" class="mx-2 border">		
			</div>

			<!-- Mint -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="mint"> Mint</button>

				<input type="text" v-model="formModel.mintAddress" placeholder="Mint Address" class="mx-2 border">	
				<input type="text" v-model="formModel.mintValue" placeholder="Mint Value" class="mx-2 border">	
			</div>

			<!-- Increase Allowance -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="increaseAllowance">Increase Allowance</button>

				<input type="text" v-model="formModel.increaseAllowance.spenderAddress" placeholder="Spender Address" class="mx-2 border">	
				<input type="text" v-model="formModel.increaseAllowance.value" placeholder="Value" class="mx-2 border">	
			</div>


			<!-- Decrease Allowance -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="decreaseAllowance">Decrease Allowance</button>

				<input type="text" v-model="formModel.decreaseAllowance.spenderAddress" placeholder="Spender Address" class="mx-2 border">	
				<input type="text" v-model="formModel.decreaseAllowance.value" placeholder="Value" class="mx-2 border">	
			</div>

			<!-- Pause -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="pause">Pause</button>

			</div>

			<!-- UnPause -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="unpause">Un Pause</button>

			</div>

			<!-- renounceOwnership -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="renounceOwnership">renounceOwnership</button>

			</div>



			<!-- transferOwnership -->

			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="transferOwnership">Transfer Ownership</button>

				<input type="text" v-model="formModel.transferOwnership.toAddress" placeholder="To Address" class="mx-2 border">	

			</div>

		</div>





	</div>

</template>

<script>
	
	import { computed, inject, toRaw, ref, reactive } from 'vue'
	import { useStore } from 'vuex'
	import { useRoute } from 'vue-router'
	import { useStorage } from "vue3-storage";

	export default {

		setup(){

			const route = useRoute()
			const storage = useStorage()
			
			const processing = ref(false)

			const formModel = reactive({
				approve: {
					spenderAddress: '',
					value: 0
				},
				transfer: {
					toAddress: '',
					value: 0
				},
				transferFrom : {
					fromAddress: '',
					toAddress: '',
					value: 0
				},
				burnValue: 0,
				mintValue: 0,
				mintAddress: '',
				burnFromAddress: '',
				burnFromValue: '',
				increaseAllowance:{
					spenderAddress: '',
					value: 0
				},
				decreaseAllowance: {
					spenderAddress: '',
					value: 0	
				},
				transferOwnership: {
					toAddress: ''
				}
			})


			const ethers = inject('ethers')
			const store = useStore();
			const contractAddress = '0xB4bA73F5AE48347DD056fF0eF6F9DEDC00bC9462'
			const {contract} = toRaw(store.getters['contract/contract'](contractAddress))
			const signer = toRaw(store.getters['contract/signer'])
			const userAddress = storage.getStorageSync('address')	
			



			let allowance = ref('')
			let balanceOf = ref(0)
			let name = ref('')
			let owner = ref('')
			let paused = ref('')
			let symbol = ref('')
			let totalSupply = ref('')
			let decimals = ref('')

			/*

			Read functions

			*/
		
			const getOperations = async ()=>{
				allowance.value = await contract.allowance("0x17445FcEe7324ba95C784AaA0131f00E0Ae05128", "0x17445FcEe7324ba95C784AaA0131f00E0Ae05128")	
				balanceOf.value = await contract.balanceOf('0x17445FcEe7324ba95C784AaA0131f00E0Ae05128')
				name.value = await contract.name()	
				owner.value = await contract.owner()
				paused.value = await contract.paused()
				symbol.value = await contract.symbol()
				totalSupply.value = await contract.totalSupply()
				decimals.value = await contract.decimals()
			}

			getOperations();

			/*

			Write functions

			*/

			const updateBalanceOf = async ()=>{
				const newbalance = await contract.balanceOf('0x17445FcEe7324ba95C784AaA0131f00E0Ae05128')

				balanceOf.value = newbalance.toNumber()
			}

			const updateAllowance = async () => {
				const newAllowance = await contract.allowance('0x17445FcEe7324ba95C784AaA0131f00E0Ae05128', '0x17445FcEe7324ba95C784AaA0131f00E0Ae05128')

				allowance.value = newAllowance.toNumber()	
			}

			const updatePauseStatus = async ()=>{
				paused.value = await contract.paused()
			}

			const burn = async () => {

				try{

					processing.value = true

					const tx = await contract.burn(+formModel.burnValue);	

					const receipt = await tx.wait()

					// const tx = await contract.populateTransaction.burn(+formModel.burnValue);

					// var url = `https://chainbifrost.com/confirm?dapp=pasar-nft-web.onrender.com&to=${tx.to}&data=${tx.data}&value=1`;
					
					// window.open(url)		

					// console.log({tx})

					updateBalanceOf()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const mint = async () => {

				try{

					processing.value = true

					const tx = await contract.mint(formModel.mintAddress, +formModel.mintValue )

					const receipt = await tx.wait()

					// const tx = await contract.populateTransaction.mint(formModel.mintAddress, +formModel.mintValue )					

					// var url = `https://chainbifrost.com/confirm?dapp=pasar-nft-web.onrender.com&to=${tx.to}&data=${tx.data}`;
					
					// window.open(url)

					updateBalanceOf()					

					processing.value = false
					

				}
				catch(e){
					console.error(e)
				}
				
				// balanceOf.value = +balanceOf.value + +formModel.mintValue
			}

			const burnFrom = async () => {

				try{

					processing.value = true

					const tx = await contract.burnFrom(formModel.burnFromAddress, +formModel.burnFromValue)

					const receipt = await tx.wait()

					if(formModel.burnFromAddress == owner){
						updateBalanceOf()
					}

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const increaseAllowance = async () => {

				try{

					processing.value = true

					const tx = await contract.increaseAllowance(formModel.increaseAllowance.spenderAddress, formModel.increaseAllowance.value)

					const receipt = await tx.wait()

					updateAllowance()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const decreaseAllowance = async () => {
				try{

					processing.value = true

					const tx = await contract.decreaseAllowance(formModel.decreaseAllowance.spenderAddress, formModel.decreaseAllowance.value)

					const receipt = await tx.wait()

					updateAllowance()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}	
			}

			const approve = async () => {

				try{

					processing.value = true

					const tx = await contract.approve(formModel.approve.spenderAddress, formModel.approve.value)

					const receipt = await tx.wait()

					updateBalanceOf()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const pause = async ()=>{
				processing.value = true

				const tx = await contract.pause()

				const receipt = await tx.wait()

				updatePauseStatus()

				processing.value = false
			}

			const unpause = async ()=>{
				processing.value = true

				const tx = await contract.unpause()

				const receipt = await tx.wait()

				updatePauseStatus()

				processing.value = false
			}

			const transfer = async ()=>{
				try{

					processing.value = true

					const tx = await contract.transfer(formModel.transfer.toAddress, formModel.transfer.value)

					const receipt = await tx.wait()

					updateBalanceOf()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const transferFrom = async ()=>{
				try{

					processing.value = true

					const tx = await contract.transferFrom(formModel.transferFrom.fromAddress, formModel.transferFrom.toAddress, formModel.transferFrom.value)

					const receipt = await tx.wait()

					updateBalanceOf()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const renounceOwnership = async ()=>{
				try{
					

					if(confirm("Are you sure to renounce your contract ownership?") == true){

						processing.value = true		

						const tx = await contract.renounceOwnership()

						const receipt = await tx.wait()

						processing.value = false
					}
					

					
				}
				catch(e){
					console.error(e)
				}
			}

			const transferOwnership = async () => {
				try{
					if(confirm("Are you sure to trasnfer your contract ownership?") == true){

						processing.value = true		

						const tx = await contract.transferOwnership(formModel.transferOwnership.toAddress)

						const receipt = await tx.wait()

						processing.value = false
					}
				}
				catch(e){

				}
			}

			/*
	
			setup returns

			*/
			
			return {

				processing,

				// data
				formModel,

				symbol,
				allowance,
				balanceOf,
				name,
				owner,
				paused,
				symbol,
				totalSupply,
				decimals,

				//functions
				burn,
				burnFrom,
				mint,
				increaseAllowance,
				decreaseAllowance,
				approve,
				pause,
				unpause,
				transfer,
				transferFrom,
				renounceOwnership,
				transferOwnership
			}
			
		}

	}

</script>