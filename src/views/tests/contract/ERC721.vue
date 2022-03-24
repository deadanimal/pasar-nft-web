<template>
	
	<div data-component="views.tests.contract.ERC20">

		<h1 class="font-semibold text-gray-500 mb-4 text-3xl">Read</h1>

		<p class="text-sm mb-2">Codes can be found in view/tests/contract/ERC721.vue</p>
		
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
						<td class="border px-2">
							<button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900 w-48 mt-2" @click="getApproved">getApproved</button>

							<input type="text" v-model="readFormModel.getApproved.tokenId" placeholder="tokenId" class="mx-2 border">	
						</td>
						<td class="border px-2">
							{{approved}}
						</td>
						<td class="border px-2"></td>
					</tr>

					<tr>
						<td class="border px-2">
							<button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900 w-48 mt-2" @click="isApprovedForAll">isApprovedForAll</button>

							<input type="text" v-model="readFormModel.isApprovedForAll.ownerAddress" placeholder="ownerAddress" class="mx-2 border">	
							<input type="text" v-model="readFormModel.isApprovedForAll.operatorAddress" placeholder="operatorAddress" class="mx-2 border">	
						</td>
						<td class="border px-2">
							{{approvedForAll}}
						</td>
						<td class="border px-2"></td>
					</tr>

					<tr>
						<td class="border px-2">
							<button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900 w-48 mt-2" @click="getOwnerOf">ownerOf</button>

							<input type="text" v-model="readFormModel.ownerOf.tokenId" placeholder="tokenId" class="mx-2 border">								
						</td>
						<td class="border px-2">
							{{ownerOf}}
						</td>
						<td class="border px-2"></td>
					</tr>

					<tr>
						<td class="border px-2">
							<button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900 w-48 mt-2" @click="getTokenURI">tokenURI</button>

							<input type="text" v-model="readFormModel.tokenURI.tokenId" placeholder="tokenId" class="mx-2 border">								
						</td>
						<td class="border px-2">
							{{tokenURI}}
						</td>
						<td class="border px-2"></td>
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

				<input type="text" v-model="formModel.approve.toAddress" placeholder="To Address" class="mx-2 border">	
				<input type="text" v-model="formModel.approve.tokenId" placeholder="Token Id" class="mx-2 border">	
			</div>

			<!-- Burn -->
			<div class="border-b p-4 mb-4"	>							
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="burn">Burn</button>

				<input type="text" v-model="formModel.burn.tokenId" placeholder="Token Id" class="mx-2 border">		
			</div>

			<!-- BurnFrom -->
			<div class="border-b p-4 mb-4"	>			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="burnFrom">Burn From</button>

				<input type="text" v-model="formModel.burnFromAddress" placeholder="Address" class="mx-2 border">		
				<input type="text" v-model="formModel.burnFromValue" placeholder="Value" class="mx-2 border">		
			</div>

			<!-- Transfer -->
			<div class="border-b p-4 mb-4"	>							
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="safeTransferFrom">Safe Transfer From</button>

				<input type="text" v-model="formModel.safeTransferFrom.fromAddress" placeholder="From Address" class="mx-2 border">		
				<input type="text" v-model="formModel.safeTransferFrom.toAddress" placeholder="To Address" class="mx-2 border">		
				<input type="text" v-model="formModel.safeTransferFrom.tokenId" placeholder="Token Id" class="mx-2 border">		
				<input type="text" v-model="formModel.safeTransferFrom.data" placeholder="Data" class="mx-2 border">		
			</div>

			<!-- TransferFrom -->
			<div class="border-b p-4 mb-4"	>			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="transferFrom">Transfer From</button>

				<input type="text" v-model="formModel.transferFrom.fromAddress" placeholder="From Address" class="mx-2 border">		
				<input type="text" v-model="formModel.transferFrom.toAddress" placeholder="To Address" class="mx-2 border">		
				<input type="text" v-model="formModel.transferFrom.tokenId" placeholder="Token Id" class="mx-2 border">		
			</div>

			<!-- Mint -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="safeMint">Safe Mint</button>

				<input type="text" v-model="formModel.safeMint.toAddress" placeholder="To Address" class="mx-2 border">	
				<input type="text" v-model="formModel.safeMint.uri" placeholder="Uri" class="mx-2 border">	
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

	export default {

		setup(){

			
			const processing = ref(false)

			const readFormModel = reactive({
				getApproved: {
					tokenId: 0
				},
				isApprovedForAll:{
					ownerAddress: '',
					operatorAddress : ''
				},
				ownerOf: {
					tokenId: 0
				},
				supportsInterface:{
					interfaceId: 0
				},
				tokenURI:{
					tokenId: 0
				}
			})

			const formModel = reactive({
				approve: {
					toAddress: '',
					tokenId: 0
				},
				safeTransferFrom: {
					fromAddress: '',
					toAddress: '',
					tokenId: 0,
					data: ''
				},
				transferFrom : {
					fromAddress: '',
					toAddress: '',
					tokenId: 0
				},
				burn: {
					tokenId:0
				},
				safeMint:{
					toAddress: '',
					uri: ''
				},
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
			const contractAddress = '0x0E65c46e76d6F4C3bB9eA32290325aeC8655846b'
			const {contract} = toRaw(store.getters['contract/contract'](contractAddress))
			const signer = toRaw(store.getters['contract/signer'])	


			
			const balanceOf = ref(0)
			const name = ref('')
			const owner = ref('')
			const paused = ref('')
			const symbol = ref('')
			const approved = ref('')
			const approvedForAll = ref('')
			const ownerOf = ref('')
			const tokenURI = ref('')
			

			/*

			Read functions

			*/
		
			const getOperations = async ()=>{				
				balanceOf.value = await contract.balanceOf('0x17445FcEe7324ba95C784AaA0131f00E0Ae05128')
				name.value = await contract.name()	
				owner.value = await contract.owner()
				paused.value = await contract.paused()
				symbol.value = await contract.symbol()				
			}

			const getApproved = async ()=>{
				try{
					const result = await contract.getApproved(readFormModel.getApproved.tokenId)
					approved.value = result
				}
				catch(e){
					approved.value = e.message
				}
			}

			const isApprovedForAll = async ()=>{
				try{
					const result = await contract.isApprovedForAll(readFormModel.isApprovedForAll.ownerAddress, readFormModel.isApprovedForAll.operatorAddress)
					approvedForAll.value = result
				}
				catch(e){
					approvedForAll.value = e.message
				}
			}

			const getOwnerOf = async ()=>{
				
				try{
					const result = await contract.ownerOf(readFormModel.ownerOf.tokenId)
					ownerOf.value = result
				}
				catch(e){
					ownerOf.value = e.message
				}
			}

			const getTokenURI = async ()=>{
				try{
					const result = await contract.tokenURI(readFormModel.tokenURI.tokenId)
					tokenURI.value = result
				}
				catch(e){
					tokenURI.value = e.message
				}
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

					const tx = await contract.burn(formModel.burn.tokenId);	

					const receipt = await tx.wait()

					updateBalanceOf()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const safeMint = async () => {

				try{

					processing.value = true

					const tx = await contract.safeMint(formModel.safeMint.toAddress, formModel.safeMint.uri )

					const receipt = await tx.wait()

					console.log({
						tx,
						receipt,
						tokenId: parseInt(Number(receipt.logs[0].topics[3]))
					})

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

			const approve = async () => {

				try{

					processing.value = true

					const tx = await contract.approve(formModel.approve.toAddress, formModel.approve.tokenId)

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

			const safeTransferFrom = async ()=>{
				try{

					processing.value = true

					const tx = await contract.safeTransferFrom(	formModel.safeTransferFrom.fromAddress, formModel.safeTransferFrom.toAddress, formModel.safeTransferFrom.tokenId, formModel.safeTransferFrom.data )

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

					const tx = await contract.transferFrom(formModel.transferFrom.fromAddress, formModel.transferFrom.toAddress, formModel.transferFrom.tokenId)

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
				readFormModel,

				balanceOf,
				name,
				owner,
				paused,
				symbol,
				approved,
				approvedForAll,
				ownerOf,
				getTokenURI,

				getApproved,
				isApprovedForAll,
				getOwnerOf,
				tokenURI,

				//functions
				burn,
				burnFrom,
				safeMint,				
				approve,
				pause,
				unpause,
				safeTransferFrom,
				transferFrom,
				renounceOwnership,
				transferOwnership
			}
			
		}

	}

</script>