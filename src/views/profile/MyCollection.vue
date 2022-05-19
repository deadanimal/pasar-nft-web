<template>
	
	<div data-component="views.profile.MyCollection">
		
		<div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">{{ contract.name }}</h1>
            </div>                    
        </div>

	</div>

</template>

<script>
	
	import { useRoute } from 'vue-router';
	import { useStore } from 'vuex'; 
	import { computed } from 'vue';

	export default {	
		name: 'MyCollection',		
		setup(){

			const route = useRoute();
			const store = useStore();			

			const contract = computed(()=>{			
				const contractId = route.params.contractId;
				return store.getters['contract/myContract/contract'](contractId);
			});	

			setTimeout(()=>{
				const contractId = route.params.contractId;
				console.log(store.getters['contract/myContract/contract'](contractId));
			}, 2000)		

			return {
				contract
			}
			


		}
	}

</script>