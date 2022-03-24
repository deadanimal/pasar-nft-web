<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>

<script>

    import { ref, computed, inject } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex'

    

    export default {

        setup(props, context){

            // const store = useStore();

            // // setup provider and any related ethers stuff in store
            // const ethers = inject('ethers')
            
            // const provider = new ethers.providers.JsonRpcProvider("https://rpc.chainbifrost.com");
            // const signer = provider.getSigner()
            // const contractAddress = store.getters['contract/getContractAddress'];
            // const abi = store.getters['contract/getAbi'];            
            // let contract = new ethers.Contract(contractAddress, abi, signer);
            // // prive key should be stored somewhere else secure
            // const wallet = new ethers.Wallet("3512ed887e1bdf5207bb1d1d61152c4af36a7122fe92603cd594edfc2e3b1186")
            // contract = contract.connect(wallet);             

            // store.dispatch('contract/setProvider', provider)
            // store.dispatch('contract/setSigner', signer)
            // store.dispatch('contract/setContract', contract)

            // // Test out some functionalities
            

            // /*

            // Sometimes work, sometime throw address mismatch

            // */


            // // contract.name().then((data)=> {
            // //     console.log("Name: ", data)
            // // })


            // /*

            //     Not working, not sure why


            // */
        
            // // contract.ownerOf(0).then((data)=> {
            // //     console.log("Owner Of TokenID 0: ", data)
            // // })


            // /*

            //     Able to get the wallet
            //     Safe mint throw error, missing provider

            // */

            // // const penerima = "0x6cB1b6FC161927CeC903C6b9Ab8Aec4e1A95BABC";            
            // // const uri = "https://google.com";

            // // contract.safeMint(penerima, uri).then((tx)=> {
            // //     console.log("Tx Hash: ", tx.hash) // if write is successful, dia keluarkan hash je...
            // // })

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