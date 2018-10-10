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
            <button type="button" class="btn btn-link btn-block" style="font-weight: bold" data-toggle="dropdown" >Usuarios</button>
            <div class="dropdown-menu" style="text-align: center">
                <router-link to="/dashboard/register_users">Cadastrar Usuario</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/search_users">Localizar Usuario</router-link>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropright">
            <button type="button" class="btn btn-link  btn-block" style="font-weight: bold" data-toggle="dropdown" >Recursos</button>
            <div class="dropdown-menu" style="text-align: center">
                <router-link to="/dashboard/register_resources">Cadastrar Recurso</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/register_resources">Localizar Recurso</router-link>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropright">
            <button type="button" class="btn btn-link  btn-block" style="font-weight: bold" data-toggle="dropdown" >Salas</button>
            <div class="dropdown-menu" style="text-align: center">
                <router-link to="/dashboard/calendar">Cadastrar Sala</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/dashboard/calendar">Localizar Sala</router-link>
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
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(143, 27, 27, 0.1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 15px; /* Space for fixed navbar */
}

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

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>
