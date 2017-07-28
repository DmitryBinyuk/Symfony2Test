import Vue from 'vue'
import Router from 'vue-router'
import DepositStation from '@/components/DepositStation'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DepositStation',
      component: DepositStation
    }
  ]
})
