<template lang="html">
  <div class="timeline">
    <ul class="captures">
      <transition-group name="capture">
        <Capture class="capture" :capture="capture" :key="capture['.key']" v-for="capture in captures" v-if="capture.user" />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import Capture from "~/components/Capture.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Capture
  },
  computed: {
    ...mapGetters(["user", "captures"])
  }
};
</script>