<template>

	<div data-component="views.tests.contract.TestContract">
		
		<div class="flex my-4">
			<p 
				class="w-1/2 py-4 flex justify-center items-center cursor-pointer"
				:class="{'active': activePath == 'erc20'}"
				@click="$router.push({name: 'test.contract.erc20'})"
			>
				ERC20
			</p>


			<p 
				class="w-1/2 py-4 flex justify-center items-center cursor-pointer"
				:class="{'active': activePath == 'erc721'}"
				@click="$router.push({name: 'test.contract.erc721'})"
			>
				ERC721
			</p>

			<p 
				class="w-1/2 py-4 flex justify-center items-center cursor-pointer"
				:class="{'active': activePath == 'minterFactory721'}"
				@click="$router.push({name: 'test.contract.minterFactory721'})"
			>
				MinterFactory721
			</p>
		</div>

		<router-view></router-view>

	</div>

</template>

<script>
	
	import { useRoute } from 'vue-router'
	import { computed } from 'vue'

	export default {

		setup(){
			const route = useRoute()			

			const activePath = computed(() => {
				const paths = route.fullPath.split("/")				
				return paths[3]
			})

			return {
				activePath
			}


		}

		



	}

</script>

<style scoped>
	
	.active{
		@apply border-b-4 border-sky-400;		
	}

</style>