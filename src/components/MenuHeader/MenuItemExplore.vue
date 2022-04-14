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
    <Popover class="relative" v-slot="{ open }" data-component="components.MenuHeader.MenuItemExplore">
        <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none']">
            <span>Explore</span>
            <ChevronDownIcon :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
        </PopoverButton>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
        >
            <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">	
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-4 sm:p-4">
                        <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                    {{ item.name }}
                                </p>
                                <!-- <p class="mt-1 text-sm text-gray-500">
{{ item.description }}
</p> -->
                            </div>
                        </a>
                    </div>
                    <!-- <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
<div v-for="item in callsToAction" :key="item.name" class="flow-root">
<a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
<component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
<span class="ml-3">{{ item.name }}</span>
</a>
</div>
</div> -->
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script>

	import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

	import {		
		ChartBarIcon,
		CursorClickIcon,
		RefreshIcon,		
		ViewGridIcon
	} from '@heroicons/vue/outline'
	import { ChevronDownIcon } from '@heroicons/vue/solid'

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
		name: 'MenuItemExplore',

		components: {
			Popover,
			PopoverButton,			
			PopoverPanel,
			ChevronDownIcon			
		},

		setup(){
			const solutions = [
				{
					name: 'Trending',		
					href: '#',
					icon: ChartBarIcon,
				},
				{
					name: 'Top',		
					href: '#',
					icon: CursorClickIcon,
			},
				{
					name: 'Art',		
					href: '#',
					icon: ViewGridIcon,
				},
				{
					name: 'Collectibles',		
					href: '#',
					icon: RefreshIcon,
				},
				{
					name: 'Collectibles',		
					href: '#',
					icon: RefreshIcon,
				},
				{
					name: 'Domain Names',		
					href: '#',
					icon: ChartBarIcon,
				},
				{
					name: 'Music',		
					href: '#',
					icon: CursorClickIcon,
			},
				{
					name: 'Photography',		
					href: '#',
					icon: ViewGridIcon,
				},
				{
					name: 'Sports',		
					href: '#',
					icon: RefreshIcon,
				},
				{
					name: 'Trading Cards',		
					href: '#',
					icon: ChartBarIcon,
				},
				{
					name: 'Utility',		
					href: '#',
					icon: CursorClickIcon,
			},
				{
					name: 'Virtual Worlds',		
					href: '#',
					icon: ViewGridIcon,
				},
			]

			return {
				solutions
			}
		}

	}

</script>














