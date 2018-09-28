<template>
    <div>
        <h4>Reserva de Recursos</h4>
        <form @submit.prevent="salvar">
            <vuejs-datepicker placeholder="Select Date" language="pt-br"></vuejs-datepicker>
            <datepicker></datepicker>
            <br>
        </form>
    </div>
</template>

<script>
import Resource from '../services/RegisterResources.js'
import Datepicker from 'vuejs-datepicker'
export default {
  components: {
    Datepicker
  },
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
