<template>
  <form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
      <div class="preview">
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
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud_upload</i>upload</a>
    </div>
  </form>
</template>

<script>
export default {
  mounted: function() {
    $(".chips").chips({
      placeholder: "add tag",
      secondaryPlaceholder: "+Tag"
    });

    $(function() {
      $("form").on("change", 'input[type="file"]', function(e) {
        var file = e.target.files[0],
          reader = new FileReader(),
          $preview = $(".preview"),
          t = this;

        if (file.type.indexOf("image") < 0) {
          return false;
        }

        reader.onload = (function(file) {
          return function(e) {
            $preview.empty();
            $preview.append(
              $("<img>").attr({
                src: e.target.result,
                // height: "300px",
                width: "100%",
                class: "preview",
                title: file.name
              })
            );
          };
        })(file);

        reader.readAsDataURL(file);
      });
    });
  }
};
</script>
