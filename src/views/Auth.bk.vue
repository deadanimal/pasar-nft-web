<template>
	<div class="flex justify-center items-stretch w-full h-full absolute">
		<div class="flex items-center">
			<p>Here it is</p>
		</div>
		
	</div>
</template>

<script>

	// import Web3Modal from 'web3modal'
	// import WalletConnectProvider from "@walletconnect/web3-provider";

	import Web3Modal from "web3modal";
	import WalletConnectProvider from "@walletconnect/web3-provider";
	import { inject } from 'vue'


	export default {
		setup(){	

			const ethers = inject('ethers')

			

			const getWeb3Modal = () => {
				const web3Modal = new Web3Modal({					
					cacheProvider: false,
					providerOptions: {						
						walletconnect: {
							package: WalletConnectProvider,
							options: {
								rpc:{
									1:"https://rpc.chainbifrost.com/"
								}
							},
						},
					},
				})

				return web3Modal;
			}

			const connect = async ()=>{				

				const web3Modal = getWeb3Modal();
				
				const provider = await web3Modal.connectTo("walletconnect");
				
				// const connection = await web3Modal.connect()				
    //   			const provider = new ethers.providers.Web3Provider(connection)      			
    //   			const accounts = await provider.listAccounts()

    //   			console.log(accounts)


			}

			connect()

			

		}
	}

</script>