import _find from 'lodash/find';
import _lowerCase from 'lodash/lowerCase';

let state = {
	collections: [

		{

			headerImage: "https://lh3.googleusercontent.com/G3XziVSkDZYeQYcZuJ6X1-cc2br5pQwE2TND_bLLMjsF97bzNJ7C1g8YqdrN9NSptnzxTxinRXHgnk6HVNtU0XFxUiEmduZFObL7=h600",
			profileImage: "https://lh3.googleusercontent.com/U2Y1etueFuIlXNdW_iC3-Jd3dMV0kFlF7hxtEbeTLfVdZMpYcR7jHA-d7k9PHBq_rP8KJwS0sRV70BhwtfZ4wIashUQAYE702-A6og=s130",
			name:"TBAC",
			author: "TimpersVault",
			items:[
				{
					title: "Collectors Book",
					imageUrl: "https://lh3.googleusercontent.com/7wcuiGAJp552yhSQzngFVxV3X0GSRa1Qk7NQ94XQz2NJ79TNtl3WceLEbl94ss56Oqc5gLUKaiNt1SqFpgQ6tTGWFo7GLRHH4u0KTA=w335",
					price: 0.1353		
				},
				{
					title: "Rejuven Ape",
					imageUrl: "https://lh3.googleusercontent.com/u-DcA2JOD_yFEeszkJNXHh_D7ApZPHuHYk3LuUUh8WjsqwuHIXLHgkVYwioPxM9Hf-Rax7srIaMuJzYw-JHmY5eqKLxpznKUYYIZXA=w335",
					price: 0.85	
				},
				{
					title: "ApeMegadon",
					imageUrl: "https://lh3.googleusercontent.com/FQPLIeChIKOwQurstPCQj86WhFO9C5QVnbzgq5YDf9IX9FqsXZcgqof2nfRKH24zdL2qPPdtX3Pzd4fAaEZDakRtVm3mcSNfYXCi2Q=w335",
					price: 1	
				},

				
			]

		},

		{

			headerImage: "https://lh3.googleusercontent.com/4NQIRoGmzXeXQN4mjuhWuuDZSNW7_BqRXux5upd4Nn_A-bfsGxCnPF8qn98Y6MyHRDPGXIlgfZADcSOe6M2DyrDKXdbdaTgkZN5l=h600",
			profileImage: "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s130",
			name:"The Sandbox Assets",
			author: "",
			items:[
				{
					title: "Mailbox",
					imageUrl: "https://lh3.googleusercontent.com/7tuRDVDtWffFiRYZMXlUT1z9lnDW39py7-pR9Vbpp0Zn8Vm0WweIDrGkEO9NQFA0cihlWv6BIs74ugb1YAu3Su642YaHWYT6l4s_=w335",
					price: 7.76		
				},
				{
					title: "Table Lamp",
					imageUrl: "https://lh3.googleusercontent.com/1_aued2iqWqtCZ0sAtxIEHEQB0K-qezJHgmj7ppQmxc9N6hJUxPydBnr_pNF5pu6f0dUri2vLNeybKVfl9qisyqOLniVUk6ZioC9rA=w335",
					price: 7.8	
				},
				{
					title: "Coral Tropical Fish",
					imageUrl: "https://lh3.googleusercontent.com/ouWppUZtwAA1LoYObjuZZ_3kXJyS4w4KanRsU6QVHFzJC4MnMkJp0zrAiduHkGLTYwEf7vozo7Bnu5HalUxoLs6QlpnpspKryXY8lg=w335",
					price: 8	
				},

				
			]

		},

		{

			headerImage: "https://lh3.googleusercontent.com/JK630PUQAgu22R_TTlS3wvyIfk3ogrI329qUY36MrueEHrzqYJuWvPBu5ld-gIwX0VeWVbif_NAJ8U3FS3KNHzIvLtRyxbbtQyWruQ=h600",
			profileImage: "https://lh3.googleusercontent.com/--7LUBCbLndUydYh3_oeDZD5MMUIDtXyJD-EHy01qkMbrCTTFl9XMLyLsFfcHa7TeN6wR72R9WEnHgDJHjGTMmUaUlJWWZOa1ZsYLQ=s130",
			name:"Sneaky Vampire Syndicate",
			author: "Superand",
			items:[
				{
					title: "Sneaky Vamoire #6551",
					imageUrl: "https://lh3.googleusercontent.com/g5OrG2HquCWu84ADo8tjy6FI7MG3i88XLMj1Yy9NEHywVvDsUW2kstMMGtReUdNy749-P9jrnRpTA7Q3QyZe87Ap_-vEu6WPTlKIjw=w335",
					price: 0.599		
				},
				{
					title: "Sneaky Vampire #5402",
					imageUrl: "https://lh3.googleusercontent.com/DCdTeDHIXH2NajlRZzsjqbiso9w37NZSYfs3qlhZ2EfPBjd9VQUe7WtbDQjeG9YirbO4BURWapYjBUSKzjs0IMVmlsjjK4ApBVYmmw8=w335",
					price: 0.599	
				},
				{
					title: "Sneaky Vampire #1495",
					imageUrl: "https://lh3.googleusercontent.com/oDDV-38PwrHVH73ApNbx1LXzNxLCFliOm0VAbaJdIaj1vmY_s5XsTMOF_r-FA38qe-3Dj3oa0ZMYpcfYP4b2MwlYD3tVOmRCKwbVQw=w335",
					price: 0.599	
				},

				
			]

		}
	]
}

let getters = {

	getCollectionByName : (state) => name => {

		return _find(state.collections, function(collection){
			return _lowerCase(collection.name) === _lowerCase(name) 
		})

	},

	getItem : (state, getters) => (collectionName, itemTitle) => {
		
		const collection = getters.getCollectionByName(collectionName)

		return _find(collection.items, function(item){
			return _lowerCase(item.title) === _lowerCase(itemTitle) 
		})
	}

}


export const collectionDetails = {
	state,
	getters,
	namespaced:true
}



