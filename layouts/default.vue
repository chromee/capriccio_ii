<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a class="modal-trigger" href="#upload-modal">upload</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><i class="fab fa-twitter"></i></li>
          <li v-if="!user"><a @click="login">login<i class="material-icons">add</i></a></li>
          <li v-if="user"><a @click="logout">{{user.displayName}}　logout</a></li>
        </ul>
      </div>
    </nav>
    
    <div id="upload-modal" class="modal">
      <div class="modal-content">
        <h3>New Capture</h3>
        <form action="#">
          
          <div class="input-field">
            <div class="chips"></div>
          </div>

          <div class="input-field">
            <textarea id="comment" class="materialize-textarea"></textarea>
            <label for="comment">comment</label>
          </div>

          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
import { mapState } from "vuex";

export default {
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    },
    logout: function() {
      firebase.auth().signOut();
    }
  },
  async asyncData({ params, store }) {
    return {
      name: "Hello, World！！",
      isLogin: false,
      userData: null
    };
  },
  fetch({ store, params }) {},
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.$store.state.user = user;
      } else {
        this.$store.state.user = null;
      }
    });

    var user = this.$store.state.user;

    $(document).ready(function() {
      $(".modal").modal();
    });

    $(".chips").chips({
      placeholder: "add tag",
      secondaryPlaceholder: "+Tag"
    });
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style>
.chips {
  height: 44.5px;
  margin: 0;
}
</style>


