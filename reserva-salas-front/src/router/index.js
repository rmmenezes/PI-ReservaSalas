import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import RegisterResources from '@/components/RegisterResources'
import RegisterUsers from '@/components/RegisterUsers'
import Calendar from '@/components/Calendar'
import ReserveResources from '@/components/ReserveResources'
import SearchUsers from '@/components/SearchUsers'
import SearchResources from '@/components/SearchResources'
import ReserveRoom from '@/components/ReserveRoom'

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
          path: 'search_users',
          name: 'SearchUsers',
          component: SearchUsers
        },
        {
          path: 'search_resources',
          name: 'SearchResources',
          component: SearchResources
        },
        {
          path: 'reserve_room',
          name: 'ReserveRoom',
          component: ReserveRoom
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
