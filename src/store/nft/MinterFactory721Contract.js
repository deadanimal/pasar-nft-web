import { toRaw } from 'vue'

/*
 ######    ########      ###     ########   ########   
##    ##      ##        ## ##       ##      ##         
##            ##       ##   ##      ##      ##         
 ######       ##      ##     ##     ##      ######     
      ##      ##      #########     ##      ##         
##    ##      ##      ##     ##     ##      ##         
 ######       ##      ##     ##     ##      ########   
*/

let state = {	
	
	name: 'MinterFactory721',		
	address: '0xf23092F88425AC7a6c8B39bae755EbCFc22D548d',
	readContract: null,
	writeContract: null,
	createFee: 0,
	mintFee: 0,
	abi: [
	  "constructor()",
	  "event Approval(address indexed,address indexed,uint256 indexed)",
	  "event ApprovalForAll(address indexed,address indexed,bool)",		  
	  "event Created(string,string,uint256,address,address,uint256)",
	  "event Minted(uint256,address,string)",
	  "event RoleAdminChanged(bytes32 indexed,bytes32 indexed,bytes32 indexed)",
	  "event RoleGranted(bytes32 indexed,address indexed,address indexed)",
	  "event RoleRevoked(bytes32 indexed,address indexed,address indexed)",
	  "event SelfManaged(uint256)",
	  "event Transfer(address indexed,address indexed,uint256 indexed)",
	  "function DEFAULT_ADMIN_ROLE() view returns (bytes32)",
	  "function MINTER_ROLE() view returns (bytes32)",
	  "function approve(address,uint256)",
	  "function balanceOf(address) view returns (uint256)",
	  "function create(string,string,uint256,address) payable",
	  "function createFee() view returns (uint256)",
	  "function custodyFee() view returns (uint256)",
	  "function dao() view returns (address)",
	  "function getApproved(uint256) view returns (address)",
	  "function getRoleAdmin(bytes32) view returns (bytes32)",
	  "function grantRole(bytes32,address)",
	  "function hasRole(bytes32,address) view returns (bool)",
	  "function isApprovedForAll(address,address) view returns (bool)",
	  "function mint(uint256,address,string) payable",
	  "function mintFee() view returns (uint256)",
	  "function name() view returns (string)",
	  "function ownerOf(uint256) view returns (address)",
	  "function renounceRole(bytes32,address)",
	  "function revokeRole(bytes32,address)",
	  "function safeTransferFrom(address,address,uint256)",
	  "function safeTransferFrom(address,address,uint256,bytes)",
	  "function selfCustody(uint256) payable",
	  "function setApprovalForAll(address,bool)",
	  "function supportsInterface(bytes4) view returns (bool)",
	  "function symbol() view returns (string)",
	  "function tokenContract(uint256) view returns (address)",
	  "function tokenIdCounter() view returns (uint256)",
	  "function tokenURI(uint256) view returns (string)",
	  "function transferFrom(address,address,uint256)",
	  "function updateDao(address)",
	  "function updateFees(uint256,uint256,uint256)"
	]

}


/*
 ######    ########   ########   ########   ########   ########    ######    
##    ##   ##            ##         ##      ##         ##     ##  ##    ##   
##         ##            ##         ##      ##         ##     ##  ##         
##   ####  ######        ##         ##      ######     ########    ######    
##    ##   ##            ##         ##      ##         ##   ##          ##   
##    ##   ##            ##         ##      ##         ##    ##   ##    ##   
 ######    ########      ##         ##      ########   ##     ##   ######    
*/
let getters = {
	name: state => state.name,
	address: state => state.address,
	readContract: state => state.readContract,
	writeContract: state => state.writeContract,
	abi: state => state.abi,
	createFee: state => state.createFee,
	mintFee: state => state.mintFee
}

/*
##     ##  ##     ##  ########      ###     ########   ####   #######   ##    ##   
###   ###  ##     ##     ##        ## ##       ##       ##   ##     ##  ###   ##   
#### ####  ##     ##     ##       ##   ##      ##       ##   ##     ##  ####  ##   
## ### ##  ##     ##     ##      ##     ##     ##       ##   ##     ##  ## ## ##   
##     ##  ##     ##     ##      #########     ##       ##   ##     ##  ##  ####   
##     ##  ##     ##     ##      ##     ##     ##       ##   ##     ##  ##   ###   
##     ##   #######      ##      ##     ##     ##      ####   #######   ##    ##   
*/
let mutations = {
	setContract(state, {operation, contract}){	
		if(operation == 'read'){
			state.readContract = contract
		}
		else if(operation == 'write'){
			state.writeContract = contract
		}		
	},
	setCreateFee(state, fee){
		state.createFee = fee
	},
	setMintFee(state, fee){
		state.mintFee = fee
	}
}

/*
   ###      ######    ########   ####   #######   ##    ##   
  ## ##    ##    ##      ##       ##   ##     ##  ###   ##   
 ##   ##   ##            ##       ##   ##     ##  ####  ##   
##     ##  ##            ##       ##   ##     ##  ## ## ##   
#########  ##            ##       ##   ##     ##  ##  ####   
##     ##  ##    ##      ##       ##   ##     ##  ##   ###   
##     ##   ######       ##      ####   #######   ##    ##   
*/
let actions= {
	setContract({commit}, contractData){	
		commit('setContract', contractData)
	},
	initContract({commit, state}, {ethers, provider, signer}){
		const readContract = new ethers.Contract(state.address, state.abi, provider);
		const writeContract = new ethers.Contract(state.address, state.abi, signer);

		commit('setContract', {operation:'read', contract:readContract})
		commit('setContract', {operation:'write', contract:writeContract})
	},
	async setCreateFee({state, commit}, ethers){
		const createFee = await state.readContract.createFee()
		commit('setCreateFee', ethers.utils.formatUnits(createFee, 18))
	},
	async setMintFee({state, commit}, ethers){		
		const mintFee = await state.readContract.mintFee()
		commit('setMintFee', ethers.utils.formatUnits(mintFee, 18))
	},
	async createContract({state}, { name, symbol, royalty, creator}){

		const writeContract = toRaw(state.writeContract)

		const tx = await writeContract.populateTransaction.create( name, symbol, +royalty, creator )
		
		const url = `https://chainbifrost.com/confirm?dapp=${location.host}&to=${tx.to}&data=${tx.data}&value=${state.createFee}`;

		window.open(url)

	}

}



export const MinterFactory721Contract = {
	state,
	getters,
	mutations,
	actions,
	namespaced:true


}