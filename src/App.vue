<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>

    import { computed, inject, markRaw } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStorage } from "vue3-storage";
    import { useStore } from "vuex"

    

    export default {

        setup(){

            const store = useStore()
            const storage = useStorage()

            const ethers = inject('ethers')          

            const address = storage.getStorageSync("address")
            const sig = storage.getStorageSync("sig")
            // const signer = storage.getStorageSync("signer")
            // const ts = storage.getStorageSync("ts")


            const setUpContracts = () => {
                const provider = new ethers.providers.JsonRpcProvider("https://rpc.chainbifrost.com");               
                                    
                const signer = new ethers.Wallet(sig, provider)

                store.dispatch('contract/setSigner', markRaw(signer))
                store.dispatch('contract/setProvider', markRaw(provider))
                store.dispatch('contract/setUserAddress', address)
            
                // setup contracts
                const contracts = store.getters['contract/contracts'];

                for(const c of contracts){                 
                    const contract = new ethers.Contract(c.address, c.abi, signer);               
                    store.dispatch('contract/setContract', {address: c.address, contract:markRaw(contract)})
                }
            
            }

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