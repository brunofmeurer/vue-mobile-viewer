<template>
    <div class="hello">
      <div class="android-preview" v-show="device === 'android'">
        <iframe id="main" :src="url"
          frameborder="0"></iframe>
      </div>
      <div class="apple-preview" v-show="device === 'apple'">
        <iframe id="main" :src="url"
          frameborder="0"></iframe>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    device: {
      type: String,
      default: 'android'
    },
    url: {
      type: String,
      default: 'https://union.co/'
    }
  },
  components: {
  },
  name: 'Viewer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  z-index: -2;
}
.android-preview iframe {
  margin-top: 63px;
  height: 597px;
  width: 357px;
}
.apple-preview iframe {
  margin-top: 75px;
  height: 590px;
  width: 335px;
}
.android-preview {
  background-position: center center !important;
}
.android-preview, .apple-preview {
  z-index: 1;
  width: 467px;
  height: 800px;
  background: url('../../assets/devices-sprite.png') center top no-repeat;
  background-size: 467px;
  margin: 5px auto 0;
}
</style>
