import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/views/home/welcome.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/home.vue'),
      children:[
        {
          path: '/nodeStart',
          name: 'NodeStart',
          component: () => import('@/views/nodeTechnology/nodeStart.vue')
        }
      ]
    }
  ]
})
