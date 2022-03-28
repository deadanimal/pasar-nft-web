<template>
	<Popover class="relative bg-white" data-component="layouts.MenuHeader">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<a href="/" @click.prevent="$router.push({name:'home'})">
						<span class="sr-only">Workflow</span>
						<img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
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
					<!-- Block: solutions -->
					<Popover class="relative" v-slot="{ open }">
						<PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
							<span>Explore</span>
							<ChevronDownIcon :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
						</PopoverButton>

						<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
							<PopoverPanel class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
								<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
									<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
										<a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
											<component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">
													{{ item.name }}
												</p>
												<p class="mt-1 text-sm text-gray-500">
													{{ item.description }}
												</p>
											</div>
										</a>
									</div>
									<div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
										<div v-for="item in callsToAction" :key="item.name" class="flow-root">
											<a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
												<component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
												<span class="ml-3">{{ item.name }}</span>
											</a>
										</div>
									</div>
								</div>
							</PopoverPanel>
						</transition>
					</Popover>

					<!-- Block: Pricing and Docs -->
					<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Stats </a>
					<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Resources </a>

					<!-- Block: More -->
					<Popover class="relative" v-slot="{ open }">
						<PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
							<span>Create</span>
							<ChevronDownIcon :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
						</PopoverButton>

						<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
							<PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
								<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
									<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
										<a v-for="item in resources" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
											<component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">
													{{ item.name }}
												</p>
												<p class="mt-1 text-sm text-gray-500">
													{{ item.description }}
												</p>
											</div>
										</a>
									</div>
									<div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
										<div>
											<h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
											<ul role="list" class="mt-4 space-y-4">
												<li v-for="post in recentPosts" :key="post.id" class="text-base truncate">
													<a :href="post.href" class="font-medium text-gray-900 hover:text-gray-700">
														{{ post.name }}
													</a>
												</li>
											</ul>
										</div>
										<div class="mt-5 text-sm">
											<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">&rarr;</span></a>
										</div>
									</div>
								</div>
							</PopoverPanel>
						</transition>
					</Popover>
				</PopoverGroup>

				
				<!-- <div class="relative hidden md:block mx-auto text-gray-600">
					<input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
					type="search" name="search" placeholder="Search">
					<button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
						<svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
							viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
							width="512px" height="512px">
							<path
							d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
						</svg>
					</button>
				</div> -->

				<!-- Block: sign-in and sign up: shown only on tablet and above -->
				<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
					<div v-if="!address">
						<a :href="bifrostLogin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
						<!-- <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a> -->
					</div>
					<div v-else>
						Welcome {{addressShort}}
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

<script>
	import {ref} from 'vue'
	import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
	import {
		BookmarkAltIcon,
		CalendarIcon,
		ChartBarIcon,
		CursorClickIcon,
		MenuIcon,
		PhoneIcon,
		PlayIcon,
		RefreshIcon,
		ShieldCheckIcon,
		SupportIcon,
		ViewGridIcon,
		XIcon,
	} from '@heroicons/vue/outline'
	import { ChevronDownIcon } from '@heroicons/vue/solid'

	const solutions = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of where your traffic is coming from.',
		href: '#',
		icon: ChartBarIcon,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers in a more meaningful way.',
		href: '#',
		icon: CursorClickIcon,
	},
	{ name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
	{
		name: 'Integrations',
		description: "Connect with third-party tools that you're already using.",
		href: '#',
		icon: ViewGridIcon,
	},
	{
		name: 'Automations',
		description: 'Build strategic funnels that will drive your customers to convert',
		href: '#',
		icon: RefreshIcon,
	},
	]
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
	{ name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
	]
	const recentPosts = [
	{ id: 1, name: 'Boost your conversion rate', href: '#' },
	{ id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
	{ id: 3, name: 'Improve your customer experience', href: '#' },
	]

	import { useStorage } from "vue3-storage";
	import { computed } from 'vue';

	export default {
		components: {
			Popover,
			PopoverButton,
			PopoverGroup,
			PopoverPanel,
			ChevronDownIcon,
			MenuIcon,
			XIcon,
		},
		setup() {

			const storage = useStorage()

			const hostname = window.location.hostname

			const bifrostLogin = `https://chainbifrost.com/connect?dapp=${hostname}`


			const addressShort = computed(()=>{
				const address = storage.getStorageSync('address')
				
				const firstPart = address.substring(0,4);

				const lastPart = address.substring(address.length - 3, address.length);

				return `${firstPart}...${lastPart}`
			})

			const address = storage.getStorageSync('address')
		



			return {
				solutions,
				callsToAction,
				resources,
				recentPosts,
				bifrostLogin,
				address,
				addressShort
			}
		},
	}
</script>