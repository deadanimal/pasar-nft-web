import { inject, markRaw } from 'vue';
import { useStore } from "vuex"
import { useContractStore } from "@/stores/ContractStore"

export default function (){

	const store = useStore()    
    const contractStore = useContractStore();
    const ethers = inject('ethers')              

	const setUpContracts = () => {   		

        const provider = new ethers.providers.JsonRpcProvider("https://rpc.chainbifrost.com");               
                            
        // const signer = new ethers.Wallet(	, provider)
        const signer = provider.getSigner()                    

        contractStore.setProvider(markRaw(provider));
        contractStore.setSigner(markRaw(signer));
    
        // setup contracts             
        for(const c of contractStore.contracts){                 
            const contract = new ethers.Contract(c.address, c.abi, signer); 
            contractStore.setContract({address: c.address, contract:markRaw(contract)});                          
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