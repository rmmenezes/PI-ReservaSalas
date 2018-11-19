<template>
    <div>
        <h4>Reserva de Sala</h4>
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
            <button v-for="res in res_busca_bloco" :key="res.id" class="btn btn-success btn-block btn-sala" @click="openModal(res)" data-toggle="modal" data-target=".bd-example-modal-lg-ver-mais">{{res.nome}}</button>
            <br>
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
                      <button class="btn btn-primary btn-block" @click="escolherBloco('H')">Efetuar Reserva</button>
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
      res_busca_sala: [],
      modalData: [],
      modalVisible: false
    }
  },
  methods: {
    openModal (data) {
      this.modalVisible = true
      this.localizar_por_salas(data)
      this.modalData = this.res_busca_sala
      console.log('modalData' + this.modalData)
    },
    escolherBloco (b) {
      this.bloco_selecionado = b
      this.localizar_por_bloco(b)
      console.log(this.res_busca_bloco)
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
    height: 100px;
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
