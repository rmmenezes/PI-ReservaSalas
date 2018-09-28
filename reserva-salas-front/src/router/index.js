import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import RegisterResources from '@/components/RegisterResources'
import RegisterUsers from '@/components/RegisterUsers'
import Calendar from '@/components/Calendar'
import ReserveResources from '@/components/ReserveResources'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: Dashboard,
      children: [
        {
          path: 'register_resources',
          name: 'RegisterResources',
          component: RegisterResources
        },
        {
          path: 'reserve_resources',
          name: 'ReserveResources',
          component: ReserveResources
        },
        {
          path: 'register_users',
          name: 'RegisterUsers',
          component: RegisterUsers
        },
        {
          path: 'calendar',
          name: 'Calendario',
          component: Calendar
        }
      ]
    }
  ]
})
