const CreateNftView = () => import('@/views/collection-items/CreateNft.vue');

export default [
	{
		path: '//collection/:contractId/collection-items/create-nft',
		name: 'collection-items.create-nft',
		component: CreateNftView,
		meta:{
			requiresAuth: true
		},

	},
]