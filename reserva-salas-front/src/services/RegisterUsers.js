import { http } from './config'

export default {
  listar: () => {
    return http.get('register_users')
  },
  salvar: (user) => {
    return http.post('register_users', user)
  }
}
