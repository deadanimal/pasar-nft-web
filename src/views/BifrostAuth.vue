<template>
	<div class="flex justify-center h-full">
		<div class="flex items-center mt-52">

			<div>

				<div class="border max-w-3xl">
					<div class="bg-sky-300 border p-4">
						<p class="text-center">Bifrost login callback data</p>
					</div>

					<div class="p-4 overflow-x-scroll">

							<div class="mb-4">
								<p class="font-semibold">address</p>
								<p>{{queryData.address}}</p>											
							</div>
							
							<div class="mb-4">
								<p class="font-semibold">sig</p>
								<p>{{queryData.sig}}</p>										
							</div>
							
							<div class="mb-4">
								<p class="font-semibold">signer</p>
								<p>{{queryData.signer}}</p>										
							</div>
							
							<div class="mb-4">
								<p class="font-semibold">ts</p>
								<p>{{queryData.ts}}</p>					
							</div>

						
					</div>
				</div>

				<div>
					<p class="text-sm mt-2 text-red-400">These data will be stored in localstorage</p>
				</div>

				<div>
					<p>Redirect in {{redirectTimeout}}</p>
				</div>	

				
			</div>

				
			
		</div>
		
	</div>
</template>

<script>
	
	import { useRoute, useRouter } from 'vue-router'
	import { toRaw, ref } from 'vue'
	import { useStorage } from "vue3-storage";
	import { useStore } from "vuex"
	import useContractSetup from '@/mixins/useContractSetup'

	export default {
		
		setup(){

			const { setUpContracts } = useContractSetup()

			const store = useStore();            

			try{
				const route = useRoute()
				const storage = useStorage()				
				const router = useRouter()

				const queryData = toRaw(route.query)

				storage.setStorageSync("address", queryData.address)
				storage.setStorageSync("sig", queryData.sig)
				storage.setStorageSync("signer", queryData.signer)
				storage.setStorageSync("ts", queryData.ts);				

				setUpContracts()

	            store.dispatch('auth/authenticateUser', {
	            	address: queryData.address, 
	            	timeout: queryData.ts,
	            	storage:storage
	            })

				// some redirect function
				const redirectTimeout = ref(5);

				const redirectInterval = setInterval(()=>{					
					if(redirectTimeout.value > 0){
						redirectTimeout.value -= 1
					}
					
				}, 1000)

				setTimeout(()=>{			

					clearInterval(redirectInterval)					
					router.push('/')
				}, 6000)				

				// return 
				return {
					queryData,
					redirectTimeout
				}
			}
			catch(e){
				console.error(e)
			}

		}

	}

</script>