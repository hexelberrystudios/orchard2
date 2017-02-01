const fieldListModule = {
  // namespace this module so that it doesn't collide with other store behavior
  namespaced: true, // -> getters['fields/*']
  // default values
  // fields are represented as an array of empty objects since the data gets managed in the
  // form store, but we need to keep track of an ordered list of objects we can remove in the future
  state: { fields: [{}] },
  // directly update the store
  mutations: {
    // add field to list
    ADD_FIELD: (state, field) => {
      state.fields.push(field);
    },
    UPDATE_FIELD: (state, field) => {
      state.fields[state.fields.indexOf(field)] = field;
    },
    // remove field from list
    REMOVE_FIELD: (state, field) => {
      // @NOTE: May not work with update field
      state.fields = state.fields.splice(state.fields.indexOf(field), 1);
    }
  },
  // update the store event handler
  actions: {
    addField ({ commit }, field) { commit('ADD_FIELD', field) },
    updateField ({ commit }, field) { commit('UPDATE_FIELD', field) },
    removeField ({ commit }) { commit('REMOVE_FIELD') }
  }
}

export default fieldListModule
