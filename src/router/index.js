import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/',//默认list
        name: 'About',
        component: () => import('../views/Goods.vue')
      },
      {
        path: '/Evaluate',//评价
        name: 'About',
        component: () => import('../views/Evaluate.vue')
      },
      {
        path: '/Business',//商家
        name: 'About',
        component: () => import('../views/Business.vue')
      }
      ]
    }
    // {
    //   path: '/app',
    //   name: 'About',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
})

export default router
