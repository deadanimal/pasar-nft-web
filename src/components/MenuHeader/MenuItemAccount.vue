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
	<Popover class="relative" v-slot="{ open }" data-component="components.MenuHeader.MenuItemAccount">
        <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none']">
            <span><mdi-shield-account /></span>            
        </PopoverButton>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
        >
            <PopoverPanel class="absolute z-10 md:-ml-24 lg:-ml-28 mt-3 transform px-2 w-screen max-w-xs sm:px-0 md:left-1/2 md:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-4 sm:p-4">                                            

                        <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" @click.prevent="$router.push({name:'profile.my-collections'})">
                            <component :is="MdiImageMultiple" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                    My Collection
                                </p>                                
                            </div>
                        </a>

                        <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" @click.prevent="logout">
                            <component :is="MdiLogoutVariant" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                    Logout
                                </p>                                
                            </div>
                        </a>

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

	import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
	import MdiShieldAccount from 'vue-material-design-icons/ShieldAccount.vue';
	import MdiLogoutVariant from 'vue-material-design-icons/LogoutVariant.vue';	
    import MdiImageMultiple from 'vue-material-design-icons/ImageMultiple.vue'; 

	import { useStore } from 'vuex'	


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
		name: 'MenuItemAccount',

		components: {
			Popover,
			PopoverButton,
			PopoverGroup,
			PopoverPanel,			
			MdiShieldAccount,
            MdiImageMultiple					
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
		setup(){		

			const store = useStore()	

			const logout = ()=>{
				try{					
					localStorage.clear()					
					store.dispatch('auth/logout')					
					location.replace('/')
				}
				catch(e){
					console.error(e)
				}
			}		
			
			return {
				MdiLogoutVariant,
                MdiImageMultiple,
				logout				
			}

		}


	}

</script>