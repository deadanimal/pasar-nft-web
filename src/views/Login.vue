<template>
	<div class="flex justify-center items-stretch w-full h-full absolute">
		<div class="flex items-center justify-center">

			<div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">

				<p class="mb-4 border-b border-sky-500 text-gray-500">Sign in or sign up with Bifrost Blockchain</p>


			    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
			        <span class="block xl:inline">Take Control of Your Future</span> <span class="block text-gray-800 xl:inline">With Bifrost Blockchain</span>
			    </h1>
			    <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
			        With our ultra-fast transactions and low fees, we are introducing a new age of finance, entertainment and utility on the next-generation of Blockchain technology.
			    </p>
			    <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
			        <div class="rounded-md shadow">
			            <a href="https://chainbifrost.com" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10" target="_blank" rel="nofollow"> Learn More </a>
			        </div>
			        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
			            <a
			                target="_blank"
			                :href="bifrostLogin"
			                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
			            >
			                Sign In

			            </a>
			        </div>
			    </div>
			</div>


		</div>
	</div>
</template>

<script>
	

	export default {

		setup(){

			const hostname = window.location.hostname

			const bifrostLogin = `https://chainbifrost.com/connect?dapp=${hostname}`

			return {
				bifrostLogin
			}
		}

	}

</script>