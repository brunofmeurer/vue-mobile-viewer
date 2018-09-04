import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/page/Init'
import Device from '@/page/Device'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: Init
    },
    {
      path: '/device',
      name: 'Device',
      component: Device
    }
  ]
})
