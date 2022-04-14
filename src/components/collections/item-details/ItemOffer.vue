<template>
	
	<div>
		
		<div class="border rounded">

			<div class="flex justify-between items-center p-4">
				<div class="flex items-center">
					<ViewListIcon :class="['mx-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
					<strong>Offer</strong>
				</div>

				<div>
					<ChevronUpIcon :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
				</div>


			</div>

			<div>
				<table class="table-auto w-full">
					<thead class="text-sm">
						<tr>
							<th class="text-center font-normal text-gray-500 py-2">Price</th>  
							<th class="text-center font-normal text-gray-500 py-2">USD Price</th>
							<th class="text-center font-normal text-gray-500 py-2">Floor Difference</th>
							<th class="text-center font-normal text-gray-500 py-2">Expiration</th>
							<th class="text-center font-normal text-gray-500 py-2">From</th>
						</tr>
					</thead>

					<tbody class="text-sm text-gray-700">
						<tr>
							
							<td class="flex items-center justify-center h-full py-4">
								<img src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" class="w-3">
								<span class="mx-2 font-semibold">0.051</span>
								<span>ETH</span>
							</td>

							<td class="text-center py-4">								
								<span>$179.59</span>
							</td>

							<td class="text-center py-4">								
								<span>35% Below</span>
							</td>

							<td class="text-center py-4">								
								<span>about 7 hours</span>
							</td>

							<td class="text-center py-4">								
								<span>moon moon</span>
							</td>

						</tr>

						<tr>
							
							<td class="flex items-center justify-center py-4">
								<img src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" class="w-3">
								<span class="mx-2 font-semibold">0.1</span>
								<span>ETH</span>
							</td>

							<td class="text-center  py-4">								
								<span>$120.00</span>
							</td>

							<td class="text-center  py-4">								
								<span>40% Below</span>
							</td>

							<td class="text-center  py-4">								
								<span>3 days</span>
							</td>

							<td class="text-center  py-4">								
								<span>don't undercut me</span>
							</td>

						</tr>
					</tbody>
				</table>	
			</div>
			

			
		</div>

	</div>

</template>

<script>
	
	import { ViewListIcon, ChevronUpIcon } from '@heroicons/vue/solid'

	export default {
		components: {
			ViewListIcon,
			ChevronUpIcon
		}
	}

</script>