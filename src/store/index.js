import { createStore } from 'vuex'
import { collections } from './nft/collections'
import { collectionDetails } from './nft/collection-details'

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
        'collection-details': collectionDetails
    },
    namespaced: true
})
