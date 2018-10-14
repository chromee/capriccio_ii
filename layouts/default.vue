<template>
  <div>
    <app-header/>

    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  },
  methods: {},
  fetch({ store, params }) {},
  mounted: function() {},
  computed: {}
}
</script>
