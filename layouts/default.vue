<template>
  <div>
    <nav class="orange darken-2">
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-if="!this.$store.state.user"><a @click="login">login</a></li>
          <li v-if="this.$store.state.user">{{this.$store.state.user.displayName}}</li>
          <li v-if="this.$store.state.user"><a @click="logout">logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="container center-align">
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
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>


