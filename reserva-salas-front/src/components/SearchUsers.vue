<template>
    <div class="container-fluid">
        <h4>Localizar de Usuário</h4>
        <form @submit.prevent="salvar">
            <div class="row">
                <div class="col-md-8">
                    <input type="text" v-model="obj_User.senha1" id="inputSenha1" class="form-control" placeholder="Nome *" pattern="^[A-Za-z]+" required autofocus>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-primary btn-block" type="submit">Localizar</button>
                </div>
            </div>
        </form>
        <br>
        <div class="container">
          <div class="row" style="background-color: #e9e9e9; border-radius:5px;">
            <div class="dropdown-divider"></div>
            <div class="col-md-9">
              <h5>Nome: Rafael Menezes Barboza</h5>
            </div>
            <div class="col-md-3">
              <button type="button" style="font-weight: bold;" class="btn btn-success btn-sm">Ver Mais</button>
              <button type="button" style="font-weight: bold;" class="btn btn-info btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg">Editar</button>
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
                        <input type="text" v-model="obj_User.nome" id="inputNome" class="form-control" placeholder="Nome *" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
                        <br>
                        <input type="email" v-model="obj_User.email" id="inputEmail" class="form-control" placeholder="Email *" required autofocus>
                        <br>
                        <input type="text" v-model="obj_User.departamento" id="inputDepartamento" class="form-control" placeholder="Departamento *" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais"  required autofocus>
                        <br>
                        <div class="row">
                            <div class="col-md-6">
                                <input type="password" v-model="obj_User.senha1" id="inputSenha1" class="form-control" placeholder="Senha *" pattern="^[A-Za-z0-9]+" required autofocus>
                                <br>
                            </div>
                            <div class="col-md-6">
                                <input type="password" v-model="obj_User.senha2" id="inputSenha2" class="form-control" placeholder="Repita a senha *" pattern="^[A-Za-z0-9]+" required autofocus>
                                <br>
                            </div>
                        </div>
                            <button class="btn btn-lg btn-primary btn-block" >Cadastrar</button>
                    </form>
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary" type="submit">Salvar alterações</button>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" style="font-weight: bold;" class="btn btn-danger btn-sm">Excluir</button>
            </div>
          </div>
          <div class="dropdown-divider"></div>
        </div>
    </div>
</template>

<script>
import User from '../services/RegisterUsers.js'
export default {
  data () {
    return {
      obj_User: {
        nome: '',
        email: '',
        departamento: '',
        senha1: '',
        senha2: ''
      }
    }
  },
  methods: {
    salvar () {
      User.salvar(this.obj_User).then(resposta => {
        console.log(resposta.data)
        alert('Cadastro efetuado com sucesso!')
      }).catch(function (error) {
        console.log(error)
        alert('Erro, Cadastro não efetuado!')
      })
    }
  }
}
</script>

<style scoped>
</style>
