<template>
    <div class="container-fluid">
        <h4>Localizar Recursos</h4>
        <form @submit.prevent="localizar">
            <div class="row">
                <div class="col-md-8">
                    <input type="text" id="nomeLocalizar" class="form-control" placeholder="Nome *" pattern="^[A-Za-z]+" required autofocus>
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
                  <td>{{i}}</td>
                  <td>{{res.nome}}</td>
                  <td>{{res.departamento}}</td>
                  <td class="actions">
                    <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-ver-mais" @click="openModal(res)">Ver Mais</button>
                    <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg">Editar</button>
                    <button type="button" class="btn btn-danger btn-sm">Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div><!-- /#list -->
      <!-- MODAL EDITAR (INICIO) -->
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar Usuario</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="salvar">
              <label>Nome:</label>
              <input type="text" v-model="obj_User.nome" value='' id="inputNome" class="form-control"  pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
              <label>Email:</label>
              <input type="email" v-model="obj_User.email" id="inputEmail" class="form-control"  required autofocus>
              <label>Departamento</label>
              <input type="text" v-model="obj_User.departamento" id="inputDepartamento" class="form-control"  pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais"  required autofocus>
              <div class="row">
                  <div class="col-md-6">
                      <label>Senha:</label>
                      <input type="password" v-model="obj_User.senha1" id="inputSenha1" class="form-control"  pattern="^[A-Za-z0-9]+" required autofocus>
                      <br>
                  </div>
                  <div class="col-md-6"></div>
              </div>
          </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit">Salvar alterações</button>
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
                <label>Nome: {{modalData.nome}}</label>
                <br>
                <label>Email: {{modalData.email}}</label>
                <br>
                <label>Departamento: {{modalData.departamento}}</label>
                <br>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL VER MAIS (FIM) -->
    </div>
</template>

<script>
import User from '../services/RegisterUsers.js'
export default {
  data () {
    return {
      res_localizar: [],
      obj_User: {
        nome: '',
        email: '',
        departamento: '',
        senha1: '',
        senha2: ''
      },
      modalVisible: false,
      modalData: ''
    }
  },
  methods: {
    openModal (data) {
      this.modalData = data
      this.modalVisible = true
    },
    salvar () {
      User.salvar(this.obj_User).then(resposta => {
        console.log(resposta.data)
        alert('Cadastro efetuado com sucesso!')
      }).catch(function (error) {
        console.log(error)
        alert('Erro, Cadastro não efetuado!')
      })
    },
    localizar () {
      User.listar().then(resposta => {
        console.log(resposta.data)
        this.res_localizar = resposta.data
        console.log(this.res_localizar)
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
