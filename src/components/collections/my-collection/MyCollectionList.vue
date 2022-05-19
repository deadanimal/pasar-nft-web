<template>
	
    <div class="p-4 md:p-0 max-w-3xl w-full" data-component="component.collections.my-collection.MyCollectioList">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">My Collections</h1>
                <p class="mt-2 text-sm text-gray-700">A list of all your created collections.</p>
            </div>                    
        </div>

        <div class="mt-8 flex flex-col" v-if="myContracts.length">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>

                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Id</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Royalty&nbsp; (%)</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Symbol</th>
                                    <!-- <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th> -->
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr v-for="(contract, contractIdx) in myContracts" :key="contract.tokenId" :class="contractIdx % 2 === 0 ? undefined : 'bg-gray-50'">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ contract.tokenId }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">                                    
                                        <router-link class="font-medium text-indigo-700 underline" :to="{name:'profile.my-collection', params: {contractId: contract.tokenId }}">
                                            {{ contract.name }}
                                        </router-link>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ contract.royalty }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ contract.symbol }}</td>
                                    <!-- <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a href="#" class="text-indigo-600 hover:text-indigo-900"
                                        >Edit<span class="sr-only">, {{ person.name }}</span></a
                                        >
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
        

</template>

<script>
	
	export default {

		name: "MyCollectionList",

		props: ['myContracts'],

		setup(){

		}

	}

</script>