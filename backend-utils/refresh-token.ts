const refreshToken = async (accessToken: string, token: string) => {
  const response = await fetch(`http://localhost:4000/api/v1/refreshToken`, {
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

export { refreshToken }
