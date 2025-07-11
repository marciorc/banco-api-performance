import http from 'k6/http'
import { check, sleep } from 'k6'

const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
  // iterations: 50,
  // vus: 10,
  // duration: '30s',
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 30 },
    { duration: '20s', target: 30 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], 
    http_req_duration: ['p(90)<20', 'max<9'],
  }
}

export default function () {

  const url = 'http://localhost:3000/login'

  postLogin.username = 'junior.lima'

  const payload = JSON.stringify(postLogin)

  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = http.post(url, payload, params)

  check(response, {
    'Validar que o status é 200': (r) => r.status === 200,
    'Validar que o token é uma string': (r) => typeof(r.json().token) === 'string'
  })

  sleep(1)
}