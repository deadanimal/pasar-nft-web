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
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="cover-photo" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Cover photo </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" @drop.prevent="coverPhotoDropped" @dragenter.prevent @dragover.prevent :class="{ 'hidden': formModel.showingPreview, 'block': !formModel.showingPreview }">
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="coverPhotoChanged">
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>         
            </div>

            <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md h-36" :class="{ 'hidden': !formModel.showingPreview, 'block': formModel.showingPreview }" :style="photoPreviewStyle">
            </div>

            <div class="max-w-lg flex justify-end">
              <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2" :class="{ 'hidden': !formModel.showingPreview, 'block': formModel.showingPreview }" @click="clearCoverPhoto">Cancel</button>
            </div>


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

		setup(){

			let ipfs;

			( async ()=>{
				ipfs = await inject('ipfs')				

				

			})();
			
      const formModel = reactive({
        name: '',
        description: '',
        coverPhoto: null,
        showingPreview: false        
      })

      const photoPreviewStyle = reactive({
        'background-image': '',
        'background-size': 'cover'
      })      

      const _updatePreviewPhoto = (file)=>{

        var reader = new FileReader();

        reader.onload = function (e) {                 
            photoPreviewStyle['background-image'] = `url(${e.target.result})`
        }
        reader.readAsDataURL(file);

        formModel.showingPreview = true;
      }

      const coverPhotoChanged = (e) => {        
        formModel.coverPhoto = e.target.files[0]
        _updatePreviewPhoto(formModel.coverPhoto)
      }

      const coverPhotoDropped = (e) => {
        formModel.coverPhoto = e.dataTransfer.files[0]
        _updatePreviewPhoto(formModel.coverPhoto)
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

      const clearCoverPhoto = ()=>{        
        formModel.coverPhoto = null
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
        coverPhotoChanged,
        coverPhotoDropped,
        submitForm,
        photoPreviewStyle,
        clearForm,
        clearCoverPhoto       
      }


		}
	}

</script>