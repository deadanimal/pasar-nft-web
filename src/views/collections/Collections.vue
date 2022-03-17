<template>
  
    <div data-component="view.collections.Collections">
      
        <div>        
            <h1 class="my-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl text-center">Explore Collections</h1>

        </div>

        <div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                    v-for="collection in collections" 
                    :key="collection.id"
                    class="border border-black rounded"
                >
                    <a href="#" @click="$router.push({name:'collection', params:{ name:collection.title }})">

                        <div>
                            <figure>
                                <img :src="collection.imageUrl" alt="" class="w-full object-cover object-center h-44">
                            </figure>

                            <figure class="flex justify-center">
                                <img :src="collection.profileImageUrl" alt="" class="rounded-full w-12 h-12 p-1 transform -translate-y-4 bg-white">
                            </figure>
                        </div>

                        <div class="flex flex-col items-center">
                            <strong>{{ collection.title }}</strong>
                            <p>By <span>{{ collection.author }}</span> </p>
                            <p class="p-8 text-gray-400">{{ collection.introText }}</p>
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

