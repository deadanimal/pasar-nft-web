<template>
  
    <div data-component="view.collections.Collections">

        <!-- <p>Deploy #5</p> -->
      
        <p class="mt-4">
            <a href="#" @click.prevent="$router.push({name:'test.contract.erc20'})" class="text-sky-300">ERC20 Test</a>    
        </p>

        <p>
            <a href="#" @click.prevent="$router.push({name:'test.contract.erc721'})" class="text-sky-300">ERC721 Test</a>    
        </p>
        
        <p>
            <a href="#" @click.prevent="$router.push({name:'test.contract.minterFactory721'})" class="text-sky-300">MinterFactory721 Test</a>    
        </p>
        
        

        <div>        
            <h1 class="my-12 text-4xl font-semibold text-gray-900  sm:tracking-tight text-center">Explore Collections</h1>

        </div>

        <div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                    v-for="collection in collections" 
                    :key="collection.id"
                    class="border rounded"
                >
                    <a href="#" @click="$router.push({name:'collection', params:{ name:collection.title }})">

                        <div>
                            <figure>
                                <img :src="collection.imageUrl" alt="" class="w-full object-cover object-center h-44 rounded-t">
                            </figure>

                            <figure class="flex justify-center">
                                <img :src="collection.profileImageUrl" alt="" class="rounded-full w-12 h-12 p-1 -mt-4 bg-white">
                            </figure>
                        </div>

                        <div class="flex flex-col items-center">
                            <strong>{{ collection.title }}</strong>
                            <p v-if="collection.author">By <span>{{ collection.author }}</span> </p>
                            <p class="p-4 text-gray-400">{{ collection.introText }}</p>
                        </div>
                    
                    </a>
                </div>

                
            </div>

        
        </div>

    </div>

</template>

<script>
    
    import { useStore } from 'vuex';
    import { computed } from 'vue';


    export default {

        setup(){
            // data
            const store = useStore()            

            // computed
            const collections = computed(()=>{
                return store.getters['collections/collections'];
            });                    

            // return
            return {
                collections                
            }
        }

    }

</script>

