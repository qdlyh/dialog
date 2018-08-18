import Vue from 'vue'
import Router from 'vue-router'
import tips from '@/components/tips'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tips',
      component: tips
    }
  ]
})
