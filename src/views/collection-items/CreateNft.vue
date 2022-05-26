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
	<div class="p-4 md:p-0 flex justify-center" data-component="views.collection-items.CreateNft">

		<div class="max-w-3xl w-full">
			<div class="sm:flex sm:items-center">
	            <div class="sm:flex-auto">
	                <h1 class="text-xl font-semibold text-gray-900">Create Nft</h1>
	                <p class="mt-2 text-sm text-gray-700">Create, mint and add your Nft into your collection: <span>{{contract.name}}</span></p>
	            </div>                    
	        </div>

	        <form class="space-y-8 divide-y divide-gray-200 mt-8 max-w-3xl w-full" @submit.prevent="submitForm">
	        	<div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
	        		<div>

	        			<!-- <div>Can add title here. Please refer create collection form component</div> -->

	        			<div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">

	        				<!-- Name -->
	        				<div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
	        					<label for="itemName" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Name </label>
	        					<div class="mt-1 sm:mt-0 sm:col-span-2">
	        						<div class="flex rounded-md shadow-sm">                
	        							<input type="text" name="itemName" id="itemName" autocomplete="itemName" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border h-8 p-2" v-model="itemName">              
	        						</div>
	        						<p class="text-sm mt-1 text-rose-500">{{ errors.itemName }}</p>
	        					</div>
	        				</div>	

	        				<!-- Description -->
	        				<div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
	        					<label for="itemDescription" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Description </label>
	        					<div class="mt-1 sm:mt-0 sm:col-span-2">
	        						<div class="flex rounded-md shadow-sm">                
	        							<input type="text" name="itemDescription" id="itemDescription" autocomplete="itemDescription" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border h-8 p-2" v-model="itemDescription">              
	        						</div>
	        						<p class="text-sm mt-1 text-rose-500">{{ errors.itemDescription }}</p>
	        					</div>
	        				</div>	

	        				<photo-upload @update="imageUpdated"></photo-upload>        				

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
	
	import { useField, useForm } from 'vee-validate';
    import * as yup from 'yup';
    import { inject, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStorage } from "vue3-storage";
    import { useMyContractStore } from '@/stores/MyContractStore';
    import { useMyItemsStore } from '@/stores/MyItemsStore';
    import PhotoUpload from '@/components/PhotoUpload.vue';

	export default {
		name: 'CreateNft',
		components: {
			PhotoUpload
		},
		setup(){

			let ipfs;      

	        ( async ()=>{
	            ipfs = await inject('ipfs')                             
	        })();

	        const route = useRoute();
	        const storage = useStorage();
	        const myContractStore = useMyContractStore();
	        const myItemsStore = useMyItemsStore();

	        const contract = myContractStore.contract(route.params.contractId)

			const { errors, handleSubmit, resetForm } = useForm({
	            validationSchema: yup.object({
	                itemName: yup.string().required().label('Name'),
	                itemDescription: yup.string().required().label('Description')
	            })
	        });

			const imageFile = ref(null)
	        const { value: itemName } = useField('itemName');
	        const { value: itemDescription } = useField('itemDescription');

	        const imageUpdated = (file)=>{
	        	imageFile.value = file;	
	        }

	        const clearForm = ()=>{
	        	imageFile.value = null;
	        	itemName.value = '';
	        	itemDescription.value = '';
	        }

	        const submitForm = handleSubmit( async (values)=>{

	        	const {itemName:name, itemDescription:description} = values;	        	

	        	// const {path:imageHash} =  await ipfs.add(imageFile.value)
	        	
	        	const imageHash = 'Qmbb4co5T1yyJTtDazbp5fqwtiuKA1XQSsTD5W1y6PjSRq';

	        	const formData = {
	        		name,
	        		description,
	        		imageHash
	        	}

	        	// const {path:dataHash} = await ipfs.add(JSON.stringify(formData));

	        	const dataHash = 'QmX12LcHnEFv942sokrFLGhvSN7fq5afaU8CSh26Akt6B2';

	        	myItemsStore.mintItem(
	        		route.params.contractId,
	        		storage.getStorageSync('address'),
	        		dataHash
	        	);	        	

	        });	        
	        

	        return {
	        	clearForm,
	        	submitForm,
	        	itemName,
	        	itemDescription,
	        	errors,
	        	contract,
	        	imageUpdated
	        }


		}
	}

</script>