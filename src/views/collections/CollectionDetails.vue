<template>
	
	<div data-component="view.collections.CollectionDetails">
		
		<div>
			<figure>
				<img :src="collection.headerImage" alt="" class="w-full h-48">
			</figure>	

			<figure class="flex justify-center">
				<img :src="collection.profileImage" alt="" class="rounded-full w-24 h-24 -mt-12 p-1 bg-white">
			</figure>
		</div>

		<div>
			<p class="text-center my-2">By {{collection.author}}</p>
		</div>

		<div>
			
			<h2 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-4">Collection Items</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

				
					<div class="border rounded flex flex-col cursor-pointer justify-between" v-for="item in collection.items" :key="item.imageUrl" @click="$router.push({name:'collection-item', params:{name:collection.name, title:item.title}})">
										
							<div class="max-h-72 p-2">

								<figure class="flex flex-col justify-center h-full">
									<img :src="item.imageUrl" alt="" class="h-full object-contain">
								</figure>		

							</div>
						
							<div class="mt-4 p-4 bgc-gradient-gray">

								<div class="flex justify-between font-semibold text-gray-500">
									<p>{{collection.author}}</p>
									<p>Price</p>
								</div>

								<div class="flex justify-between text-sm">
									<p>{{item.title}}</p>
									<div class="flex">
										<img src="https://openseauserdata.com/static/miscellaneous/sandbox-token.png" alt="" class="w-4 h-4 mr-1">
										<p>{{item.price}}</p>
									</div>
								</div>																					

								<div class="flex justify-end items-center">
									<ClockIcon :class="['ml-2 h-4 w-4 group-hover:text-gray-500']" aria-hidden="true" />
									<span class="ml-2 text-sm">6 days left</span>
								</div>					
							</div>		
					</div>

				

				

			</div>


		</div>
		




	</div>
	
</template>

<script>

	import { useRoute } from 'vue-router';
	import { useStore } from 'vuex';

	import { computed, inject } from 'vue'
	import { ClockIcon } from '@heroicons/vue/solid'
	
	export default {

		components: {
			ClockIcon
		},

		setup(){

			const ethers = inject('ethers')			

			const route = useRoute()
			const store = useStore()

			const collection = computed(()=>{
				return store.getters['collection-details/getCollectionByName'](route.params.name)
			})

			return {
				collection
			}

			


		}

	}

</script>