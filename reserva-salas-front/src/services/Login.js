import { http } from './config'

export default {
  listar: (user) => {
    console.log('usuarios/' + user.email + '/' + user.senha)
    return http.get('usuarios/' + user.email + '/' + user.senha)
  },
  salvar: (user) => {
    return http.post('usuarios', user)
  }
}
