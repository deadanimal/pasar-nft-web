import _find from 'lodash/find'



let state = {
	provider: {},
	signer: '',
	userAddress: '',
	contracts: [
		{
			name: 'SaifulToken',
			erc: 'ERC20',
			address: '0xB4bA73F5AE48347DD056fF0eF6F9DEDC00bC9462',
			contract: null,
			abi: [
				{
					"inputs": [],
					"stateMutability": "nonpayable",
					"type": "constructor"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": true,
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "address",
							"name": "spender",
							"type": "address"
						},
						{
							"indexed": false,
							"internalType": "uint256",
							"name": "value",
							"type": "uint256"
						}
					],
					"name": "Approval",
					"type": "event"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "spender",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "approve",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "burn",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "account",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "burnFrom",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "spender",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "subtractedValue",
							"type": "uint256"
						}
					],
					"name": "decreaseAllowance",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "spender",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "addedValue",
							"type": "uint256"
						}
					],
					"name": "increaseAllowance",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "mint",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": true,
							"internalType": "address",
							"name": "previousOwner",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "address",
							"name": "newOwner",
							"type": "address"
						}
					],
					"name": "OwnershipTransferred",
					"type": "event"
				},
				{
					"inputs": [],
					"name": "pause",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"internalType": "address",
							"name": "account",
							"type": "address"
						}
					],
					"name": "Paused",
					"type": "event"
				},
				{
					"inputs": [],
					"name": "renounceOwnership",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "transfer",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": true,
							"internalType": "address",
							"name": "from",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"indexed": false,
							"internalType": "uint256",
							"name": "value",
							"type": "uint256"
						}
					],
					"name": "Transfer",
					"type": "event"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "from",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "transferFrom",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "newOwner",
							"type": "address"
						}
					],
					"name": "transferOwnership",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "unpause",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"internalType": "address",
							"name": "account",
							"type": "address"
						}
					],
					"name": "Unpaused",
					"type": "event"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "spender",
							"type": "address"
						}
					],
					"name": "allowance",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "account",
							"type": "address"
						}
					],
					"name": "balanceOf",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "decimals",
					"outputs": [
						{
							"internalType": "uint8",
							"name": "",
							"type": "uint8"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "name",
					"outputs": [
						{
							"internalType": "string",
							"name": "",
							"type": "string"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "owner",
					"outputs": [
						{
							"internalType": "address",
							"name": "",
							"type": "address"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "paused",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "symbol",
					"outputs": [
						{
							"internalType": "string",
							"name": "",
							"type": "string"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "totalSupply",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
						}
					],
					"stateMutability": "view",
					"type": "function"
				}
			]
		},
		{
			name: 'SaifulNFT',
			erc: 'ERC721',
			address: '0x0E65c46e76d6F4C3bB9eA32290325aeC8655846b',
			contract: null,
			abi: [
				{
					"inputs": [],
					"stateMutability": "nonpayable",
					"type": "constructor"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": true,
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "address",
							"name": "approved",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "Approval",
					"type": "event"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": true,
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "address",
							"name": "operator",
							"type": "address"
						},
						{
							"indexed": false,
							"internalType": "bool",
							"name": "approved",
							"type": "bool"
						}
					],
					"name": "ApprovalForAll",
					"type": "event"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "approve",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "burn",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": true,
							"internalType": "address",
							"name": "previousOwner",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "address",
							"name": "newOwner",
							"type": "address"
						}
					],
					"name": "OwnershipTransferred",
					"type": "event"
				},
				{
					"inputs": [],
					"name": "pause",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"internalType": "address",
							"name": "account",
							"type": "address"
						}
					],
					"name": "Paused",
					"type": "event"
				},
				{
					"inputs": [],
					"name": "renounceOwnership",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "uri",
							"type": "string"
						}
					],
					"name": "safeMint",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "from",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "safeTransferFrom",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "from",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "_data",
							"type": "bytes"
						}
					],
					"name": "safeTransferFrom",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "operator",
							"type": "address"
						},
						{
							"internalType": "bool",
							"name": "approved",
							"type": "bool"
						}
					],
					"name": "setApprovalForAll",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": true,
							"internalType": "address",
							"name": "from",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"indexed": true,
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "Transfer",
					"type": "event"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "from",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "transferFrom",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "newOwner",
							"type": "address"
						}
					],
					"name": "transferOwnership",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "unpause",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"internalType": "address",
							"name": "account",
							"type": "address"
						}
					],
					"name": "Unpaused",
					"type": "event"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						}
					],
					"name": "balanceOf",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "getApproved",
					"outputs": [
						{
							"internalType": "address",
							"name": "",
							"type": "address"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "operator",
							"type": "address"
						}
					],
					"name": "isApprovedForAll",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "name",
					"outputs": [
						{
							"internalType": "string",
							"name": "",
							"type": "string"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "owner",
					"outputs": [
						{
							"internalType": "address",
							"name": "",
							"type": "address"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "ownerOf",
					"outputs": [
						{
							"internalType": "address",
							"name": "",
							"type": "address"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "paused",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "bytes4",
							"name": "interfaceId",
							"type": "bytes4"
						}
					],
					"name": "supportsInterface",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "symbol",
					"outputs": [
						{
							"internalType": "string",
							"name": "",
							"type": "string"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "tokenURI",
					"outputs": [
						{
							"internalType": "string",
							"name": "",
							"type": "string"
						}
					],
					"stateMutability": "view",
					"type": "function"
				}
			] 
		},
		{
			name: 'PasarToken',
			erc: '',
			address: '0x118c95c765e34a7A5eC4fcBfCb01c5abDC392325',
			contract: null,
			abi: [
				"constructor()",
				"event Approval(address indexed,address indexed,uint256)",
				"event DelegateChanged(address indexed,address indexed,address indexed)",
				"event DelegateVotesChanged(address indexed,uint256,uint256)",
				"event OwnershipTransferred(address indexed,address indexed)",
				"event Paused(address)",
				"event Transfer(address indexed,address indexed,uint256)",
				"event Unpaused(address)",
				"function DOMAIN_SEPARATOR() view returns (bytes32)",
				"function allowance(address,address) view returns (uint256)",
				"function approve(address,uint256) returns (bool)",
				"function balanceOf(address) view returns (uint256)",
				"function burn(uint256)",
				"function burnFrom(address,uint256)",
				"function checkpoints(address,uint32) view returns (tuple(uint32,uint224))",
				"function decimals() view returns (uint8)",
				"function decreaseAllowance(address,uint256) returns (bool)",
				"function delegate(address)",
				"function delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
				"function delegates(address) view returns (address)",
				"function flashFee(address,uint256) view returns (uint256)",
				"function flashLoan(address,address,uint256,bytes) returns (bool)",
				"function getPastTotalSupply(uint256) view returns (uint256)",
				"function getPastVotes(address,uint256) view returns (uint256)",
				"function getVotes(address) view returns (uint256)",
				"function increaseAllowance(address,uint256) returns (bool)",
				"function maxFlashLoan(address) view returns (uint256)",
				"function mint(address,uint256)",
				"function name() view returns (string)",
				"function nonces(address) view returns (uint256)",
				"function numCheckpoints(address) view returns (uint32)",
				"function owner() view returns (address)",
				"function pause()",
				"function paused() view returns (bool)",
				"function permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
				"function renounceOwnership()",
				"function symbol() view returns (string)",
				"function totalSupply() view returns (uint256)",
				"function transfer(address,uint256) returns (bool)",
				"function transferFrom(address,address,uint256) returns (bool)",
				"function transferOwnership(address)",
				"function unpause()"
			]
		},
		{
			name: 'PasarGovernor',
			erc: '',
			address: '0xAb06b46b298c917b5BdA21535294E99952028Aa2',
			contract: null,
			abi: [
			  "constructor(address)",
			  "event ProposalCanceled(uint256)",
			  "event ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
			  "event ProposalExecuted(uint256)",
			  "event ProposalThresholdSet(uint256,uint256)",
			  "event QuorumNumeratorUpdated(uint256,uint256)",
			  "event VoteCast(address indexed,uint256,uint8,uint256,string)",
			  "event VotingDelaySet(uint256,uint256)",
			  "event VotingPeriodSet(uint256,uint256)",
			  "function BALLOT_TYPEHASH() view returns (bytes32)",
			  "function COUNTING_MODE() pure returns (string)",
			  "function castVote(uint256,uint8) returns (uint256)",
			  "function castVoteBySig(uint256,uint8,uint8,bytes32,bytes32) returns (uint256)",
			  "function castVoteWithReason(uint256,uint8,string) returns (uint256)",
			  "function execute(address[],uint256[],bytes[],bytes32) payable returns (uint256)",
			  "function getVotes(address,uint256) view returns (uint256)",
			  "function hasVoted(uint256,address) view returns (bool)",
			  "function hashProposal(address[],uint256[],bytes[],bytes32) pure returns (uint256)",
			  "function name() view returns (string)",
			  "function proposalDeadline(uint256) view returns (uint256)",
			  "function proposalSnapshot(uint256) view returns (uint256)",
			  "function proposalThreshold() view returns (uint256)",
			  "function proposalVotes(uint256) view returns (uint256, uint256, uint256)",
			  "function propose(address[],uint256[],bytes[],string) returns (uint256)",
			  "function quorum(uint256) view returns (uint256)",
			  "function quorumDenominator() view returns (uint256)",
			  "function quorumNumerator() view returns (uint256)",
			  "function relay(address,uint256,bytes)",
			  "function setProposalThreshold(uint256)",
			  "function setVotingDelay(uint256)",
			  "function setVotingPeriod(uint256)",
			  "function state(uint256) view returns (uint8)",
			  "function supportsInterface(bytes4) view returns (bool)",
			  "function token() view returns (address)",
			  "function updateQuorumNumerator(uint256)",
			  "function version() view returns (string)",
			  "function votingDelay() view returns (uint256)",
			  "function votingPeriod() view returns (uint256)"
			]
		},
		{
			name: 'Market721',
			erc: '',
			address: '0xa8552297BcC14F5253E5fCF7E841c39c7B137A5f',
			contract: null,
			abi: [
			  "constructor()",
			  "event RoleAdminChanged(bytes32 indexed,bytes32 indexed,bytes32 indexed)",
			  "event RoleGranted(bytes32 indexed,address indexed,address indexed)",
			  "event RoleRevoked(bytes32 indexed,address indexed,address indexed)",
			  "event SaleCreated(address,uint256,uint256,address)",
			  "event SaleFinalised(address,uint256,uint256,address,address)",
			  "event SaleForcedStop(address,uint256,uint256,address)",
			  "event SaleStopped(address,uint256,uint256,address)",
			  "function DEFAULT_ADMIN_ROLE() view returns (bytes32)",
			  "function MINTER_ROLE() view returns (bytes32)",
			  // sale id, &value=
			  "function buy721(uint256) payable",
			  "function dao() view returns (address)",
			  "function forceSelling721(uint256)",
			  "function getRoleAdmin(bytes32) view returns (bytes32)",
			  "function getSale721(uint256) view returns (address, uint256, uint256, address, address)",
			  "function grantRole(bytes32,address)",
			  "function hasRole(bytes32,address) view returns (bool)",
			  "function minimumPrice() view returns (uint256)",
			  "function rate() view returns (uint256)",
			  "function renounceRole(bytes32,address)",
			  "function revokeRole(bytes32,address)",
			  "function saleCompleted() view returns (uint256)",
			  "function saleIdCounter() view returns (uint256)",
			  "function sales(uint256) view returns (address, uint256, uint256, address, address)",
			  // contract address, tokenid, price
			  "function sell721(address,uint256,uint256) payable",
			  "function stopSelling721(uint256) payable",
			  "function supportsInterface(bytes4) view returns (bool)",
			  "function totalCommissions() view returns (uint256)",
			  "function updateDao(address)",
			  "function updateMinimumPrice(uint256)",
			  "function updateRate(uint256)"
			]
		},
		{
			name: 'MinterFactory721',
			erc: '',
			address: '0xf23092F88425AC7a6c8B39bae755EbCFc22D548d',
			contract: null,
			abi: [
			  "constructor()",
			  "event Approval(address indexed,address indexed,uint256 indexed)",
			  "event ApprovalForAll(address indexed,address indexed,bool)",
			  // 
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
		},


		
	]
}

let getters = {
	abi: state => address => _find( state.contracts, {address} ),
	provider: state => state.provider,
	signer: state => state.signer,
	contracts: state => state.contracts,
	contract: state => address => _find(state.contracts, {address}),
	contractByName: state => name => _find(state.contracts, {name}),
	userAddress: state => state.userAddress
}

let mutations = {
	setProvider(state, provider){		
		state.provider = provider
	},
	setSigner(state, signer){
		state.signer = signer
	},
	setContract(state, {address, contract}){
		
		_find( state.contracts, {address}).contract = contract
	},
	setUserAddress(state, address){
		state.userAddress = address
	}
}

let actions = {
	setProvider({commit}, provider){		
		commit('setProvider', provider);
	},
	setSigner({commit}, signer){
		commit('setSigner', signer)
	},
	setContract({commit}, contractData){
		commit('setContract', contractData)
	},
	setUserAddress({commit}, address){
		commit('setUserAddress', address)
	}
}

export const contract = {
	state,
	getters,
	mutations,
	actions,
	namespaced: true
}