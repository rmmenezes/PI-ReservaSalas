<template>
<div>
    <nav class="navbar navbar-dark fixed-top bg-dark shadow">
      <h5 style="color: White">Reservas UTFPR</h5>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <router-link style="color: white" to="/">Sair</router-link>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row" style="text-align:left;">
        <nav class="col-md-2 sidebar">
          <br>
          <h6 style="text-align:center; font-weight: bold; font-style: italic;">Atividades e Recursos</h6>
          <div class="dropdown-divider"></div>
          <div class="dropright">
            <button type="button" class="btn btn-link btn-block" style="font-weight: bold" data-toggle="dropdown" >Usuários</button>
            <div class="dropdown-menu" style="text-align: center">
                <router-link to="/dashboard/register_users">Cadastrar Usuário</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/search_users">Localizar Usuário</router-link>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropright">
            <button type="button" class="btn btn-link  btn-block" style="font-weight: bold" data-toggle="dropdown" >Recursos</button>
            <div class="dropdown-menu" style="text-align: center">
                <router-link to="/dashboard/register_resources">Cadastrar Recurso</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/search_resources">Localizar Recurso</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/reserve_resources">Reservar Recurso</router-link>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropright">
            <button type="button" class="btn btn-link  btn-block" style="font-weight: bold" data-toggle="dropdown" >Salas</button>
            <div class="dropdown-menu" style="text-align: center">
                <router-link to="/dashboard/calendar">Cadastrar Sala</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/calendar">Localizar Sala</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/reserve_room">Reservar Sala</router-link>
            </div>
          </div>
        <div class="dropdown-divider"></div>
        </nav>
        <!-- Aqui esta a workspace  -->
        <workspace></workspace>
      </div>
    </div>
</div>
</template>

<script>
import Workspace from './Workspace'
export default {
  name: 'hello',
  components: {
    Workspace
  },
  data () {
    return {
      ok: 'adm'
    }
  },
  methods: {
    greet: function (event) {
      alert('Olá ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<style>

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}
</style>
