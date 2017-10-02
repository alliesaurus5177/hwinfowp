import Vue from 'vue'
import Router from 'vue-router'
import AppComponent from '@/components/App/App' //@ = alias for /src 
import Hello from '@/components/Hello/Hello' //@ = alias for /src 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  ]
})
