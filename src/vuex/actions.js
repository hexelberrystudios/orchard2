import request from 'axios'

request.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

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
            // look through the DB for all the templates
            hoodie.store.findAll()
              .then((docs) => {
                return docs.filter(doc => doc.templateName) // filter out docs that have no templateName field
              })
              .then((templateDocs) => {
                console.log('done loading templates')
                // update the store with the list of available templates
                commit('TEMPLATE_LIST', templateDocs)
                resolve(templateDocs)
              })
              .catch((error) => {
                console.log(error)
                reject(error)
              })
          })
        } else {
          console.log('hoodie not loaded')
        }
      }, 20)
    })
    
    return waitForHoodieToLoad
  } else {
    // just return an empty object until we have something to show for this
    return {}
  }
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
