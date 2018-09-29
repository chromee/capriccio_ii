<template>
  <div @click="twitterLogin">twitterでログイン</div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  name: "home",
  methods: {
    twitterLogin: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    }
  }
};
</script>
