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
              <input type="text" name="collectionName" id="collectionName" autocomplete="collectionName" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border h-8 p-2" v-model="formModel.name">
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="description" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Description </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="description" name="description" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md p-2" v-model="formModel.description"></textarea>
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
	
	import { inject, reactive } from 'vue'
  import FormCoverPhoto from '@/components/collections/my-collection/form/CoverPhoto.vue'

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

			let ipfs;

			( async ()=>{
				ipfs = await inject('ipfs')				

				

			})();
			
      const formModel = reactive({
        name: '',
        description: '',
        coverPhoto: null      
      })            

      const updateCoverPhoto = (file) => {
        formModel.coverPhoto = file
      }

      const submitForm = () => {
        console.log(formModel)
      }

      const clearForm = () => {
        formModel.name = '',
        formModel.description = '',
        formModel.coverPhoto = null,
        formModel.showingPreview = false
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
        formModel,
        updateCoverPhoto,
        submitForm,        
        clearForm        
      }


		}
	}

</script>