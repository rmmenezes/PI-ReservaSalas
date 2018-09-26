import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://63d300cd-5d20-4e1a-958e-76039775e4f2.mock.pstmn.io/'
})
