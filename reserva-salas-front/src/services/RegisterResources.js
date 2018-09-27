import { http } from './config'

export default {
  listar: () => {
    return http.get('recursos')
  },
  salvar: (produto) => {
    return http.post('recursos', produto)
  }
}
