import Vue from 'vue'
import Router from 'vue-router'
import WebPrevious from '@/components/WebPrevious'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebPrevious',
      component: WebPrevious
    }
  ]
})
