import { http } from './config'

export default {
  logar: (user) => {
    console.log('usuarios/' + user.email + '/' + user.senha)
    return http.post('usuarios/login')
  },
  salvar: (user) => {
    return http.post('usuarios', user)
  }
}
