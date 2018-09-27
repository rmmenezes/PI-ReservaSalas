<template>
<div>
  <div id='calendar'></div>
</div>
</template>

<script>
import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar-scheduler'
import 'fullcalendar/dist/locale/pt-br.js'
export default {
  data () {
    return {
    }
  }
}
$(function () {
  $('#calendar').fullCalendar({
    events: [{
      title: 'Evento1',
      start: '2018-09-24T13:13:55.008',
      end: '2018-09-30T13:13:55.008'
    },
    {
      title: 'Evento2',
      start: '2018-09-24T13:13:55.008',
      end: '2018-09-30T13:13:55-0400'
    }
    ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    themeSystem: 'bootstrap4',
    bootstrapGlyphicons: {
      close: 'glyphicon-remove',
      prev: 'glyphicon-chevron-left',
      next: 'glyphicon-chevron-right',
      prevYear: 'glyphicon-backward',
      nextYear: 'glyphicon-forward'
    },
    weekends: true,
    locale: 'pt-br',
    timezone: 'Brazil',
    timeFormat: 'h:mm',
    navLinks: true,
    selectable: true,
    slotLabelFormat: 'h(:mm):00',
    handleWindowResize: true,
    contentHeight: 470,
    eventClick: function (calEvent, jsEvent, view) {
      alert('Event: ' + calEvent.title)
      alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY)
      alert('View: ' + view.name)
      $(this).css('border-color', 'red')
    },
    dayClick: function () {
      alert('a day has been clicked!')
    }
  })
})
</script>

<style>

</style>
