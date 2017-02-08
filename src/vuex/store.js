import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import form from './modules/form'
import fields from './modules/fields'

Vue.use(Vuex)

const defaultState = {
  topics: [],
  templates: [],
  count: 0
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
  TOPICS_LIST: (state, topics) => {
    state.topics = topics
  },
  
  TEMPLATE_LIST: (state, templates) => {
    state.templates = templates
  },

  INCREMENT: (state) => {
    state.count++
  },

  DECREMENT: (state) => {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    form,
    fields
  }
})
