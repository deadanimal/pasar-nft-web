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

    <div data-component="views.profile.MyCollections">


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
            <my-collection-list :my-contracts="myContracts"></my-collection-list>
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
    import MyCollectionList from '@/components/collections/my-collection/MyCollectionList.vue'
    import { useStore } from 'vuex'
    import { useStorage } from 'vue3-storage'
    import { computed } from 'vue'

    export default {

        name: 'MyCollections',
        components: {
            CreateCollection,
            MyCollectionList
        },

/*
 ######    ########   ########   ##     ##  ########   
##    ##   ##            ##      ##     ##  ##     ##  
##         ##            ##      ##     ##  ##     ##  
 ######    ######        ##      ##     ##  ########   
      ##   ##            ##      ##     ##  ##         
##    ##   ##            ##      ##     ##  ##         
 ######    ########      ##       #######   ##         
*/
        setup(){
            const store = useStore();
            const storage = useStorage();
            
            (()=>{
                // load collections
                store.dispatch('contract/myContract/loadContracts', storage.getStorageSync('address'))
            })();

/*
 ######     #######   ##     ##  ########   ##     ##  ########   ########   ########   
##    ##   ##     ##  ###   ###  ##     ##  ##     ##     ##      ##         ##     ##  
##         ##     ##  #### ####  ##     ##  ##     ##     ##      ##         ##     ##  
##         ##     ##  ## ### ##  ########   ##     ##     ##      ######     ##     ##  
##         ##     ##  ##     ##  ##         ##     ##     ##      ##         ##     ##  
##    ##   ##     ##  ##     ##  ##         ##     ##     ##      ##         ##     ##  
 ######     #######   ##     ##  ##          #######      ##      ########   ########   
*/
            const myContracts = computed(()=>{
                return store.getters['contract/myContract/contracts'];
            })    

            setTimeout(()=>{
                console.log(store.getters['contract/myContract/contracts'])
            }, 2000)         

/*
########   ########   ########   ##     ##  ########   ##    ##   
##     ##  ##            ##      ##     ##  ##     ##  ###   ##   
##     ##  ##            ##      ##     ##  ##     ##  ####  ##   
########   ######        ##      ##     ##  ########   ## ## ##   
##   ##    ##            ##      ##     ##  ##   ##    ##  ####   
##    ##   ##            ##      ##     ##  ##    ##   ##   ###   
##     ##  ########      ##       #######   ##     ##  ##    ##   
*/

            return {
                myContracts                
            }          
            

        }

    }

</script>




