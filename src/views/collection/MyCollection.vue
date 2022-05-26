<template>
	
	<div data-component="views.collection.MyCollection">
		
		<div class="sm:flex sm:items-center border-b pb-4 mb-4" v-if="contract">            
            <div class="text-lg max-w-prose mx-auto">
		    	<h1>			        
		        	<span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ contract.name }}</span>
		    	</h1>		    		    	
			</div>           
        </div>

        <div v-else>
        	<div>
        		<div class="text-lg max-w-prose mx-auto">
			    	<h1>			        
			        	<span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Collection Not Found</span>
			    	</h1>
			    	
			    	<p class="mt-8 text-xl text-gray-500 leading-8 text-center">
			        	This collection is not exist in our record. <router-link :to="{name:'collection.my-collections'}" class="font-medium text-indigo-700 underline">Create one</router-link>?
			    	</p>
				</div>
        	</div>
        </div>

	</div>

</template>

<script>
	
	import { useRoute } from 'vue-router';	
	import { computed } from 'vue';

	import { useMyContractStore } from '@/stores/MyContractStore'

	export default {	
		name: 'MyCollection',		
		setup(){

			const route = useRoute();						

			const myContractStore = useMyContractStore();		

			const contract = computed(()=>{							
				return myContractStore.contract(route.params.contractId);				
			});				

			return {
				contract
			}
			


		}
	}

</script>