<template>
	
	
	<div data-component="views.tests.contract.MinterFactory721">

		<h1 class="font-semibold text-gray-500 mb-4 text-3xl">Read</h1>

		<p class="text-sm mb-2">Codes can be found in view/tests/contract/MinterFactory721.vue</p>
		
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
						<td class="border px-2">createFee</td>
						<td class="border px-2">{{readData.createFee}}</td>						
						<td class="border px-2"></td>
					</tr>					

					<tr>
						<td class="border px-2">mintFee</td>
						<td class="border px-2">{{readData.mintFee}}</td>						
						<td class="border px-2"></td>
					</tr>	

					<tr>
						<td>
							<div class="border-b p-4 mb-4"	>
			
								<button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="ownerOf">Owner Of</button>

								<input type="text" v-model="readData.form.ownerOf.tokenId" placeholder="Token Id" class="mx-2 border">	
							
							</div>			
						</td>
					</tr>				
				</tbody>
			</table>


		</div>

		<h1 class="font-semibold text-gray-500 my-4 text-3xl">Write</h1>

		<p class="text-sm mb-2 p-2 bg-orange-500 text-white" v-if="processing">Processing. Please wait...</p>

		<div class="border rounded p-4 w-full h-full">

			<!-- Mint -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="mint"> Mint</button>

				<input type="text" v-model="formModel.mint.address" placeholder="Mint Address" class="mx-2 border">	
				<input type="text" v-model="formModel.mint.tokenId" placeholder="Contract token Id" class="mx-2 border">	
				<input type="text" v-model="formModel.mint.uri" placeholder="Mint Uri" class="mx-2 border">	
			</div>			

			<!-- Create -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="create">Create</button>

				<input type="text" v-model="formModel.create.name" placeholder="Contract Name" class="mx-2 border">	
				<input type="text" v-model="formModel.create.symbol" placeholder="Contract symbol" class="mx-2 border">	
				<input type="text" v-model="formModel.create.royalty" placeholder="Contract royalty" class="mx-2 border">	
				<input type="text" v-model="formModel.create.creatorAddress" placeholder="Creator address" class="mx-2 border">	
			</div>

			<!-- Sell721 -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="sell721">sell721</button>

				<input type="text" v-model="formModel.sell721.contractAddress" placeholder="Contract Address" class="mx-2 border">	
				<input type="text" v-model="formModel.sell721.tokenId" placeholder="Token Id" class="mx-2 border">	
				<input type="text" v-model="formModel.sell721.price" placeholder="Price" class="mx-2 border">

					
				
			</div>

			<!-- Approve -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="approve">approve</button>

				<input type="text" v-model="formModel.approve.contractAddress" placeholder="Contract Address" class="mx-2 border">	
				<input type="text" v-model="formModel.approve.tokenId" placeholder="Token Id" class="mx-2 border">	
						
			</div>

		</div>

	</div>

</template>

<script>

	import { reactive, ref, toRaw, inject } from 'vue'	
	import { useStore } from 'vuex'
	
	
	export default {

		setup(){

/*
########      ###     ########      ###     
##     ##    ## ##       ##        ## ##    
##     ##   ##   ##      ##       ##   ##   
##     ##  ##     ##     ##      ##     ##  
##     ##  #########     ##      #########  
##     ##  ##     ##     ##      ##     ##  
########   ##     ##     ##      ##     ##  
*/			

			const store = useStore()
			
			
			const ethers = inject('ethers')


			const minterFactoryContractAddress = '0xf23092F88425AC7a6c8B39bae755EbCFc22D548d'
			// const {contract:minterFactoryContract, abi:minterFactoryAbi} = toRaw(store.getters['contract/contract'](minterFactoryContractAddress))
			const {contract:minterFactoryContract} = toRaw(store.getters['contract/contract'](minterFactoryContractAddress))

			const market721ContractAddress = '0xa8552297BcC14F5253E5fCF7E841c39c7B137A5f'

			const {contract:market721Contract} = toRaw(store.getters['contract/contract'](market721ContractAddress))

			// let newContract;


			console.log({minterFactoryContract})
			// const signer = toRaw(store.getters['contract/signer'])
			// const userAddress = storage.getStorageSync('address')

			const processing = ref(false)

			const readData = reactive({
				createFee: 0,
				mintFee: 0,
				form: {
					ownerOf: {
						tokenId: 0
					}
				}
			})

			const formModel = reactive({
				mint:{
					address: '',
					tokenId: '',
					uri: ''
				},
				create: {
					name: '',
					symbol: '',
					royalty: '',
					creatorAddress: ''
				},
				sell721: {
					contractAddress: '',
					tokenId: 0,
					price: 0
				},
				approve: {
					conntractAddress: '',
					tokenId: 0
				}
			});	

			// console.log({userAddress: storage.getStorageSync('address')});


/*
########   ##     ##  ########   ##    ##   ########   
##         ##     ##  ##         ###   ##      ##      
##         ##     ##  ##         ####  ##      ##      
######     ##     ##  ######     ## ## ##      ##      
##          ##   ##   ##         ##  ####      ##      
##           ## ##    ##         ##   ###      ##      
########      ###     ########   ##    ##      ##      
*/

			minterFactoryContract.on('Created', (name, symbol, royalty, creator, tokenAddress, tokenId)=>{
				console.log({
					name, symbol, royalty, creator, tokenAddress, tokenId
				})
			});

			minterFactoryContract.on('Minted', (tokenId, to, uri)=>{
				console.log({tokenId, to, uri})
			});		

			market721Contract.on("SaleCreated", (...args)=>{
				console.log(args)
			} );

/*
 ######     #######   ##     ##  ########        ##     ##  ########   ########   ##     ##   #######   ########   
##    ##   ##     ##  ###   ###  ##     ##       ###   ###  ##            ##      ##     ##  ##     ##  ##     ##  
##         ##     ##  #### ####  ##     ##       #### ####  ##            ##      ##     ##  ##     ##  ##     ##  
##         ##     ##  ## ### ##  ########        ## ### ##  ######        ##      #########  ##     ##  ##     ##  
##         ##     ##  ##     ##  ##              ##     ##  ##            ##      ##     ##  ##     ##  ##     ##  
##    ##   ##     ##  ##     ##  ##              ##     ##  ##            ##      ##     ##  ##     ##  ##     ##  
 ######     #######   ##     ##  ##              ##     ##  ########      ##      ##     ##   #######   ########   
*/
			const updateBalanceOf = async ()=>{
				// const newbalance = await minterFactoryContract.balanceOf('0x17445FcEe7324ba95C784AaA0131f00E0Ae05128')

				// balanceOf.value = newbalance.toNumber()
			};


/*
########   ########      ###     ########   
##     ##  ##           ## ##    ##     ##  
##     ##  ##          ##   ##   ##     ##  
########   ######     ##     ##  ##     ##  
##   ##    ##         #########  ##     ##  
##    ##   ##         ##     ##  ##     ##  
##     ##  ########   ##     ##  ########   
*/

			// read methods			
			(async ()=>{

				const createFee = await minterFactoryContract.createFee()	

				readData.createFee = ethers.utils.formatUnits(createFee, 18)

				const mintFee = await minterFactoryContract.mintFee()

				readData.mintFee = ethers.utils.formatUnits(mintFee, 18)

			})();

			const ownerOf = async () => {
				const tokenId = readData.form.ownerOf.tokenId

				const owner = await minterFactoryContract.ownerOf(+tokenId)

				console.log({owner})
			}


			

/*
##      ## ########   ####  ########   ########   
##  ##  ## ##     ##   ##      ##      ##         
##  ##  ## ##     ##   ##      ##      ##         
##  ##  ## ########    ##      ##      ######     
##  ##  ## ##   ##     ##      ##      ##         
##  ##  ## ##    ##    ##      ##      ##         
 ###  ###  ##     ##  ####     ##      ########   
*/
			

			const create = async()=>{
				try{

					processing.value = true;

					console.log(formModel.create)

					const tx = await minterFactoryContract.populateTransaction.create( formModel.create.name, formModel.create.symbol, +formModel.create.royalty, formModel.create.creatorAddress )
					var url = `https://chainbifrost.com/confirm?dapp=${location.host}.com&to=${tx.to}&data=${tx.data}&value=${readData.createFee}`;

					window.open(url)

					processing.value = false;

				}
				catch(e){
					console.error(e)
				}
			}

			// const _instantiateNewContract = async ()=>{		

			// 	const contract = new ethers.Contract("0x8A3B5339e73377Ca258Eb8883Ecb098e7abf2405",minterFactoryAbi, signer);

			// 	newContract = markRaw(contract);

			// }

			// _instantiateNewContract();




			const mint = async ()=>{
				try{

					processing.value = true				

					const tx = await minterFactoryContract.populateTransaction.mint(+formModel.mint.tokenId, formModel.mint.address, formModel.mint.uri  )					

					var url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}&value=${readData.mintFee}`;
					
					window.open(url)

					updateBalanceOf()					

					processing.value = false
					

				}
				catch(e){
					console.error(e)
				}
			}

			const approve = async () => {
				try{
					processing.value = true				

					const tx = await minterFactoryContract.populateTransaction.approve(formModel.approve.contractAddress, formModel.approve.tokenId)

					var url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}`;
					
					window.open(url)

					updateBalanceOf()

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

			const sell721 = async () => {
				try{
					processing.value = true				

					const tx = await market721Contract.populateTransaction.sell721( formModel.sell721.contractAddress, formModel.sell721.tokenId, +formModel.sell721.price  )					

					var url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}&value=5`;
					
					window.open(url)

					updateBalanceOf()					

					processing.value = false
				}
				catch(e){
					console.error(e)
				}
			}

/*
########   ########   ########   ##     ##  ########   ##    ##   
##     ##  ##            ##      ##     ##  ##     ##  ###   ##   
##     ##  ##            ##      ##     ##  ##     ##  ####  ##   
########   ######        ##      ##     ##  ########   ## ## ##   
##   ##    ##            ##      ##     ##  ##   ##    ##  ####   
##    ##   ##            ##      ##     ##  ##    ##   ##   ###   
##     ##  ########      ##       #######   ##     ##  ##    ##   
*/

			return {
				readData,
				formModel,
				processing,
				ownerOf,



				
				mint,
				create,
				approve,
				sell721
			}

		}

	}

</script>