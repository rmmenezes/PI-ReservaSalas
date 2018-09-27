import { http } from './config'

export default {
  listar: () => {
    return http.get('register_resouces')
  },
  salvar: (produto) => {
    return http.post('register_resources', produto)
  }
}
