import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('reservas' + '/' + nome)
  },
  listar_salas: (nome) => {
    return http.get('listar_salas' + nome)
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
    return http.post('reserva-sala', reserva)
  },
  buscar_eventos: () => {
    return http.get('reserva-sala', '/')
  },
  listar_por_sala: (nome) => {
    return http.get('reservas' + '/por_sala/' + nome)
  }
}
