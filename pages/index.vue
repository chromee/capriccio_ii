<template>
  <div style="margin-top: 30px;">
    <div class="row">
      <div class="input-field col s3">
        <select>
          <option value="" disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>
      <div class="input-field col s9">
        <input id="search" type="search" required>
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    $(document).ready(function() {
      $("select").formSelect();
    });
  }
};
</script>

