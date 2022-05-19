<template>
	<Popover class="relative bg-white mb-8" data-component="views.layouts.MenuHeader">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<a href="/" @click.prevent="$router.push({name:'home'})">
						<span class="sr-only">Workflow</span>
						<img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
					</a>
				</div>

				<!-- Block: menu burger: only shown on small device -->
				<div class="-mr-2 -my-2 md:hidden">
					<PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span class="sr-only">Open menu</span>
						<MenuIcon class="h-6 w-6" aria-hidden="true" />
					</PopoverButton>
				</div>

				<!-- Block: main header: shown only on tablet and above -->
				<PopoverGroup as="nav" class="hidden md:flex space-x-10">
					<!-- Block: Explore -->
					<menu-item-explore></menu-item-explore>

					<!-- Block: Pricing and Docs -->
					<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Stats </a>

					<!-- Block: More -->
					<menu-item-resources></menu-item-resources>

					<!-- Block: create -->
					<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Create </a>
				</PopoverGroup>
							

				<!-- Block: sign-in and sign up: shown only on tablet and above -->
				<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
					<div v-if="!address">
						<a href="#" @click="$router.push({name:'login'})" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
						<!-- <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a> -->
					</div>
					<div v-else class="flex w-16 justify-between">
						
						<menu-item-account></menu-item-account>

						<mdi-wallet-outline />

					</div>
				</div>
			</div>
		</div>

		<!-- Block: menu that will be shown by opening up burger menu -->
		<transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
			<PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div class="pt-5 pb-6 px-5">
						<div class="flex items-center justify-between">
							<div>
								<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
							</div>
							<div class="-mr-2">
								<PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span class="sr-only">Close menu</span>
									<XIcon class="h-6 w-6" aria-hidden="true" />
								</PopoverButton>
							</div>
						</div>
						<div class="mt-6">
							<nav class="grid gap-y-8">
								<a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
									<component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
									<span class="ml-3 text-base font-medium text-gray-900">
										{{ item.name }}
									</span>
								</a>
							</nav>
						</div>
					</div>
					<div class="py-6 px-5 space-y-6">
						<div class="grid grid-cols-2 gap-y-4 gap-x-8">
							<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

							<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
							<a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
								{{ item.name }}
							</a>
						</div>
						<div>
							<a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
							<p class="mt-6 text-center text-base font-medium text-gray-500">
								Existing customer?
								{{ ' ' }}
								<a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
							</p>
						</div>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
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
	import {defineAsyncComponent} from 'vue'
	import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
	import {		
		MenuIcon,
		PhoneIcon,
		PlayIcon,		
		XIcon,	
		SupportIcon,
		BookmarkAltIcon,	
		CalendarIcon,
		ShieldCheckIcon,
	} from '@heroicons/vue/outline'
	import { ChevronDownIcon } from '@heroicons/vue/solid'

	import MdiWalletOutline from 'vue-material-design-icons/WalletOutline.vue';	

	import { useStorage } from "vue3-storage";
	import { computed } from 'vue';	

/*
 ######    ########      ###     ########   ####   ######         ########      ###     ########      ###     
##    ##      ##        ## ##       ##       ##   ##    ##        ##     ##    ## ##       ##        ## ##    
##            ##       ##   ##      ##       ##   ##              ##     ##   ##   ##      ##       ##   ##   
 ######       ##      ##     ##     ##       ##   ##              ##     ##  ##     ##     ##      ##     ##  
      ##      ##      #########     ##       ##   ##              ##     ##  #########     ##      #########  
##    ##      ##      ##     ##     ##       ##   ##    ##        ##     ##  ##     ##     ##      ##     ##  
 ######       ##      ##     ##     ##      ####   ######         ########   ##     ##     ##      ##     ##  
*/
	
	const callsToAction = [
		{ name: 'Watch Demo', href: '#', icon: PlayIcon },
		{ name: 'Contact Sales', href: '#', icon: PhoneIcon },
	]


	const resources = [
        {
            name: 'Help Center',
            description: 'Get all of your questions answered in our forums or contact support.',
            href: '#',
            icon: SupportIcon,
        },
        {
            name: 'Guides',
            description: 'Learn how to maximize our platform to get the most out of it.',
            href: '#',
            icon: BookmarkAltIcon,
        },
        {
            name: 'Events',
            description: 'See what meet-ups and other events we might be planning near you.',
            href: '#',
            icon: CalendarIcon,
        },
        { 
            name: 'Security', 
            description: 'Understand how we take your privacy seriously.', 
            href: '#', 
            icon: ShieldCheckIcon 
        },
    ]


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

		name: 'MenuHeader',

		components: {
			Popover,
			PopoverButton,
			PopoverGroup,
			PopoverPanel,
			ChevronDownIcon,
			MenuIcon,
			XIcon,
			SupportIcon,
			BookmarkAltIcon,
			CalendarIcon,
			ShieldCheckIcon,
			MdiWalletOutline,								
			'menu-item-explore' : defineAsyncComponent( () => import('@/components/MenuHeader/MenuItemExplore.vue') ),
			'menu-item-resources' : defineAsyncComponent( () => import('@/components/MenuHeader/MenuItemResources.vue') ),
			'menu-item-account' : defineAsyncComponent( () => import('@/components/MenuHeader/MenuItemAccount.vue') )
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
		setup() {

			const storage = useStorage()			
			


			const addressShort = computed(()=>{
				const address = storage.getStorageSync('address')
				
				const firstPart = address.substring(0,5);

				const lastPart = address.substring(address.length - 5, address.length);

				return `${firstPart}...${lastPart}`
			})

			const address = storage.getStorageSync('address')
			
		
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
				callsToAction,				
				address,
				addressShort,				
				resources
			}
		},
	}
</script>