<template>
    <div>
        <h4>Cadastro Usuário</h4>
        <form @submit.prevent="submit">
            <input type="text" v-model="inputNome" id="inputNome" class="form-control" placeholder="Nome" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
            <br>
            <input type="email" v-model="inputEmail" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
            <br>
            <input type="text" v-model="inputDepartamento" id="inputDepartamento" class="form-control" placeholder="Departamento" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais"  required autofocus>
            <br>
            <div class="row">
                <div class="col-md-6">
                    <input type="password" v-model="inputSenha1" id="inputSenha1" class="form-control" placeholder="Senha" SIZE="4" pattern="^[A-Za-z0-9]{4}" title="Senha com no minimo 4 caracteres" required autofocus>
                    <br>
                </div>
                <div class="col-md-6">
                    <input type="password" v-model="inputSenha2" id="inputSenha2" class="form-control" placeholder="Repita a senha" SIZE="4" pattern="^[A-Za-z0-9]{4}" title="Senha com no minimo 4 caracteres" required autofocus>
                    <br>
                </div>
            </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      obj_User: {
        inputNome: '',
        inputEmail: '',
        inputDepartamento: '',
        inputSenha1: '',
        inputSenha2: ''
      }
    }
  },
  methods: {
    BloqueiaNumeros () {
      var tecla = window.event.keyCode
      tecla = String.fromCharCode(tecla)
      if ((tecla >= '0') && (tecla <= '9')) {
        window.event.keyCode = 0
      }
    }
  }
}
</script>

<style scoped>
</style>
