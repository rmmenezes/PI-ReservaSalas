<template>
    <div>
        <h4>Cadastro de Recursos</h4>
        <form @submit.prevent="salvar">
            <input v-model="obj_Resource.patrimonio" type="number" id="inputPatrimonio" class="form-control" placeholder="Número do Patrimônio" pattern="[0-9]" title="Insira apenas caracteres numéricos" required autofocus>
            <br>
            <input v-model="obj_Resource.nome" type="text" id="inputNome" class="form-control" placeholder="Nome *" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
            <br>
            <div class="row">
                <div class="col-md-4">
                  <input v-model="obj_Resource.marca" type="text" id="inputMarca" class="form-control" placeholder="Marca *" required autofocus>
                  <br>
                </div>
                <div class="col-md-4">
                  <input  v-model="obj_Resource.modelo" type="text" id="inputModelo" class="form-control" placeholder="Modelo *" required autofocus>
                  <br>
                </div>
                <div class="col-md-4">
                  <input  v-model="obj_Resource.quantidade" type="number" id="inputQuantidade" class="form-control" placeholder="Quantidade *" required autofocus>
                  <br>
                </div>
            </div>
            <textarea v-model="obj_Resource.desc" id="inputDes" class="form-control" placeholder="Descrição" rows="7"></textarea>
            <br>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
            <br>
        </form>
    </div>
</template>

<script>
import Resource from '../services/Resources.js'
export default {
  data () {
    return {
      obj_Resource: {
        patrimonio: '',
        nome: '',
        marca: '',
        modelo: '',
        quantidade: '',
        desc: ''
      }
    }
  },
  mounted () {
    Resource.listar().then(resposta => {
      console.log(resposta.data)
    })
  },
  methods: {
    salvar () {
      Resource.salvar(this.obj_Resource).then(resposta => {
        console.log(resposta.data)
        alert('Cadastro efetuado com sucesso!')
        location.reload()
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
