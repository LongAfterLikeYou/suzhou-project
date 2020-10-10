import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/a.vue'
import B from '@/components/b.vue'
import NotPage from '@/components/404.vue'
import Home from '@/components/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '*',
      component: NotPage
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/404',
      name: '404',
      component: NotPage
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/a',
          name: 'a',
          component: A
        },
        {
          path: '/b',
          name: 'b',
          component: B
        }
      ]
    }
  ]
})
