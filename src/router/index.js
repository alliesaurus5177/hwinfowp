import Vue from 'vue'
import Router from 'vue-router'
import AppComponent from '@/components/App/App' //@ = alias for /src 
import MainWrapper from '@/components/MainWrapper/MainWrapper' //@ = alias for /src 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainWrapper',
      component: MainWrapper
    },
  ]
})
