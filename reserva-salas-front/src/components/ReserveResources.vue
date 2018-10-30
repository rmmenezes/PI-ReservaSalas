<template>
    <div>
        <h4>Reserva de Recursos</h4>
            <form @submit.prevent="salvar">
              <form @submit.prevent="localizar(nome_localizar)">
                <div class="row">
                    <div class="col-md-8">
                        <input type="text" id="nomeLocalizar" v-model="nome_localizar" class="form-control" placeholder="Nome Recurso *" pattern="^[A-Za-z ]+" required autofocus>
                        <br>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-primary btn-block" type="submit">Localizar</button>
                    </div>
                </div>
            </form>
            <span>Disponives:</span>
            <div style="overflow: scroll; height: 100px; background-color: #f1f1f1;">
            <table class="table table-sm" cellspacing="0" cellpadding="0" style="text-align: center;">
              <tbody v-for="(res, i) in res_localizar" :key="res.id" v-if="res_localizar">
                <tr>
                  <div class="row">
                    <div class="col-md-6">
                      <th>ID: </th><td>{{i+1}}</td>
                      <th>Nome: </th><td>{{res.nome}}</td>
                      <th>Quantidade: </th><td>{{res.quantidade}}</td>
                    </div>
                    <div class="form-check col-md-6">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label" for="exampleRadios1">Selecionar</label>
                    </div>
                  </div>
                </tr>
              </tbody>
            </table>
            </div>
            <div class="row">
                <div class="col-md-6">
                  <span>Data de Locação:</span>
                  <datepicker :inline="true" :language="ptBR" :value="state.date"></datepicker>
                </div>
                <div class="col-md-6">
                  <span>Data de Entrega:</span>
                  <datepicker :inline="true" :language="ptBR" :value="state.date"></datepicker>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                  <br>
                  <button class="btn btn-lg btn-primary btn-block" type="submit">Reservar</button>
                  <br>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Resource from '../services/Resources.js'
import Datepicker from 'vuejs-datepicker'
import {ptBR, en} from 'vuejs-datepicker/dist/locale'
export default {
  data () {
    return {
      res_localizar: [],
      nome_localizar: '',
      obj_Resource: {
        patrimonio: '',
        nome: '',
        marca: '',
        modelo: '',
        quantidade: '',
        desc: ''
      },
      state: {
        date: new Date(2018, 9, 16)
      },
      en: en,
      ptBR: ptBR
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
    }
  }
}
</script>

<style scoped>
</style>
