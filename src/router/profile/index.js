const MyCollectionView = () => import('@/views/profile/MyCollection.vue') 

export default [

	{
		path: '/profile/my-collection',
		name: 'profile.my-collection',
		component: MyCollectionView,
		meta:{
			requiresAuth: true
		}
	}

]