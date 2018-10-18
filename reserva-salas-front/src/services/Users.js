import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('usuarios' + '/' + nome)
  },
  salvar: (user) => {
    return http.post('usuarios', user)
  }
}
