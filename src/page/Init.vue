<template>
  <div>
    <h1>Device component show case</h1>
    <div>
      <input id="android" type="radio" v-model="picked" value="android"/>
      <label for="android">Android</label>
      <input id="apple" type="radio" v-model="picked" value="apple"/>
      <label for="apple">IOS</label>
    </div>
    <div class="field">
      <input type="text" v-model="url">
    </div>
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
  }
}
</script>

<style>
.field input{
  margin: 20px 0px;
  width: 500px;
}
</style>
