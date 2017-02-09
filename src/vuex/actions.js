import request from 'axios'

request.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

/*
 * Either wait for hoodie to load (if you're on the client),
 * or call hoodie directly somehow (if you're on the server) (@TODO),
 * then call the given function to process data.
 */
const runHoodieFn = (commit, state, fn) => {
  if (typeof window !== 'undefined') {
    // @TODO understand why the hoodie constant is not available here server side
    // @TODO remove, just understanding that hoodie needs time to initialize
    if (typeof hoodie === 'undefined') {
      console.log('hoodie is not defined yet')
    }
    
    let waitForHoodieToLoad = new Promise(function (resolve, reject) {
      let intervalId
      
      console.log('waiting for hoodie to load')
      
      intervalId = setInterval(function () {
        if (typeof hoodie !== 'undefined') {
          console.log('hoodie loaded!')
          
          clearInterval(intervalId);
          hoodie.ready.then(function () {
            fn(resolve, reject)
          })
        } else {
          console.log('hoodie not loaded')
        }
      }, 20)
    })
    
    return waitForHoodieToLoad
  } else {
    // @TODO: just return an empty object until we have something to show for this
    return {}
  }
}

export const getTopics = ({ commit, state }) => {
  return request.get('posts').then((response) => {
    if (response.statusText === 'OK') {
      commit('TOPICS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const getTemplates = ({ commit, state }) => {
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
          
  return runHoodieFn(commit, state, findAllTemplates)
}

export const getTemplate = ({ commit, state, templateId }) => {
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
          
  return runHoodieFn(commit, state, findTemplate)
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
