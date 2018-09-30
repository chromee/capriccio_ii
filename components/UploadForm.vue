<template>
  <form action="#" method="post">
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
      <div class="preview-field center-align">
        <div class="card blue-grey lighten-1">
          <div class="card-content white-text">
            <div class="center-align">image field</div>
          </div>
        </div>
      </div>
    </div>

    <div class="input-field">
      <div class="chips"></div>
    </div>

    <div class="input-field">
      <textarea id="comment" class="materialize-textarea"></textarea>
      <label for="comment">comment</label>
    </div>

    <div class="center-align">
      <!-- <input type="submit" value="upload" class="waves-effect waves-light btn-large" @click="upload"> -->
      <a class="waves-effect waves-light btn-large" @click="upload"><i class="material-icons left">cloud_upload</i>upload</a>
    </div>
  </form>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  methods: {
    upload: function() {
      console.error(this.uploadFile);
    }
  },
  asyncData(context) {
    return { uploadFile: null };
  },
  mounted: function() {
    $(".chips").chips({
      placeholder: "add tag",
      secondaryPlaceholder: "+Tag"
    });

    $("form").on("change", 'input[type="file"]', function(e) {
      let file = e.target.files[0];
      this.uploadFile = file;
      if (file.type.indexOf("image") < 0) return false;

      console.error(file);

      let reader = new FileReader();
      reader.onload = (function(file) {
        return e => {
          let previewImg = $(".preview-field");
          previewImg.empty();
          previewImg.append(
            $("<img>").attr({
              src: e.target.result,
              height: "300px",
              // width: "100%",
              title: file.name
            })
          );
        };
      })(file);
      reader.readAsDataURL(file);
    });
  }
};
</script>
