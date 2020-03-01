import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Gen from '@/views/gen/gen'


Vue.use(Router)

let children = [
  {
    path: '/gen/gen/list',
    name: 'genList',
    component: Gen
  },
];

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/gen/gen/list',
      children: children,
    }
  ]
})
