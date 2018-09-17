<template>
    <div>
        <h4>Cadastro Usuário</h4>
        <form>
            <input type="text" id="inputNome" class="form-control" placeholder="Nome" required autofocus>
            <br>
            <input type="text" id="inputEmail" class="form-control" placeholder="email" required autofocus>
            <br>
            <input type="text" id="inputDepartamento" class="form-control" placeholder="Departamento" required autofocus>
            <br>
            <div class="row">
                <div class="col-md-6">
                    <input type="password" id="inputSenha1" class="form-control" placeholder="Senha" required autofocus>
                    <br>
                </div>
                <div class="col-md-6">
                    <input type="password" id="inputSenha2" class="form-control" placeholder="Repita a senha" required autofocus>
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

    }
  }
}
</script>

<style scoped>
</style>
