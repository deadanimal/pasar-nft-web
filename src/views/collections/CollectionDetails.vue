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

				
					<div class="border rounded flex flex-col cursor-pointer" v-for="item in collection.items" :key="item.imageUrl" @click="$router.push({name:'collection-item', params:{name:collection.name, title:item.title}})">
											
							<figure class="flex-1 flex flex-col justify-center">
								<img :src="item.imageUrl" alt="" class="w-full">
							</figure>		
						
							<div class="flex justify-between mt-4 p-4">
								<p>{{item.title}}</p>
								<p>ETH{{item.price}}</p>
							</div>																												
					</div>

				

				

			</div>


		</div>
		




	</div>
	
</template>

<script>

	import { useRoute } from 'vue-router';
	import { useStore } from 'vuex';

	import { computed } from 'vue'
	
	export default {

		setup(){

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