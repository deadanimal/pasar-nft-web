<template>
	
	
	<div data-component="views.tests.contract.MinterFactory721">

		<h1 class="font-semibold text-gray-500 mb-4 text-3xl">Read</h1>

		<p class="text-sm mb-2">Codes can be found in view/tests/contract/MinterFactory721.vue</p>
		
		<!-- <div class="border rounded p-4 w-full h-full">
		</div> -->

		<h1 class="font-semibold text-gray-500 my-4 text-3xl">Write</h1>

		<p class="text-sm mb-2 p-2 bg-orange-500 text-white" v-if="processing">Processing. Please wait...</p>

		<div class="border rounded p-4 w-full h-full">

			<!-- Mint -->
			<div class="border-b p-4 mb-4"	>
			
				<button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-48" @click="mint"> Mint</button>

				<input type="text" v-model="formModel.mint.address" placeholder="Mint Address" class="mx-2 border">	
				<input type="text" v-model="formModel.mint.value" placeholder="Mint Value" class="mx-2 border">	
				<input type="text" v-model="formModel.mint.uri" placeholder="Mint Uri" class="mx-2 border">	
			</div>

		</div>

	</div>

</template>

<script>

	import { reactive, ref, toRaw } from 'vue'
	import { useStore } from 'vuex'
	import { useStorage } from "vue3-storage";
	
	export default {

		setup(){

			const store = useStore()
			const storage = useStorage()

			const contractAddress = '0xf23092F88425AC7a6c8B39bae755EbCFc22D548d'
			const {contract} = toRaw(store.getters['contract/contract'](contractAddress))

			console.log({contract})
			const signer = toRaw(store.getters['contract/signer'])
			const userAddress = storage.getStorageSync('address')

			const processing = ref(false)

			const formModel = reactive({
				mint:{
					address: '',
					value: '',
					uri: ''
				}
			})

			// readMethods
			const tokenIdCounter = async() =>{
				const tx = await contract.tokenIdCounter()

				

				console.log({tx:tx.toNumber()})
			}

			// tokenIdCounter()


			// write methods
			const updateBalanceOf = async ()=>{
				// const newbalance = await contract.balanceOf('0x17445FcEe7324ba95C784AaA0131f00E0Ae05128')

				// balanceOf.value = newbalance.toNumber()
			}


			const mint = async ()=>{
				try{

					processing.value = true				

					const tx = await contract.populateTransaction.mint(+formModel.mint.value, formModel.mint.address, formModel.mint.uri  )					

					var url = `https://chainbifrost.com/confirm?dapp=pasar-nft-web.onrender.com&to=${tx.to}&data=${tx.data}`;
					
					window.open(url)

					updateBalanceOf()					

					processing.value = false
					

				}
				catch(e){
					console.error(e)
				}
			}


			return {
				formModel,
				processing,
				mint
			}

		}

	}

</script>