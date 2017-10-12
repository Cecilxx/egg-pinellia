import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Picture from './Picture'
import NotFound from './NotFound'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Picture',
      path: '/pic',
      component: Picture
    },
    {
      name: '404',
      path: '*',
      component: NotFound
    }
  ]
})
