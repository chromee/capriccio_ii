export const state = () => ({
  user: null
})

export const mutations = {
  addUser(state, user) {
    state.user = user
  }
}

export const actions = {
  addUser({
    commit
  }, {
    user
  }) {
    commit("addUser", user)
  }
}
