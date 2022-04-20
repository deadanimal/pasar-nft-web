import { inject, markRaw } from 'vue';
import { useStore } from "vuex"

export default function (){

	const store = useStore()    
    const ethers = inject('ethers')              

	const setUpContracts = () => {   		

        const provider = new ethers.providers.JsonRpcProvider("https://rpc.chainbifrost.com");               
                            
        // const signer = new ethers.Wallet(	, provider)
        const signer = provider.getSigner()        
        
        store.dispatch('contract/setProvider', markRaw(provider))                
        store.dispatch('contract/setSigner', markRaw(signer))
    
        // setup contracts
        const contracts = store.getters['contract/contracts'];

        for(const c of contracts){                 
            const contract = new ethers.Contract(c.address, c.abi, signer);               
            store.dispatch('contract/setContract', {address: c.address, contract:markRaw(contract)})
        }

        // setup MinterFactory contract 
        store.dispatch('contract/MinterFactory721Contract/initContract', {ethers, provider, signer})   

        store.dispatch('contract/MinterFactory721Contract/setCreateFee', ethers)
        store.dispatch('contract/MinterFactory721Contract/setMintFee', ethers)

    
    }

    return {
    	setUpContracts
    }


}