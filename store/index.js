import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'

// const db = firebase.firestore()
// const usersRef = db.collection('users')
// const captures = db.collection('captures')
const provider = new firebase.auth.TwitterAuthProvider()

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      user: null,
      captures: []
    },
    getters: {
      user: state => state.user,
      captures: state => state.captures.reverse()
    },
    mutations: {
      setUser(state, { user }) {
        state.user = user
      },
      saveCapture(state, { capture }) {
        state.captures.push(capture)
      },
      ...firebaseMutations
    },
    actions: {
      async SET_USER({ commit }, { user }) {
        if (!user) return
        commit('setUser', { user })
      },
      login() {
        firebase.auth().signInWithRedirect(provider)
      },
      logout({ commit }) {
        firebase.auth().signOut()
        commit('setUser', {})
      }
    }
  })

export default store
