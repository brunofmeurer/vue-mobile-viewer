import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/page/Init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: Init
    }
  ]
})
