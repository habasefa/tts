import { API_URL } from 'utils/url'
const signup = async (email: string, password: string, role: string) => {
  console.log(email)
  const response = await fetch(`${API_URL}api/v1/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password,
      email,
      role,
    }),
  })
  console.log(response)
  return response
}

const signin = async (email: string, password: string) => {
  console.log(email,password)
  const response = await fetch(`${API_URL}api/v1/user/login`, {
 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password,
      email,
    }),
  })
  console.log(response)
  return response
}

const signout = async (accessToken: string, token: string) => {
  const response = await fetch(`${API_URL}api/v1/user/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      token,
    }),
  })
  return response
}

const getUserById = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}api/v1/user/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  console.log(response)
  return response
}

export { signup, signin, signout, getUserById }
