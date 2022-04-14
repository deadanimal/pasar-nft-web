<template>
	<div data-component="view.collections.CollectionItem">

		<!-- <h1 class="mt-4 font-bold text-3xl text-gray-500">{{collection.name}}</h1>

		<h2 class="mt-4 text-2xl">{{item.title}}</h2> -->


		<div class="flex-none md:flex my-4">

			<div class="w-full md:w-1/3 p-2 mr-4">
				<figure>
					<img :src="item.imageUrl" class="w-full rounded-md">
				</figure>
			</div>

			
			
			<item-info :collection="collection" :item="item"/>
			
			
		</div>

	</div>
</template>

<script>

	import { computed, defineAsyncComponent } from 'vue';
	import { useRoute } from 'vue-router';
	import { useStore } from 'vuex';

	import _find from 'lodash/find'
	import _lowerCase from 'lodash/lowerCase'

	
	import { ViewGridIcon } from '@heroicons/vue/solid'
	import { HeartIcon } from '@heroicons/vue/solid'	



	export default {

		components:{			
			ViewGridIcon,
			HeartIcon,			
			"item-info": defineAsyncComponent(()=> import('@/components/collections/item-details/ItemInfo.vue') )
		},

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