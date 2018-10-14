import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const usersRef = db.ref('/users')
const captures = db.ref('/captures')
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
      captures: state => {
        return state.captures.reverse()
      }
    },
    mutations: {
      SetCredential(state, { user }) {
        state.user = user
      },
      SaveCapture(state, { capture }) {
        state.captures.push(capture)
      },
      ...firebaseMutations
    },
    actions: {
      async SET_CREDENTIAL({ commit }, { user }) {
        if (!user) return
        await usersRef
          .child(user.email.replace('@', '_at_').replace(/\./g, '_dot_'))
          .set({
            name: user.displayName,
            email: user.email,
            icon: user.photoURL
          })
        commit('setCredential', { user })
      },
      async INIT_SINGLE({ commit }, { id }) {
        const snapshot = await capturesRef.child(id).once('value')
        commit('saveCapture', { capture: snapshot.val() })
      },
      INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      INIT_CAPTURES: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('captures', capturesRef)
      }),
      ADD_CAPTURE: firebaseAction((ctx, { email, body }) => {
        capturesRef.push({
          from: email,
          body
        })
      }),
      callAuth() {
        firebase.auth().signInWithRedirect(provider)
      }
    }
  })

export default store
