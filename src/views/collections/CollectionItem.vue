<template>
	<div data-component="view.collections.CollectionItem">

		<h1 class="mt-4 font-bold text-3xl text-gray-500">{{collection.name}}</h1>

		<h2 class="mt-4 text-2xl">{{item.title}}</h2>


		<div class="flex-none md:flex my-4">

			<div class="w-full md:w-1/3 border p-2 mr-4">
				<figure>
					<img :src="item.imageUrl" class="w-full rounded-md">
				</figure>
			</div>

			<div class="w-full md:w-2/3 p-4 flex md:flex-col md:items-end justify-between">
				<div>
					<p>Current price</p>
					ETH{{item.price}}	
				</div>

				<div>
					<button class="px-6 py-2 text-sm transition-colors duration-300 rounded rounded-full shadow-xl text-cyan-100 bg-cyan-500 hover:bg-cyan-600 shadow-cyan-400/30">Buy</button>
				</div>
				
			</div>
			
		</div>

	</div>
</template>

<script>

	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import { useStore } from 'vuex';

	import _find from 'lodash/find'
	import _lowerCase from 'lodash/lowerCase'


	export default {

		setup(){	

			const route = useRoute();
			const store = useStore();



			const collection = computed(()=>{
				return store.getters['collection-details/getCollectionByName'](route.params.name)
			})

			const item = computed(()=>{
				return store.getters['collection-details/getItem'](route.params.name, route.params.title)
			})

			return {
				collection,
				item
			}

		}

	}

</script>