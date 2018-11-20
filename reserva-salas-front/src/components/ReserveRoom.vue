<template>
    <div>
      <div class="row">
        <div class="col-md-3">
          <span><b>Busque por Data:</b></span>
          <input type="text" id="inputMarca" class="form-control" placeholder="dd/mm/yyyy">
        </div>
        <div class="col-md-3">
          <span><b>Busque por Horário:</b></span>
          <input type="text" id="inputMarca" class="form-control" placeholder="hh:mm">
        </div>
        <div class="col-md-3">
          <span><b> - </b></span>
            <button class="btn btn-primary btn-block" type="submit">Localizar</button>
        </div>
      </div>
        <span><b>Selecione o bloco:</b></span>
        <div class="row">
            <br>
            <button class="btn btn-primary btn-block btn-bloco" @click="escolherBloco('B')">BLOCO B</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" @click="escolherBloco('C')">BLOCO C</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" @click="escolherBloco('D')">BLOCO D</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" @click="escolherBloco('E')">BLOCO E</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" @click="escolherBloco('F')">BLOCO F</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" @click="escolherBloco('G')">BLOCO G</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" @click="escolherBloco('H')">BLOCO H</button>
            <br>
        </div>
        <div v-if="res_busca_sala !== []">
          <div class="row">
            <br>
            <button v-for="res in res_busca_bloco" :key="res.id" class="btn btn-success btn-block btn-sala" @click="openModal(res)" data-toggle="modal" data-target=".bd-example-modal-lg-ver-mais">{{res}}</button>
            <br>
          </div>
          <div class="row">
            <div class="col-md-6">
              <calendar></calendar>
            </div>
            <div class="col-md-6">
              <form @submit.prevent="">
                <h4>Reservar Sala</h4>
                <input type="text" class="form-control" placeholder="Nome da Reserva">
                <div id="example-3">
                  <input type="checkbox" id="jack" value="Seg">
                  <label for="jack">Seg</label>
                  <input type="checkbox" id="john" value="Ter">
                  <label for="john">Ter</label>
                  <input type="checkbox" id="mike" value="Qua">
                  <label for="mike">Qua</label>
                  <input type="checkbox" id="mike" value="Qui">
                  <label for="mike">Qui</label>
                  <input type="checkbox" id="mike" value="Sex">
                  <label for="mike">Sex</label>
                  <input type="checkbox" id="mike" value="Sab">
                  <label for="mike">Sab</label>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <datepicker placeholder="Data Inicio" :disabledDates="disabledDates" :highlighted="state.highlighted" v-model="obj_Reserva.data_start" :inline="false" :language="ptBR" :value="state.date"></datepicker>
                    <input type="text"  v-model="obj_Reserva.hora_start" placeholder="Horario Inicio" >
                  </div>
                  <div class="col-md-6">
                    <datepicker placeholder="Data Fim" :disabledDates="disabledDates" :highlighted="state.highlighted" v-model="obj_Reserva.data_end" :inline="false" :language="ptBR" :value="state.date"></datepicker>
                    <input type="text" v-model="obj_Reserva.hora_start" placeholder="Horario Fim" >
                  </div>
                </div>
                <br>
                <textarea id="inputDes" class="form-control" placeholder="Motivo da Reserva" rows="3"></textarea>
                <br>
                <button class="btn btn-primary" type="submit">Registrar</button>
              </form>
            </div>
          </div>
          <!-- MODAL VER MAIS (INICIO) -->
          <div class="modal fade bd-example-modal-lg-ver-mais" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Reservas</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-8">
                      <h3>Para efetuar uma reserva nesta sala:</h3>
                    </div>
                    <div class="col-md-4">
                      <button class="btn btn-primary btn-block" data-toggle="modal" data-target=".bd-example-modal-lg-calendar">Efetuar Reserva</button>
                    </div>
                  </div>
                  <div id="list" class="row">
                    <div class="table-responsive col-md-12">
                      <div class="dropdown-divider"></div>
                      <br>
                      <span>Segue abaixo a lista de reservas ja efetuadas para esta sala.</span>
                      <table class="table table-striped" cellspacing="0" cellpadding="0" style="text-align: center;">
                        <thead>
                          <tr>
                            <th>Sala</th>
                            <th>Tipo</th>
                            <th>Capacidade</th>
                            <th>Reservado Por</th>
                            <th>Horario</th>
                          </tr>
                        </thead>
                        <tbody v-for="res  in res_busca_sala" :key="res.id">
                          <tr>
                            <td>{{res.nome}}</td>
                            <td>{{res.tipo}}</td>
                            <td>{{res.capacidade}}</td>
                            <td>{{res.nomeProfessor}}</td>
                            <td>{{res.horario}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div><!-- /#list -->
                </div>
              </div>
            </div>
          </div>
          <!-- MODAL VER MAIS (FIM) -->
          <!-- MODAL VER MAIS (INICIO) -->
          <div class="modal fade bd-example-modal-lg-calendar" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Reservas</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <calendar ref="foo"></calendar>
                </div>
              </div>
            </div>
          </div>
          <!-- MODAL VER MAIS (FIM) -->
        </div>
      </div>
</template>

<script>
import ReservaSalas from '../services/Room.js'
import Calendar from './Calendar'
import Datepicker from 'vuejs-datepicker'
import {ptBR, en} from 'vuejs-datepicker/dist/locale'
import moment from 'moment'
export default {
  components: {
    Calendar,
    Datepicker
  },
  data () {
    return {
      bloco_selecionado: '',
      res_busca_bloco: [],
      res_busca_sala: [],
      modalData: [],
      obj_Reserva: {
        data_start: '',
        data_end: ''
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
  methods: {
    openModal (data) {
      this.localizar_por_salas(data)
      this.modalData = this.res_busca_sala
    },
    escolherBloco (b) {
      this.bloco_selecionado = b
      this.localizar_por_bloco(b)
      console.log(this.res_busca_bloco)
      // this.$refs.foo.nada() -> aqui eu consigo acessar os metodos do componente calendario
    },
    localizar_por_bloco (nome) {
      console.log(nome)
      ReservaSalas.listar(nome).then(resposta => {
        console.log(resposta.data)
        this.res_busca_bloco = resposta.data
      }).catch(function (error) {
        console.log(error)
        alert('Registro não encontrado')
      })
    },
    localizar_por_salas (nome) {
      ReservaSalas.listar_por_sala(nome).then(resposta => {
        this.res_busca_sala = resposta.data
        console.log(this.res_busca_sala)
      }).catch(function (error) {
        console.log(error)
        alert('Registro não encontrado')
      })
    }
  }
}
</script>

<style scoped>
.btn-bloco {
    height: 40px;
    width: 100px;
    margin-right:5px;
    margin-bottom: 10px;
    margin-left:15px;
    margin-top:10px;
}
.btn-sala {
    height: 40px;
    width: 70px;
    margin-right:5px;
    margin-bottom: 10px;
    margin-left:15px;
    margin-top:10px;
}
</style>
