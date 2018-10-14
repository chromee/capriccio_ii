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
        <li v-else><a @click="logout">logout</a></li>
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
import auth from '~/plugins/auth'
import UploadForm from '~/components/UploadForm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return { isLoaded: false }
  },
  components: {
    UploadForm
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  },
  async mounted() {
    let user
    if (!this.user) user = await auth()
    await Promise.all([
      this.user
        ? Promise.resolve()
        : this.$store.dispatch('SET_USER', { user: user || null })
      // this.posts.length
      //   ? Promise.resolve()
      //   : this.$store.dispatch('INIT_POSTS'),
      // this.users.length ? Promise.resolve() : this.$store.dispatch('INIT_USERS')
    ])
    this.isLoaded = true

    $(document).ready(function() {
      $('.modal').modal()
    })
  }
}
</script>