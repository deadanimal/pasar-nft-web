<!-- <template>
<div data-component="MainLayout">
<slot/>
</div>
</template> -->


<template>
	<div class="pb-24" data-component="views.layouts.MainLayout">		
		<menu-header></menu-header>

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<slot/>
		</div>
		
	</div>
</template>

<script>
	
	import MenuHeader from './MenuHeader.vue'

	export default {

		name: 'MainLayout',

		components: {
			MenuHeader
		}
	}

</script>

