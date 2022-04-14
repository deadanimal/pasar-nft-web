<template>
	<div data-component="view.collections.CollectionItem">

		<!-- <h1 class="mt-4 font-bold text-3xl text-gray-500">{{collection.name}}</h1>

		<h2 class="mt-4 text-2xl">{{item.title}}</h2> -->

		<div class="flex-none lg:flex my-4 md:px-32 lg:px-0 ">

			<div class="w-full lg:w-2/5 p-2  mr-4">
				<figure>
					<img :src="item.imageUrl" class="w-full rounded-md">
				</figure>

				<item-details :collection="collection" :item="item"></item-details>
			</div>

			
			<div class="w-full lg:w-3/5 p-4">
				<item-info :collection="collection" :item="item"/>

				<item-offer></item-offer>
			</div>


			
		</div>

	</div>
</template>

<script>

	import { computed, defineAsyncComponent } from 'vue';
	import { useRoute } from 'vue-router';
	import { useStore } from 'vuex';

/*
 ######    ##            ###      ######     ######    
##    ##   ##           ## ##    ##    ##   ##    ##   
##         ##          ##   ##   ##         ##         
##         ##         ##     ##   ######     ######    
##         ##         #########        ##         ##   
##    ##   ##         ##     ##  ##    ##   ##    ##   
 ######    ########   ##     ##   ######     ######    
*/

	export default {

		name: 'CollectionItem',

		components:{						
			"item-info": defineAsyncComponent(()=> import('@/components/collections/item-details/ItemInfo.vue') ),
			"item-details": defineAsyncComponent(()=> import('@/components/collections/item-details/ItemDetails.vue') ),
			"item-offer": defineAsyncComponent(()=> import('@/components/collections/item-details/ItemOffer.vue') )
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