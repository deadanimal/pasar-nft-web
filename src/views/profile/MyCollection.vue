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
		
<form class="space-y-8 divide-y divide-gray-200 mt-8" @submit.prevent="submitForm">
  <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div>
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Create New Collection</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">The collection will hold all your NFT image.</p>
      </div>

      <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">

        <!-- Collection Name -->
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="collectionName" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Collection Name </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex rounded-md shadow-sm">                
              <input type="text" name="collectionName" id="collectionName" autocomplete="collectionName" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border h-8 p-2" v-model="collectionName">              
            </div>
            <p class="text-sm mt-1 text-rose-500">{{ errors.collectionName }}</p>
          </div>
        </div>

        <!-- Description -->
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="description" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Description </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="description" name="description" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md p-2" v-model="description"></textarea>
            <p class="text-sm mt-1 text-rose-500">{{ errors.description }}</p>
            <p class="mt-2 text-sm text-gray-500">Write a few sentences describing this collection.</p>
          </div>
        </div>        


        <!-- Cover Photo -->
        <form-cover-photo @update="updateCoverPhoto"></form-cover-photo>

        
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
	
	import { inject, ref, toRaw } from 'vue'
  import FormCoverPhoto from '@/components/collections/my-collection/form/CoverPhoto.vue'

  import { useField, useForm } from 'vee-validate';
  import * as yup from 'yup';

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
		name: 'MyCollection',

    components: {
      FormCoverPhoto
    },

		setup(){

      // const { errorMessage, value } = useField('collectionName', yup.string().required().min(8));

      

			let ipfs;

			( async ()=>{
				ipfs = await inject('ipfs')				

				console.log(ipfs)

			})();

      const coverPhoto = ref(null);
			   
      const { errors, handleSubmit, resetForm } = useForm({
        validationSchema: yup.object({
          collectionName: yup.string().required().label('Collection name'),
          description: yup.string().required().label('Description')          
        })
      })

      const { value: collectionName } = useField('collectionName');
      const { value: description } = useField('description');      

      const updateCoverPhoto = (file) => {
        coverPhoto.value = file
      }      

      const submitForm = handleSubmit( values =>{

        const {collectionName, description} = values

        
        
      })

      const clearForm = () => {
        collectionName.value = '',
        description.value = '',

        resetForm();

        coverPhoto.value = null 
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
        updateCoverPhoto,
        submitForm,        
        clearForm,  
        collectionName,              
        description,        
        coverPhoto,
        errors        
      }


		}
	}

</script>