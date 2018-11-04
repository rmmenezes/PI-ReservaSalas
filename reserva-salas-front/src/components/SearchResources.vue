<template>
    <div class="container-fluid">
        <h4>Localizar Recursos</h4>
        <form @submit.prevent="localizar(nome_localizar)">
            <div class="row">
                <div class="col-md-8">
                    <input type="text" id="nomeLocalizar" v-model="nome_localizar" class="form-control" placeholder="Nome *" pattern="^[A-Za-z ]+" required autofocus>
                    <br>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-primary btn-block" type="submit">Localizar</button>
                </div>
            </div>
        </form>
        <br>
        <div id="list" class="row">
          <div class="table-responsive col-md-12">
            <table class="table table-striped" cellspacing="0" cellpadding="0" style="text-align: center;">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nº Patrimônio</th>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th class="actions">Ações</th>
                </tr>
              </thead>
              <tbody v-for="(res, i) in res_localizar" :key="res.id" v-if="res_localizar">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{res.patrimonio}}</td>
                  <td>{{res.nome}}</td>
                  <td>{{res.quantidade}}</td>
                  <td class="actions">
                    <button type="button" style="width: 75px;" class="btn btn-success btn-sm" @click="openModal(res)">Ver Mais</button>
                    <button type="button" style="width: 75px;" class="btn btn-info btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-editar" @click="openModal(res)">Editar</button>
                    <button type="button" style="width: 75px;" class="btn btn-danger btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-excluir" @click="openModal(res)">Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div><!-- /#list -->
      <!-- MODAL EDITAR (INICIO) -->
      <div class="modal fade bd-example-modal-lg-editar" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar Recurso</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editar (modalData)">
                <label>Número do Patrimônio</label>
                <input v-model="modalData.patrimonio" type="number" id="inputPatrimonio" class="form-control" required autofocus>
                <label>Nome</label>
                <input v-model="modalData.nome" type="text" id="inputNome" class="form-control" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
                <div class="row">
                    <div class="col-md-4">
                      <label>Marca</label>
                      <input v-model="modalData.marca" type="text" id="inputMarca" class="form-control" required autofocus>
                    </div>
                    <div class="col-md-4">
                      <label>Modelo</label>
                      <input  v-model="modalData.modelo" type="text" id="inputModelo" class="form-control"  required autofocus>
                    </div>
                    <div class="col-md-4">
                      <label>Quantidade</label>
                      <input  v-model="modalData.quantidade" type="number" id="inputQuantidade" class="form-control" required autofocus>
                    </div>
                </div>
                <label>Descrição</label>
                <textarea v-model="modalData.desc" id="inputDes" class="form-control" rows="7"></textarea>
              <div class="modal-footer">
                <button class="btn btn-primary" type="submit">Salvar alterações</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL EDITAR (FIM) -->
      <!-- MODAL VER MAIS (INICIO) -->
      <div class="modal fade bd-example-modal-lg-ver-mais" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ver Mais</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <label>ID: {{modalData._id}}</label>
                <br>
                <label>Nº Patrimônio: {{modalData.patrimonio}}</label>
                <br>
                <label>Nome: {{modalData.nome}}</label>
                <br>
                <label>Marca: {{modalData.marca}}</label>
                <br>
                <label>Modelo: {{modalData.modelo}}</label>
                <br>
                <label>Quantidade: {{modalData.quantidade}}</label>
                <br>
                <label>Descição: {{modalData.desc}}</label>
                <br>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL VER MAIS (FIM) -->
       <!-- MODAL excluir (INICIO) -->
      <div class="modal fade bd-example-modal-lg-excluir" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ver Mais</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <label>ID: {{modalData._id}}</label>
                <br>
                <label>Nº Patrimônio: {{modalData.patrimonio}}</label>
                <br>
                <label>Nome: {{modalData.nome}}</label>
                <br>
                <label>Marca: {{modalData.marca}}</label>
                <br>
                <label>Modelo: {{modalData.modelo}}</label>
                <br>
                <label>Quantidade: {{modalData.quantidade}}</label>
                <br>
                <label>Descição: {{modalData.desc}}</label>
                <br>
            </div>
            <div class="modal-footer">
              <button v-on:click="excluir (modalData)" class="btn btn-danger btn-sm">Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL excluir (FIM) -->
    </div>
</template>

<script>
import Resource from '../services/Resources.js'
export default {
  data () {
    return {
      res_localizar: [],
      nome_localizar: '',
      obj_Resource: {
        _id: '',
        patrimonio: '',
        nome: '',
        marca: '',
        modelo: '',
        quantidade: '',
        desc: ''
      },
      modalVisible: false,
      modalData: ''
    }
  },
  mounted () {
    this.localizar('admin')
  },
  methods: {
    openModal (data) {
      this.modalData = data
      this.modalVisible = true
    },
    editar (r) {
      Resource.editar(r).then(resposta => {
        alert('Cadastro efetuado com sucesso!')
        location.reload()
      }).catch(function (error) {
        console.log(error)
        alert('Erro, Cadastro não efetuado!')
      })
    },
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
    excluir (recurso) {
      Resource.excluir(recurso).then(resposta => {
        console.log(resposta.data)
        alert('Recurso excluido com sucesso!')
        location.reload()
      }).catch(function (error) {
        console.log(error)
        alert('Recurso não pode ser excluido!')
      })
    }
  }
}
</script>

<style scoped>
</style>
