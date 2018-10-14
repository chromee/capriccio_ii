<template lang="html">
  <li class="media">
    <figure>
      <img :src="capture.picture_url">
    </figure>
  </li>
</template>

<script>
export default {
  props: {
    capture: Object
  }
};
</script>