<template>
  <div>
    <viewer :device="picked" :url="url"/>
  </div>
</template>
<script>
import Viewer from '@/components/viewer/Viewer'
export default {
  components: {
    Viewer
  },
  data () {
    return {
      picked: 'android',
      url: 'https://union.co/'
    }
  },
  created () {
    this.url = this.$route.query.url
    this.picked = this.$route.query.type
  }
}
</script>

<style>
.field input{
  margin: 20px 0px;
  width: 500px;
}
</style>
