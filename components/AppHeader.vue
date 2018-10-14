<template>
  <nav>
    <div class="nav-wrapper teal lighten-1">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">home</a></li>
        <li><a href="/upload">upload</a></li>
        <!-- <li><a class="modal-trigger" href="#upload-modal">upload</a></li> -->
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><i class="fab fa-twitter"></i></li>
        <li v-if="!user"><a @click="login">login</a></li>
        <li v-if="user"><a @click="logout">logout</a></li>
      </ul>
    </div>
  </nav>
    
  <!-- <div id="upload-modal" class="modal">
    <div class="modal-content row">
      <div class="col s8 offset-s2">
        <h3>New Capture</h3>
        <upload-form/>
      </div>
    </div>
  </div> -->
</template>

<script>
import UploadForm from '~/components/UploadForm.vue'
import firebase from '@/plugins/firebase'
import { mapState } from 'vuex'

export default {
  components: {
    UploadForm
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.TwitterAuthProvider())
    },
    logout: function() {
      firebase.auth().signOut()
    }
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.state.user = user
      } else {
        this.$store.state.user = null
      }
    })

    var user = this.$store.state.user

    $(document).ready(function() {
      $('.modal').modal()
    })
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>