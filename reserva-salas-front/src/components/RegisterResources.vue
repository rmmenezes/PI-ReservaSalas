<template>
    <div>
        <h4>Cadastro Recursos</h4>
        <form>
            <input type="text" id="inputPatrimonio" class="form-control" placeholder="Numero do Patrimonio" required autofocus>
            <br>
            <input type="text" id="inputNome" class="form-control" placeholder="Nome" required autofocus>
            <br>
            <input type="text" id="inputMarca" class="form-control" placeholder="Marca" required autofocus>
            <br>
            <input type="text" id="inputModelo" class="form-control" placeholder="Modelo" required autofocus>
            <br>
            <textarea id="inputDescrição" class="form-control" placeholder="Descrição" rows="7"></textarea>
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

    }
  }
}
</script>

<style scoped>
</style>
