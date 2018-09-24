<template>
    <div>
        <h4>Cadastro Recursos</h4>
        <form @submit.prevent="submit">
            <input v-model="inputPatrimonio" type="number" id="inputPatrimonio" class="form-control" placeholder="Número do Patrimonio" pattern="[0-9]" title="Insira apenas caracteres numéricos" required autofocus>
            <br>
            <input v-model="inputNome" type="text" id="inputNome" class="form-control" placeholder="Nome" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
            <br>
            <input v-model="inputMarca" type="text" id="inputMarca" class="form-control" placeholder="Marca" required autofocus>
            <br>
            <input  v-model="inputModelo" type="text" id="inputModelo" class="form-control" placeholder="Modelo" required autofocus>
            <br>
            <textarea v-model="inputDes" id="inputDes" class="form-control" placeholder="Descrição" rows="7"></textarea>
            <br>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
            <br>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      obj_Resource: {
        inputPatrimonio: '',
        inputNome: '',
        inputMarca: '',
        inputModelo: '',
        inputDesc: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
