import { createStore } from 'vuex'
import { collections } from './nft/collections'
import { collectionDetails } from './nft/collection-details'
import { contract } from './nft/contract'
import { auth } from './auth'

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        'collections': collections,
        'collection-details': collectionDetails,
        'contract': contract,
        auth
    },
    namespaced: true
})
