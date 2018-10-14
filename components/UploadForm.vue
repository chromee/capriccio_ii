<template>
  <form v-on:submit.prevent="UploadCapture" name="form">
    
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file" name="picture" accept=".jpg, .jpeg, .png .gif">
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

    <div class="input-field" id="tags" name="tags">
      <div class="chips"></div>
    </div>

    <div class="input-field">
      <textarea class="materialize-textarea" name="comment"></textarea>
      <label for="comment">comment</label>
    </div>

    <div class="center-align">
      <button class="waves-effect waves-light btn-large" type="submit">
        <i class="material-icons left">cloud_upload</i>upload
      </button>
    </div>

  </form>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  methods: {
    UploadCapture: function(e) {
      let tags = $('.chips')[0].M_Chips.chipsData.map(x => x.tag)
      let comment = document.form.comment.value
      let picture = document.form.picture.files[0]
    }
  },
  mounted: function() {
    $('.chips').chips({
      placeholder: 'add tag',
      secondaryPlaceholder: '+Tag'
    })

    $('form').on('change', 'input[type="file"]', function(e) {
      let file = e.target.files[0]
      this.uploadFile = file
      if (file.type.indexOf('image') < 0) return false

      // console.error(file)

      let reader = new FileReader()
      reader.onload = (function(file) {
        return e => {
          let previewImg = $('.preview-field')
          previewImg.empty()
          previewImg.append(
            $('<img>').attr({
              src: e.target.result,
              height: '300px',
              // width: "100%",
              title: file.name
            })
          )
        }
      })(file)
      reader.readAsDataURL(file)
    })
  }
}
</script>
