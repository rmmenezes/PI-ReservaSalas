import Vue from 'vue'
import App from './App'
import FullCalendar from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar-scheduler/dist/scheduler.min.css'
import router from './router'
import moment from 'moment'

Vue.use(FullCalendar, router, moment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
