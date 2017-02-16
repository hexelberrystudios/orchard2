import utils from '../utils.js'

const itemModule = {
  // namespace this module so that it doesn't collide with other store behavior
  namespaced: true, // -> getters['items/*']
  // default values
  state: { items: [{}], activeItem: {} },
  getters: {
    getItems: state => state.items,
    getActiveItem: state => state.activeItem
  },
  // directly update the store
  mutations: {
    // set item list
    ITEM_LIST: (state, items) => {
      state.items = items
    },
    // set current item
    ACTIVE_ITEM: (state, item) => {
      console.log(item)
      state.activeItem = item
    }
  },
  // update the store event handler
  actions: {
    getItems: ({ commit, state }) => {
      const findAllItems = function (resolve, reject) {
        // look through the DB for all the items
        hoodie.store.findAll()
          .then((docs) => {
            return docs.filter(doc => doc.isItem) // only include docs where isItem is true
          })
          .then((itemDocs) => {
            console.log('done loading items')
            console.log(itemDocs)
            // update the store with the list of available items
            commit('ITEM_LIST', itemDocs)
            resolve(itemDocs)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      }
              
      return utils.runHoodieFn(commit, state, findAllItems)
    },
    /* @TODO: getItem */
    setItem: ({ commit, state }, item) => {
      commit('ACTIVE_ITEM', item)
    }
  }
}

export default itemModule
