<template>
<div>
  <div id='calendar'></div>
</div>
</template>

<script>
import Sala from '../services/Room.js'
import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar-scheduler'
import 'fullcalendar/dist/locale/pt-br.js'
export default {
  data () {
    return {
      obj_evento: {
        title: '',
        start: '',
        end: ''
      }
    }
  },
  mounted () {
    this.mananger_calendar()
  },
  methods: {
    nada () {
      alert('s')
    },
    criar_evento (obj) {
      Sala.reservar(obj).then(resposta => {
        alert('Cadastro efetuado com sucesso!')
        location.reload()
      }).catch(function (error) {
        console.log(error)
        alert('Erro, Cadastro não efetuado!')
      })
    },
    buscar_eventos () {
      let obj = []
      Sala.buscar_eventos().then(resposta => {
        for (var i = 0; i < resposta.data.length; i++) {
          var objtemp = {_id: resposta.data[i]._id, title: resposta.data[i].title, start: resposta.data[i].start, end: resposta.data[i].end}
          obj.push(objtemp)
        }
        this.calendar(obj)
      }).catch(function (error) {
        console.log(error)
        alert('Erro, Cadastro não efetuado!')
      })
    },
    mananger_calendar () {
      this.buscar_eventos()
    },
    calendar (obj) {
      $('#calendar').fullCalendar({
        events: obj,
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
        contentHeight: 470
      })
    }
  }
}

</script>

<style>

</style>
