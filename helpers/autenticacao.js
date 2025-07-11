import http from 'k6/http'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export function obterToken() {

  const url = 'http://localhost:3000/login'

  // caso eu queira alterar o valor presente no postLogin.json antes da request
  // postLogin.username = 'junior.lima'

  const payload = JSON.stringify(postLogin)

  const params = {
    headers: {
        'Content-Type': 'application/json'
    }
  }

  const response = http.post(url, payload, params)

  return response.json('token')
}