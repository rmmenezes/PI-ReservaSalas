import { http } from './config'

export default {
  listar: () => {
    return http.get('login')
  },
  salvar: (user) => {
    return http.post('login', user)
  }
}
