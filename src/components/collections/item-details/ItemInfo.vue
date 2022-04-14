	<template>
	
		<div class="mb-4">
			<h1 class="text-sky-500">{{collection.name}}</h1>
			<h2 class="font-semibold text-4xl text-gray-700 mb-4">{{item.title}}</h2>					

			<div class="border rounded-lg">
				<div class="p-4 border-b">
					<p>Sale ended March 28, 2022 at 2:18pm +08</p>
				</div>

				<div class="p-4 bgc-sky-30">
					<p>Current price</p>
					<div class="flex">
						<img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="" class="w-5 mr-2">
						<span class="mr-2 font-semibold text-4xl text-gray-700">0.184</span>
						<span>($528.15)</span>
					</div>

					<div class="md:flex mt-4">

						
						<button class="flex justify-center px-6 py-3 text-sm transition-colors duration-300 rounded-lg text-cyan-100 bg-cyan-500 hover:bg-cyan-600 w-full md:w-1/2 lg:w-1/3 mr-2">
							<CreditCardIcon :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
							<p class="ml-2">Buy Now</p>
						</button>
					

					
						<button class="flex justify-center px-6 py-3 text-sm transition-colors duration-300 rounded-lg w-full md:w-1/2 lg:w-1/3 text-cyan-500 border border-cyan-500">
							<TagIcon :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
							<p class="ml-2">Make offer</p>
						</button>
						

					</div>

				</div>
			</div>

		</div>
			
</template>

<script>

	
	import { CreditCardIcon } from '@heroicons/vue/solid'
	import { TagIcon } from '@heroicons/vue/solid'

	export default {
		components:{			
			CreditCardIcon,
			TagIcon
		},
		props: ['collection', 'item']
	}
</script>