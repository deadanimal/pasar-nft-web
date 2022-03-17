let state = {

	collections: [

		{
			id: 1,
			title: "TBAC",
			author: "Timpers Vault",
			imageUrl: "https://lh3.googleusercontent.com/OW9zIvDyQFM25AnEtIoBIu0YeT5-hqcweK0dna3uThLq711x0vwe_LwB0bSQHd1i3QKb7Oj0dYjrD0buJ0760-KuYTMc_KhYTg15=h200",
			profileImageUrl: "https://lh3.googleusercontent.com/U2Y1etueFuIlXNdW_iC3-Jd3dMV0kFlF7hxtEbeTLfVdZMpYcR7jHA-d7k9PHBq_rP8KJwS0sRV70BhwtfZ4wIashUQAYE702-A6og=s100",
			introText: "The Boring Ape Chronicles by Timpers are a collection of monotonous ape adventure stories starring s..."	

		},

		{
			id: 2,
			title: "The Sandbox Assets",
			author: "",
			imageUrl: "https://storage.googleapis.com/opensea-static/featured-images/sandbox-featured.png",
			profileImageUrl: "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s100",
			introText: "The Sandbox is a community-driven platform where creators can monetize voxel assets and gaming exper..."	

		},

		{	id: 3,
			title: "Sneaky Vampire Syndicate",
			author: "Superand",
			imageUrl: "https://lh3.googleusercontent.com/adeDrvksEQYDG5HIqRYaQ76TiCJDRQpCdEwaIms1cKGNeFLaPB4zEMss7SN-N9pX_GdoAg2tO6TZ0dLOnEuWQ_XUbOF77lxuUan2ng=h200",
			profileImageUrl: "https://lh3.googleusercontent.com/--7LUBCbLndUydYh3_oeDZD5MMUIDtXyJD-EHy01qkMbrCTTFl9XMLyLsFfcHa7TeN6wR72R9WEnHgDJHjGTMmUaUlJWWZOa1ZsYLQ=s100",
			introText: "Notice: Please see header for Correct Holder Count (OpenSea is incorrect as Vampires are currently b..."	

		},

	]

}

let getters = {
	collections: (state)=> state.collections
}

export const collections = {
	state,
	getters,
	namespaced: true
}