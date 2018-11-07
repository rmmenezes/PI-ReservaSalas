<template>
    <div>
        <h4>Relatorio Reservas de Salas</h4>
        <span><b>Filtros:</b></span>
        <div class="row">
            <div class="col-md-2">
                <input type="text" v-model="filtro.nome" class="form-control" placeholder="Nome Sala    ">
            </div>
            <div class="col-md-2">
                <input type="text" v-model="filtro.tipo" class="form-control" placeholder="Tipo">
            </div>
            <div class="col-md-2">
                <input type="text" v-model="filtro.capacidade" class="form-control" placeholder="Capacidade">
            </div>
            <div class="col-md-2">
                <input type="text" v-model="filtro.nomeProfessor" class="form-control" placeholder="Nome Prof.">
            </div>
            <div class="col-md-2">
                <input type="text" v-model="filtro.horario" class="form-control" placeholder="Horario">
            </div>
            <div class="col-md-2">
                <input type="text" v-model="filtro.nome" class="form-control" placeholder="Nome *">
            </div>
        </div>
        <br>
        <div class="row">
            <table class="table table-striped" cellspacing="0" cellpadding="0" style="text-align: center;">
                <thead>
                    <tr>
                    <th>Sala</th>
                    <th>Tipo</th>
                    <th>Capacidade</th>
                    <th>Nome Prof.</th>
                    <th>Horario</th>
                    </tr>
                </thead>
                <tbody v-for="res  in res_busca" :key="res.id">
                    <tr v-if="haFiltro === '1' && filtro.nome === res.nome || filtro.tipo === res.tipo || filtro.capacidade === res.capacidade || filtro.horario === res.horario || filtro.codigoDisciplina === res.codigoDisciplina || filtro.codigoTurma === res.codigoTurma || filtro.nomeDisciplina === res.nomeDisciplina || filtro.nomeProfessor === res.nomeProfessor">
                        <td>{{res.nome}}</td>
                        <td>{{res.tipo}}</td>
                        <td>{{res.capacidade}}</td>
                        <td>{{res.nomeProfessor}}</td>
                        <td>{{res.horario}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ReservaSalas from '../services/Room.js'
export default {
  data () {
    return {
      bloco_selecionado: '',
      res_busca_bloco: [],
      res_busca: [],
      modalData: [],
      modalVisible: false,
      haFiltro: '0',
      filtro: {
        nome: '',
        tipo: '',
        capacidade: '',
        horario: '',
        codigoDisciplina: '',
        codigoTurma: '',
        nomeDisciplina: '',
        nomeProfessor: ''
      }
    }
  },
  mounted () {
    this.listar_salas()
  },
  methods: {
    listar_salas () {
      ReservaSalas.listar().then(resposta => {
        this.res_busca = resposta.data
      }).catch(function (error) {
        console.log(error)
        alert('Erro na listagem dos dados do banco')
      })
    },
    localizar_por_salas (nome) {
      ReservaSalas.listar_por_sala(nome).then(resposta => {
        this.res_busca = resposta.data
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
.col-md-2 {
    margin-right:-10px;
    margin-left:-10px;
}
</style>
