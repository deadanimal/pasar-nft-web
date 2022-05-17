<!-- 
########   ########   ##     ##  ########   ##            ###     ########   ########   
##      ##         ###   ###  ##     ##  ##           ## ##       ##      ##         
##      ##         #### ####  ##     ##  ##          ##   ##      ##      ##         
##      ######     ## ### ##  ########   ##         ##     ##     ##      ######     
##      ##         ##     ##  ##         ##         #########     ##      ##         
##      ##         ##     ##  ##         ##         ##     ##     ##      ##         
##      ########   ##     ##  ##         ########   ##     ##     ##      ########   
-->
<template>

    <div data-component="views.profile.MyCollection">


        <!-- <div class="flex justify-center">
            <div class="space-y-8 divide-y divide-gray-200 mt-8 max-w-3xl w-full">
                <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">My Collections</h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">List of my created collections</p>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="flex justify-center mt-4">
            <div class="p-4 md:p-0 max-w-3xl w-full">
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
                                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Royalty (%)</th>
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
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ contract.name }}</td>
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
        </div>

        <div class="flex justify-center">
            <create-collection></create-collection>     
        </div>
        



    </div>

</template>


<!-- 
######     ######    ########   ####  ########   ########   
##    ##   ##    ##   ##     ##   ##   ##     ##     ##      
##         ##         ##     ##   ##   ##     ##     ##      
######    ##         ########    ##   ########      ##      
##   ##         ##   ##     ##   ##            ##      
##    ##   ##    ##   ##    ##    ##   ##            ##      
######     ######    ##     ##  ####  ##            ##      
-->
<script>

    /* eslint-disable */

    import CreateCollection from '@/components/collections/my-collection/form/CreateCollection.vue'
    import { useStore } from 'vuex'
    import { useStorage } from 'vue3-storage'
    import { computed } from 'vue'

    export default {

        name: 'MyCollection',
        components: {
            CreateCollection
        },

        setup(){
            const store = useStore();
            const storage = useStorage();
            const people = [
            { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' }

            ];            

            (()=>{
                // load collections
                store.dispatch('contract/myContract/loadContracts', storage.getStorageSync('address'))
            })();

            const myContracts = computed(()=>{
                return store.getters['contract/myContract/contracts'];
            })    

            setTimeout(()=>{
                console.log(store.getters['contract/myContract/contracts'])
            }, 2000)         

            return {
                myContracts,
                people
            }          
            

        }

    }

</script>




