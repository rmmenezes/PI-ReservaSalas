import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('recursos' + '/' + nome)
  },
  salvar: (produto) => {
    return http.post('recursos', produto)
  }
}
