import { inject, markRaw } from 'vue';
import { useContractStore } from "@/stores/ContractStore"
import { useMinterFactory721ContractStore } from '@/stores/MinterFactory721ContractStore'

export default function (){
	
    const contractStore = useContractStore();
    const minterFactory721ContractStore = useMinterFactory721ContractStore();
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
        minterFactory721ContractStore.initContract({ethers, provider, signer});

        minterFactory721ContractStore.setCreateFee(ethers)
        minterFactory721ContractStore.setMintFee(ethers)

    
    }

    return {
    	setUpContracts
    }


}