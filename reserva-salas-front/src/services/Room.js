import { http } from './config'

export default {
  listar: () => {
    return http.get('reservas' + '/')
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
