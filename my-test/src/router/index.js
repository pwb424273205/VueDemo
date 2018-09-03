
import Vue from 'vue'
import Router from 'vue-router'
import DetailPage from '../components/DetailPage'
import HelloWorld from '../components/HelloWorld'
import LastPage from '../components/LastPage'
Vue.use(Router)
/* eslint-disable */ 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: { 
        title: "极速贷",
      },
      component: HelloWorld
    },
    {
      path: '/DetailPage',
      name: 'DetailPage',
      meta: { 
        title: "完善资料",
      },
      component: DetailPage
    },
    {
      path: '/LastPage',
      name: 'LastPage',
      meta: { 
        title: "联系人",
      },
      component: LastPage
    },
  ]
})

