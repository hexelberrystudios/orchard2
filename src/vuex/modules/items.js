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
            console.log(docs)
            return docs.filter(doc => doc.isItem) // only include docs where isItem is true
          })
          .then((itemDocs) => {
            console.log('ITEMS FOUND:')
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
    getItem: ({ commit, state }, id) => {
      const findItem = function (resolve, reject) {
        // look through the DB for all the items
        hoodie.store.find(id)
          .then((itemDoc) => {
            // update the store with the list of available items
            commit('ACTIVE_ITEM', itemDoc)
            resolve(itemDoc)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      }
      
      return utils.runHoodieFn(commit, state, findItem)
    },
    getToDoItems: ({ commit, state }) => {
      const findAllToDoItems = function (resolve, reject) {
        // look through the DB for all the items
        hoodie.store.findAll()
          .then((docs) => {
            console.log(docs)
            return docs.filter(function (doc) {
              const completableFields = doc.fields.filter(function (field) {
                return field.fieldType === 'CompletableField'
              })
              
              return doc.isItem && completableFields.length
            }) // only include docs where isItem is true
          })
          .then((itemDocs) => {
            console.log('TO DO ITEMS FOUND:')
            console.log(itemDocs)
            
            // @TODO: Refactor into configurable system
            // Sort items date desc
            
            // update the store with the list of available items
            commit('ITEM_LIST', itemDocs)
            resolve(itemDocs)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      }
              
      return utils.runHoodieFn(commit, state, findAllToDoItems)
    },
    setItem: ({ commit, state }, item) => {
      commit('ACTIVE_ITEM', item)
    }
  }
}

export default itemModule
