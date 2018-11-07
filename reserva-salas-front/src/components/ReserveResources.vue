<template>
    <div>
        <h4>Reserva de Recursos</h4>
        <form @submit.prevent="localizar(nome_localizar)">
          <div class="row">
              <div class="col-md-8">
                  <input type="text" id="nomeLocalizar" v-model="nome_localizar" class="form-control" placeholder="Nome Recurso *" pattern="^[A-Za-z ]+" required autofocus>
              </div>
              <div class="col-md-4">
                  <button class="btn btn-primary btn-block" type="submit">Localizar</button>
              </div>
          </div>
      </form>
      <span><b>Disponíveis:</b></span>
      <div style="overflow: scroll; height: 140px; background-color: #f1f1f1;">
      <table class="table table-sm" cellspacing="0" cellpadding="0" style="text-align: center;">
        <tbody v-for="(res, i) in res_localizar" :key="res.id" v-if="res_localizar">
          <button type="button" class="btn btn-link btn-block"><p style="text-align: left;" @click="selecionar(res)">ID: {{i+1}} | Nome: {{res.nome}} | Quantidade Disponível: {{res.quantidade}}</p></button>
        </tbody>
      </table>
      </div>
      <div class="row"  v-if="obj_selecionado != '**Selecione um Item**'">
          <div class="col-md-4">
            <span><b>Data de Locação:</b></span>
            <datepicker :disabledDates="disabledDates" :highlighted="state.highlighted" v-model="obj_Reserva.data_reserva" :inline="true" :language="ptBR" :value="state.date"></datepicker>
          </div>
          <div class="col-md-4">
            <span><b>Data de Entrega:</b></span>
              <datepicker :disabledDates="disabledDates" :highlighted="state.highlighted" v-model="obj_Reserva.data_entrega" :inline="true" :language="ptBR" :value="state.date"></datepicker>
          </div>
          <div class="col-md-4">
            <span><b>Selecionado:</b></span>
            <h3 style="color: blue;">{{obj_selecionado}}</h3>
            <input type="number" v-model="obj_Reserva.quantidade_reserva" class="form-control" min="1" max="100000" placeholder="Quantidade *" required autofocus>
            <br>
            <button class="btn btn-primary btn-block" type="submit" v-if="obj_selecionado != '**Selecione um Item**' && obj_Reserva.data_entrega && obj_Reserva.data_reserva && obj_Reserva.quantidade_reserva" @click="reservar(obj_Reserva)">Reservar</button>
            <br>
          </div>
      </div>
    </div>
</template>

<script>
import Resource from '../services/Resources.js'
import Datepicker from 'vuejs-datepicker'
import {ptBR, en} from 'vuejs-datepicker/dist/locale'
import moment from 'moment'
import date from 'date-and-time'
date.locale('pt')
export default {
  data () {
    return {
      obj_selecionado: '**Selecione um Item**',
      res_localizar: [],
      nome_localizar: '',
      obj_Reserva: {
        id_Usuario: '',
        id_Recurso: '',
        quantidade_objs: '',
        quantidade_reserva: '',
        data_reserva: '',
        data_entrega: ''
      },
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      },
      state: {
        highlighted: {
          daysOfMonth: [parseInt(moment().format('DD'))]
        },
        date: new Date(moment().format('DD/MM/YYYY, HH:MM:SS'))
      },
      ptBR: ptBR,
      en: en
    }
  },
  components: {
    Datepicker
  },
  mounted () {
    this.localizar('admin')
  },
  methods: {
    localizar (nome) {
      console.log(nome)
      Resource.listar(nome).then(resposta => {
        console.log(resposta.data)
        this.res_localizar = resposta.data
      }).catch(function (error) {
        console.log(error)
        alert('Registro não encontrado')
      })
    },
    selecionar (selecionado) {
      this.obj_selecionado = selecionado.nome + ' ' + selecionado.marca
      this.obj_Reserva.quantidade_objs = selecionado.quantidade
      this.obj_Reserva._id = selecionado._id
    },
    reservar (objReserva) {
      objReserva.data_reserva = date.format(objReserva.data_reserva, 'DD/MM/YYYY')
      objReserva.data_entrega = date.format(objReserva.data_entrega, 'DD/MM/YYYY')
      console.log(objReserva)
      if (parseInt(objReserva.quantidade_objs) < parseInt(objReserva.quantidade_reserva)) {
        alert('Reserva não efetuada: A quantidade excede o numero total no estoque.')
        location.reload()
      } else {
        Resource.reservar(objReserva).then(resposta => {
          console.log(resposta.data)
          alert('Recurso reservado com sucesso!')
          location.reload()
        }).catch(function (error) {
          console.log(error)
          alert('Não foi possível realizar a reserva, tente mais tarde.')
          location.reload()
        })
        alert('Reservado com Sucesso!')
      }
    }
  }
}
</script>

<style scoped>

</style>
