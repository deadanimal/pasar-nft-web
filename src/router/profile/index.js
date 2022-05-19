const MyCollectionsView = () => import('@/views/profile/MyCollections.vue')
const MyCollectionView = () => import('@/views/profile/MyCollection.vue') 

export default [

	{
		path: '/profile/my-collections',
		name: 'profile.my-collections',
		component: MyCollectionsView,
		meta:{
			requiresAuth: true
		},

	},
	{
		path: '/profile/my-collection/:contractId',
		name: 'profile.my-collection',
		component: MyCollectionView,
		props:true,
		meta:{
			requiresAuth: true
		},

	}

]