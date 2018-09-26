<template>
    <div>
        <h4>Cadastro de Usuário</h4>
        <form @submit.prevent="submit">
            <input type="text" v-model="obj_User.nome" id="inputNome" class="form-control" placeholder="Nome" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
            <br>
            <input type="email" v-model="obj_User.email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
            <br>
            <input type="text" v-model="obj_User.Departamento" id="inputDepartamento" class="form-control" placeholder="Departamento" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais"  required autofocus>
            <br>
            <div class="row">
                <div class="col-md-6">
                    <input type="password" v-model="obj_User.password" id="inputSenha1" class="form-control" placeholder="Senha" pattern="^[A-Za-z0-9]{4}" title="Senha com no minimo 4 caracteres" required autofocus>
                    <br>
                </div>
                <div class="col-md-6">
                    <input type="password" v-model="obj_User.Senha2" id="inputSenha2" class="form-control" placeholder="Repita a senha" pattern="^[A-Za-z0-9]{4}" title="Senha com no minimo 4 caracteres" required autofocus>
                    <br>
                </div>
            </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
        </form>
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
        password: ''
      }
    }
  },
  mounted () {
    User.listar().then(resposta => {
      console.log(resposta.data)
    })
  },
  methods: {
    salvar () {
      User.salvar(JSON.stringify(this.obj_User)).then(resposta => {
        console.log(resposta.data)
        console.log(JSON.stringify(this.obj_User))
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
