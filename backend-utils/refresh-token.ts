import { API_URL } from 'utils/url'

const refreshToken = async (accessToken: string, token: string) => {
  const response = await fetch(`${API_URL}v1/refreshToken`, {
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
