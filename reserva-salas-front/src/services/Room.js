import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('reservas' + '/' + nome)
  },
  salvar: (recurso) => {
    return http.post('reservas', recurso)
  },
  editar: (recurso) => {
    return http.put('reservas', recurso)
  },
  excluir: (recurso) => {
    return http.delete('reservas', recurso)
  },
  reservar: (reserva) => {
    return http.reservar('reservas', reserva)
  },
  listar_por_sala: (nome) => {
    return http.get('reservas' + '/por_sala/' + nome)
  }
}
