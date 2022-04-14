<template>
	
	<div data-component="views.profile.MyCollection">
		
		<h1>Component My Collection</h1>

	</div>

</template>

<script>
	
	import { inject } from 'vue'

	export default {
		name: 'MyCollection',

		setup(){

			let ipfs;

			// const ipfsData = reactive({
			// 	isOnline: false,
			// 	id: ''
			// })

			( async ()=>{
				ipfs = await inject('ipfs')

				const { agentVersion, id } = await ipfs.id();

				const online = ipfs.isOnline();

				// console.log({ipfs})

				console.log({id, agentVersion, online})

			})();
			

			
			

			
			



		}
	}

</script>