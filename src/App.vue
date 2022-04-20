<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>

    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStorage } from "vue3-storage";    
    import useContractSetup from '@/mixins/useContractSetup'
    

    export default {

        setup(){            

            const { setUpContracts } = useContractSetup()
            
            const storage = useStorage()

            const address = storage.getStorageSync("address")

            if(address){
                setUpContracts()
            }

            // setup layout
            const route = useRoute();
            const default_layout = 'main';

            const layout = computed(()=>{                
                return `${(route.meta.layout || default_layout)}-layout`
            }); 

            // data to return
            return { layout }

        }

    }

</script>

<style>
    html,
    body {
      font-family: "Poppins", sans-serif;
    }

    #app {
      font-family: "Poppins", sans-serif;
    }
</style>