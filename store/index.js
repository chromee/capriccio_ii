import Vuex from "vuex"

const store = () => new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user: (state) => state.user
  },
  mutations: {
    saveUser(state, {
      user
    }) {
      state.user = user
    }
  },
  actions: {
    async getUser({
      commit
    }, {
      user
    }) {
      try {
        commit("saveUser", {
          user
        })
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
})

export default store
