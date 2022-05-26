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
    <form class="space-y-8 divide-y divide-gray-200 mt-8 max-w-3xl w-full" @submit.prevent="submitForm" data-component="components.collections.my-collection.form.CreateCollection">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-900">Create New Collection</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">The collection will hold all your NFT image.</p>
                </div>

                <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">

                    <!-- Collection Name -->
                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="collectionName" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Collection Name </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="flex rounded-md shadow-sm">                
                                <input type="text" name="collectionName" id="collectionName" autocomplete="collectionName" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border h-8 p-2" v-model="collectionName">              
                            </div>
                            <p class="text-sm mt-1 text-rose-500">{{ errors.collectionName }}</p>
                        </div>
                    </div>

                    <!-- Symbol -->
                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="symbol" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Symbol </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">            

                            <input type="text" name="symbol" id="symbol" autocomplete="symbol" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border h-8 p-2" v-model="symbol">

                            <p class="text-sm mt-1 text-rose-500">{{ errors.symbol }}</p>            
                        </div>
                    </div>        

                    <!-- Royalty -->
                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="royalty" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Royalty (%) </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">            

                            <input type="number" min="1" max="20" name="royalty" id="royalty" autocomplete="10" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border h-8 p-2" v-model="royalty">

                            <p class="text-sm mt-1 text-rose-500">{{ errors.royalty }}</p>            
                        </div>
                    </div>        





                </div>
            </div>

        </div>

        <div class="pt-5">
            <div class="flex justify-end">
                <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="clearForm">Cancel</button>
                <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
        </div>
    </form>

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

    import { inject, toRaw } from 'vue'


    import { useField, useForm } from 'vee-validate';
    import * as yup from 'yup'


    import moment from 'moment'

    import { useStorage } from "vue3-storage";
    import { useStore } from 'vuex';

    import { useMinterFactory721ContractStore } from '@/stores/MinterFactory721ContractStore'



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

    name: 'CreateCollection',    

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

        // const { errorMessage, value } = useField('collectionName', yup.string().required().min(8));

        const storage = useStorage()
        const store = useStore()

        const minterFactory721ContractStore = useMinterFactory721ContractStore()

        let ipfs;      

        ( async ()=>{
            ipfs = await inject('ipfs')                             
        })();




        const { errors, handleSubmit, resetForm } = useForm({
            validationSchema: yup.object({
                collectionName: yup.string().required().label('Collection name'),
                symbol: yup.string().required().label('Symbol'),
                royalty: yup.number().typeError('Amount must be a number').required().min(1).max(20).label('Royalty')          
            })
        })

        const { value: collectionName } = useField('collectionName');
        const { value: symbol } = useField('symbol'); 
        const { value: royalty } = useField('royalty');      


        /*
        ##     ##  ########   ########   
        ###   ###     ##      ##     ##  
        #### ####     ##      ##     ##  
        ## ### ##     ##      ##     ##  
        ##     ##     ##      ##     ##  
        ##     ##     ##      ##     ##  
        ##     ##     ##      ########   
        */            
        const submitForm = handleSubmit( async (values) =>{

            let {collectionName, symbol, royalty} = values

            royalty *= 100                      
            
            const contract = toRaw(minterFactory721ContractStore.writeContract)

            contract.on('Created', (name, symbol, royalty, creator, tokenAddress, tokenId)=>{
                console.log({
                    name, symbol, royalty, creator, tokenAddress, tokenId
                })

                store.dispatch('contract/myContract/loadContracts', storage.getStorageSync('address'))
            });

            minterFactory721ContractStore.createContract({
                name:collectionName,
                symbol: symbol,
                royalty: royalty,
                creator: storage.getStorageSync("address")
            })            

        })  


        /*
        ##     ##  ########   ########   
        ###   ###     ##      ##     ##  
        #### ####     ##      ##     ##  
        ## ### ##     ##      ##     ##  
        ##     ##     ##      ##     ##  
        ##     ##     ##      ##     ##  
        ##     ##     ##      ########   
        */            
        const clearForm = () => {
            collectionName.value = '';
            symbol.value = '';
            royalty.value = 10;

            resetForm();        
        }      

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
            submitForm,        
            clearForm,  
            collectionName,              
            symbol, 
            royalty,               
            errors        
        }


    }
} 

</script>