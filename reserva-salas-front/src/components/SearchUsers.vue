<template>
    <div class="container-fluid" @show="localizar()">
        <h4>Localizar Usuário</h4>
        <form @submit.prevent="localizar(nome_localizar)">
            <div class="row">
                <div class="col-md-8">
                    <input type="text" v-model="nome_localizar" id="nomeLocalizar" class="form-control" placeholder="Nome *" pattern="^[A-Za-z ]+" required autofocus>
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
                  <th>Nome</th>
                  <th>Departamento</th>
                  <th class="actions">Ações</th>
                </tr>
              </thead>
              <tbody v-for="(res, i) in res_localizar" :key="res.id" v-if="res_localizar">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{res.nome}}</td>
                  <td>{{res.departamento}}</td>
                  <td class="actions">
                  <form @submit.prevent="excluir(res._id)">
                    <input type="hidden" v-model="res._id" >
                    <button type="button" style="width: 75px;" class="btn btn-success btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-ver-mais" @click="openModal(res)">Ver Mais</button>
                    <button type="button" style="width: 75px;" class="btn btn-info btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-editar" @click="openModal(res)">Editar</button>
                    <button type="submit" style="width: 75px;" class="btn btn-danger btn-sm" >Excluir</button>
                    </form>
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
            <h5 class="modal-title" id="exampleModalLabel">Editar Usuario</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editar (modalData)">
              <label>Nome: </label>
              <input type="text" v-model="modalData.nome" value='' id="inputNome" class="form-control"  pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
              <label>Email:</label>
              <input type="email" v-model="modalData.email" id="inputEmail" class="form-control"  required autofocus>
              <label>Departamento</label>
              <input type="text" v-model="modalData.departamento" id="inputDepartamento" class="form-control"  pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais"  required autofocus>
              <div class="row">
                  <div class="col-md-6">
                      <label>Senha:</label>
                      <input type="password" v-model="obj_User.senha1" id="inputSenha1" class="form-control"  pattern="^[A-Za-z0-9]+">
                      <br>
                  </div>
                  <div class="col-md-6"></div>
              </div>
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
import User from '../services/Users.js'
export default {
  data () {
    return {
      res_localizar: [],
      nome_localizar: '',
      obj_User: {
        _id: '',
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
  mounted () {
    this.localizar('admin')
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
    localizar (nome) {
      User.listar(nome).then(resposta => {
        console.log(resposta.data)
        this.res_localizar = resposta.data
        console.log(this.res_localizar)
      }).catch(function (error) {
        console.log(error)
        alert('Registro não encontrado')
      })
    },
    excluir (id) {
      User.excluir(id).then(resposta => {
        alert('Usuario excluido com sucesso')
        location.reload()
      }).catch(function (error) {
        console.log(error)
        alert('Registro não encontrado')
      })
    },
    editar (user) {
      console.log(user.nome)
      console.log(user._id)
      User.editar(user).then(resposta => {
        console.log(resposta.data)
        alert('Usuario editado com sucesso!')
      }).catch(function (error) {
        console.log(error)
        alert('Erro, edição não efetuada!')
      })
    }

  }
}
</script>

<style scoped>
</style>
