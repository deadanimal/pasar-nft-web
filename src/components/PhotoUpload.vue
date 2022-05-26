<template>
	
	<div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5" data-component="components.PhotoUpload">
		<label for="cover-photo" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Cover photo </label>
		<div class="mt-1 sm:mt-0 sm:col-span-2">
			<div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" @drop.prevent="coverPhotoDropped" @dragenter.prevent @dragover.prevent :class="{ 'hidden': formState.showingPreview, 'block': !formState.showingPreview }">
				<div class="space-y-1 text-center">
					<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
						<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<div class="flex text-sm text-gray-600">
						<label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
							<span>Upload a file</span>
							<input id="file-upload" name="file-upload" type="file" class="sr-only" @change="coverPhotoChanged" :value="imageValue">
						</label>
						<p class="pl-1">or drag and drop</p>
					</div>
					<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
				</div>         
			</div>			

			<div class="flex justify-center items-center max-w-lg block" :class="{ 'hidden': !formState.showingPreview, 'block': formState.showingPreview }">
				<img :src="imgPreviewSrc" alt="Preview Image">
			</div>			

			<div class="max-w-lg flex justify-end">
				<button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2" :class="{ 'hidden': !formState.showingPreview, 'block': formState.showingPreview }" @click="clearCoverPhoto">Cancel</button>
			</div>


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

	import { reactive, ref } from 'vue'
	
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
		name: 'PhotoUpload',

		emits: ['update'],

		setup(_props, { emit }) {

			const imageValue = ref('');
			const imgPreviewSrc = ref('');

			const formState = reactive({
				showingPreview : false
			})

			const photoPreviewStyle = reactive({
				'background-image': '',
				'background-size': 'cover'
			})      

			const _updatePreviewPhoto = (file)=>{

				var reader = new FileReader();

				// reader.onload = function (e) {                 
				// 	photoPreviewStyle['background-image'] = `url(${e.target.result})`
				// }
				
				reader.onload = function (e) {                 
					imgPreviewSrc.value = e.target.result
				}

				reader.readAsDataURL(file);

				formState.showingPreview = true;
			}

			const coverPhotoChanged = (e) => {					
				const file = e.target.files[0] 
				emit('update', file)
				_updatePreviewPhoto(file)       
			}

			const coverPhotoDropped = (e)=>{
				const file = e.dataTransfer.files[0]
				emit('update', file)
				_updatePreviewPhoto(file)
			}

			const clearCoverPhoto = () => {	
				imageValue.value = "";			
				emit('update', null)				
				formState.showingPreview = false				
			}
			

			return {
				formState,
				coverPhotoDropped,
				coverPhotoChanged,
				photoPreviewStyle,
				clearCoverPhoto,
				imageValue,
				imgPreviewSrc
			}
		}


	}


</script>








