<template>
  <div class="row">
    <div class="col s8 offset-s2 xl6 offset-xl3">
      <h3>New Capture</h3>
      <div style="margin-top: 30px">
        <upload-form/>
      </div>
    </div>
  </div>
</template>

<script>
import UploadForm from "~/components/UploadForm.vue";

export default {
  components: {
    UploadForm
  }
};
</script>
