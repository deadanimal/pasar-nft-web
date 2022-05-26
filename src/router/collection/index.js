const MyCollectionsView = () => import('@/views/collection/MyCollections.vue')
const MyCollectionView = () => import('@/views/collection/MyCollection.vue') 

export default [

	{
		path: '/collection/my-collections',
		name: 'collection.my-collections',
		component: MyCollectionsView,
		meta:{
			requiresAuth: true
		},

	},
	{
		path: '/collection/my-collection/:contractId',
		name: 'collection.my-collection',
		component: MyCollectionView,
		props:true,
		meta:{
			requiresAuth: true
		},

	}

]