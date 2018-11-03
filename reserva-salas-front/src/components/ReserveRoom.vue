<template>
    <div>
        <h4>Reserva de Sala</h4>
        <span><b>Selecione o bloco:</b></span>
        <div class="row">
            <br>
            <button class="btn btn-primary btn-block btn-bloco" type="submit" @click="escolherBloco('B')">BLOCO B</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" type="submit" @click="escolherBloco('C')">BLOCO C</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" type="submit" @click="escolherBloco('D')">BLOCO D</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" type="submit" @click="escolherBloco('E')">BLOCO E</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" type="submit" @click="escolherBloco('F')">BLOCO F</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" type="submit" @click="escolherBloco('G')">BLOCO G</button>
            <br>
            <button class="btn btn-primary btn-block btn-bloco" type="submit" @click="escolherBloco('H')">BLOCO H</button>
            <br>
        </div>
        <div id="list" class="row">
          <div class="table-responsive col-md-12">
            <table class="table table-striped" cellspacing="0" cellpadding="0" style="text-align: center;">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nº Patrimônio</th>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th class="actions">Ações</th>
                </tr>
              </thead>
              <tbody v-for="(res, i) in res_localizar" :key="res.id" v-if="res_localizar">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{res.patrimonio}}</td>
                  <td>{{res.nome}}</td>
                  <td>{{res.quantidade}}</td>
                  <td class="actions">
                    <span>Reservar BTN</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- MODAL VER MAIS (INICIO) -->
        <div class="modal fade bd-example-modal-lg-ver-mais" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ver Mais</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <label>ID: {{modalData._id}}</label>
                    <br>
                    <label>Nº Patrimônio: {{modalData.patrimonio}}</label>
                    <br>
                    <label>Nome: {{modalData.nome}}</label>
                    <br>
                    <label>Marca: {{modalData.marca}}</label>
                    <br>
                    <label>Modelo: {{modalData.modelo}}</label>
                    <br>
                    <label>Quantidade: {{modalData.quantidade}}</label>
                    <br>
                    <label>Descição: {{modalData.desc}}</label>
                    <br>
                </div>
            </div>
            </div>
        </div>
        <!-- MODAL VER MAIS (FIM) -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      bloco_selecionado: ''
    }
  },
  methods: {
    escolherBloco (b) {
      this.bloco_selecionado = b
    }
  }
}
</script>

<style scoped>
.btn-bloco {
    height: 100px;
    width: 100px;
    margin-right:5px;
    margin-bottom: 10px;
    margin-left:15px;
}
</style>
