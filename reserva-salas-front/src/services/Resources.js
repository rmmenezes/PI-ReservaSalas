import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('recursos' + '/' + nome)
  },
  salvar: (recurso) => {
    return http.post('recursos', recurso)
  },
  editar: (recurso) => {
    return http.put('recursos', recurso)
  },
  excluir: (recurso) => {
    return http.delete('recursos', recurso)
  },
  reservar: (reserva) => {
    return http.reservar('recursos', reserva)
  }
}
