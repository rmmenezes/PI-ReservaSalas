import { http } from './config'

export default {
  listar: (user) => {
    return http.get('usuarios', user)
  },
  salvar: (user) => {
    return http.post('usuarios', user)
  }
}
