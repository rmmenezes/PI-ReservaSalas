<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10">
          <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center ">
            <router-view />
          </div>
    </main>
</template>

<script>
import Calendar from './Calendar'
import RegisterResources from './RegisterResources'
import RegisterUsers from './RegisterUsers'
export default {
  components: {
    Calendar,
    RegisterResources,
    RegisterUsers
  }
}
</script>

<style>

</style>
