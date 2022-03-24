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

            const store = useStore();

            // setup provider signer and store it
            const ethers = inject('ethers')

            const setUpContracts = () => {
                const provider = new ethers.providers.JsonRpcProvider("https://rpc.chainbifrost.com");

                // const signer = provider.getSigner()


                const signer = new ethers.Wallet("765e8e35beaed8b0dea655206d725964d976ae911750c6422339edbeca52d3dd", provider)

                store.dispatch('contract/setProvider', provider)
            

                // setup contracts
                const contracts = store.getters['contract/contracts'];

                for(const c of contracts){                
                    const contract = new ethers.Contract(c.address, c.abi, signer);
                    store.dispatch('contract/setContract', {address: c.address, contract})
                }

                // prive key should be stored somewhere else secure
                // const wallet = new ethers.Wallet("765e8e35beaed8b0dea655206d725964d976ae911750c6422339edbeca52d3dd")
                // contract.connect(wallet); 

                
                // // const penerima = "0x6cB1b6FC161927CeC903C6b9Ab8Aec4e1A95BABC";            
                // // const uri = "https://google.com";

                // // contract.safeMint(penerima, uri).then((tx)=> {
                // //     console.log("Tx Hash: ", tx.hash) // if write is successful, dia keluarkan hash je...
                // // })
            }

            setUpContracts();   

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