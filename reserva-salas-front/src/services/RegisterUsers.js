import { http } from './config'

export default {
  listar: () => {
    return http.get('usuarios')
  },
  salvar: (user) => {
    return http.post('usuarios', user)
  }
}
