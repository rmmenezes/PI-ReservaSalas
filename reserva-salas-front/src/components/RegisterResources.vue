<template>
    <div>
        <h4>Cadastro de Recursos</h4>
        <form @submit.prevent="salvar">
            <input v-model="obj_Resource.Patrimonio" type="number" id="inputPatrimonio" class="form-control" placeholder="Número do Patrimônio" pattern="[0-9]" title="Insira apenas caracteres numéricos" required autofocus>
            <br>
            <input v-model="obj_Resource.Nome" type="text" id="inputNome" class="form-control" placeholder="Nome" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
            <br>
            <input v-model="obj_Resource.Marca" type="text" id="inputMarca" class="form-control" placeholder="Marca" required autofocus>
            <br>
            <input  v-model="obj_Resource.Modelo" type="text" id="inputModelo" class="form-control" placeholder="Modelo" required autofocus>
            <br>
            <textarea v-model="obj_Resource.Desc" id="inputDes" class="form-control" placeholder="Descrição" rows="7"></textarea>
            <br>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
            <br>
        </form>
    </div>
</template>

<script>
import Resource from '../services/RegisterResources.js'
export default {
  data () {
    return {
      obj_Resource: {
        Patrimonio: '',
        Nome: '',
        Marca: '',
        Modelo: '',
        Desc: ''
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
      Resource.salvar(JSON.stringify(this.obj_Resource)).then(resposta => {
        console.log(resposta.data)
        console.log(JSON.stringify(this.obj_Resource))
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
