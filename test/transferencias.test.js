import http from 'k6/http'
import { sleep, check } from 'k6'
import { obterToken } from '../helpers/autenticacao.js'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  const token = obterToken()

  const url = 'http://localhost:3000/transferencias'

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = http.post(url, payload, params)

  check(response, { "status is 201": (res) => res.status === 201 })
  sleep(1)
}
