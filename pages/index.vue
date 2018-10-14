<template>
  <div style="margin-top: 30px;">
    <div class="row">
      <div class="input-field col s3">
        <select>
          <option value="1">comment</option>
          <option value="2">tag</option>
        </select>
      </div>
      <div class="input-field col s9">
        <i class="material-icons prefix">search</i>
        <input id="search" type="text" class="validate">
        <label for="search">search</label>
      </div>
    </div>
    <div>
      <Captures />
    </div>
  </div>
</template>

<script>
import Captures from '~/components/Captures.vue'
import { mapGetters } from 'vuex'

export default {
  mounted: function() {
    $(document).ready(function() {
      $('select').formSelect()
    })
  },
  computed: {
    ...mapGetters(['user', 'captures'])
  }
}
</script>
