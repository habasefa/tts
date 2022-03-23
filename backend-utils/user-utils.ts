const signup = async (email: string, password: string, role: string) => {
  const response = await fetch(`http://localhost:4000/api/v1/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password,
      email,
      role,
    }),
  })
  return response
}

const signin = async (email: string, password: string) => {
  const response = await fetch(`http://localhost:4000/api/v1/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password,
      email,
    }),
  })
  return response
}

const signout = async (accessToken: string, token: string) => {
  const response = await fetch(`http://localhost:4000/api/v1/user/logout`, {
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

export { signup, signin, signout }
