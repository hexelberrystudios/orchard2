import utils from '../utils.js'

const templateModule = {
  // namespace this module so that it doesn't collide with other store behavior
  namespaced: true, // -> getters['fields/*']
  // default values
  // fields are represented as an array of empty objects since the data gets managed in the
  // form store, but we need to keep track of an ordered list of objects we can remove in the future
  state: { templates: [{}], activeTemplate: {} },
  getters: {
    getTemplates: state => state.templates,
    getActiveTemplate: state => state.activeTemplate
  },
  // directly update the store
  mutations: {
    // set template list
    TEMPLATE_LIST: (state, templates) => {
      state.templates = templates
    },
    // set current template
    ACTIVE_TEMPLATE: (state, template) => {
      console.log(template)
      state.activeTemplate = template
    }
  },
  // update the store event handler
  actions: {
    getTemplates: ({ commit, state }) => {
      const findAllTemplates = function (resolve, reject) {
        // look through the DB for all the templates
        hoodie.store.findAll()
          .then((docs) => {
            return docs.filter(doc => doc.templateName) // filter out docs that have no templateName field
          })
          .then((templateDocs) => {
            console.log('done loading templates')
            console.log(templateDocs)
            // update the store with the list of available templates
            commit('TEMPLATE_LIST', templateDocs)
            resolve(templateDocs)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      }
              
      return utils.runHoodieFn(commit, state, findAllTemplates)
    },
    /*
    getTemplate: ({ commit, state }, templateId) => {
      const findTemplate = function (resolve, reject) {
        console.log('Template ID: ' + templateId)
        // look through the DB for all the templates
        hoodie.store.find(templateId)
          .then((templateDoc) => {
            console.log('done loading template')
            // update the store with the list of available templates
            commit('ACTIVE_TEMPLATE', templateDoc)
            resolve(templateDoc)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      }
          
      return utils.runHoodieFn(commit, state, findTemplate)
    },
    */
    setTemplate: ({ commit, state }, template) => {
      commit('ACTIVE_TEMPLATE', template)
    }
  }
}

export default templateModule
