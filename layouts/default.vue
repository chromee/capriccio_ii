<template>
  <div>
    <nav class="orange darken-2">
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a @click="login">login</a></li>
          <!-- <li v-if="isLogin"><a @click="logout">{{ userData.displayName }} logout</a></li> -->
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
      isLogin: false,
      userData: null
    };
  },
  fetch() {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
    });
  }
};
</script>


